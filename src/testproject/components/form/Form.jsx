import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import * as candidatesActions from './../../candidates.actions';
import * as candidatesSelectors from '../../candidates.selectors';
import { validate } from '../../../utils/useForm';
import { positionsUrl } from '../../../env';
import { omit } from 'lodash';
import './form.scss';
import RadioButton from '../radioButton/RadioButton';

const Form = ({ getPositionsList, positionsList }) => {
  const [errors, setErrors] = useState({});
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    img: ''
  });
  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      case 'name':
        if (value.length <= 3) {
          // we will set the error state

          setErrors({
            ...errors,
            name: 'Username atleast have 3 letters'
          });
        }

        break;

      case 'email':
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: 'Enter a valid email address'
          });
        }
        break;

      case 'phone':
        if (!new RegExp(/^\d{10}$/).test(value)) {
          setErrors({
            ...errors,
            phone: '+38 (XXX) XXX - XX - XX'
          });
        }
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    getPositionsList(positionsUrl);
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setDataForm({
      ...dataForm,
      [name]: val
    });
    validate(e, name, value);
  };

  console.log(errors);
  return (
    <section className="post-request">
      <h2 className="post-request__title title">Working with POST request</h2>
      <form>
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            aria-invalid="true"
            onChange={(e) => handleChange(e)}
          />
          <small> {errors.name}</small>
          <span className="form-top-text">Label</span>
        </div>
        <div className="form-control">
          <input
            className="form-input"
            id="email"
            name="email"
            size="30"
            required
            placeholder="Email"
            aria-invalid="true"
            onChange={(e) => handleChange(e)}
          />
          <span className="form-top-text">Label</span>

          {/* <span className="form-error-text" id="test">
            Please provide a valid email
          </span> */}
          <small> {errors.email}</small>
        </div>
        <div className="form-control">
          <input
            className="form-input"
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone"
            value={dataForm.phone}
            onChange={(e) => handleChange(e)}
          />
          <small> {errors.phone}</small>
          {/* <small>+38 (XXX) XXX - XX - XX</small> */}
        </div>
        <div className="form-control radio-input">
          <p className="radio-button-title">Select your position</p>
          {!positionsList
            ? ''
            : positionsList.map((el) => (
                <RadioButton key={el.id} name={el.name} onChange={(e) => handleChange(e)} />
              ))}
        </div>
        <div className="form-control img-custom-label">
          <label htmlFor="img" className="upload-img">
            Upload
          </label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            hidden
            onChange={(e) => handleChange(e)}
          />
          <span className="upload-img-description">
            {dataForm.img ? `${dataForm.img}` : 'Upload your photo'}
          </span>
        </div>
        <button className="submit-button submit-from" type="submit" disabled>
          Sign up
        </button>
      </form>
    </section>
  );
};
Form.propTypes = {
  // getCandidatesList: PropTypes.func.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // baseUrl: string
};
const mapDispatch = (dispatch) => {
  return {
    getPositionsList: (startUrl) => dispatch(candidatesActions.getPositionsList(startUrl))
  };
};
const mapState = (state) => {
  return {
    candidatesList: candidatesSelectors.candidatesListSelector(state),
    isFetching: candidatesSelectors.isFetchingSelector(state),
    positionsList: candidatesSelectors.positionsListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Form);
