import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as candidatesActions from './../../candidates.actions';
import * as candidatesSelectors from '../../candidates.selectors';
import { fetchToken } from '../../candidatesGateway';
import { startFormData, compliteFormData } from '../../../utils/useForm';
import { positionsUrl } from '../../../env';
import RadioButton from '../radioButton/RadioButton';

import './form.scss';

const Form = ({ getPositionsList, positionsList, postFofm, isSendForm }) => {
  const fileField = document.querySelector('input[type="file"]');
  const [errors, setErrors] = useState({});
  const [sendStatus, setSendStatus] = useState({});

  const [dataForm, setDataForm] = useState(startFormData);
  let activeButton = Object.values(dataForm).some((x) => x.length === 0);

  useEffect(() => {
    getPositionsList(positionsUrl);
    fetchToken();
  }, []);
  useEffect(() => {
    if (isSendForm.message === 'Validation failed') {
      setErrors(isSendForm.fails);
      setSendStatus(isSendForm);
    } else {
      setSendStatus(isSendForm);

      setErrors({});
    }
  }, [isSendForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = compliteFormData(dataForm, fileField);
    postFofm(formData);
  };

  return (
    <>
      <section className="post-request">
        <h2 className="post-request__title title">Working with POST request</h2>
        <form>
          <div
            className="form-control"
            type={Object.keys(errors).includes('name') ? 'error' : 'true'}
            fill={dataForm.name ? 'fill' : 'enpty'}>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              onChange={(e) => handleChange(e)}
            />
            {errors.name ? <small>{errors.name.map((el) => el)}</small> : ''}

            <span className="form-top-text">Label</span>
          </div>
          <div
            className="form-control"
            type={errors.email ? 'error' : 'true'}
            fill={dataForm.email ? 'fill' : 'enpty'}>
            <input
              className="form-input"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <span className="form-top-text">Label</span>

            {errors.email ? <small>{errors.email.map((el) => el)}</small> : ''}
          </div>
          <div
            className="form-control"
            type={Object.keys(errors).includes('phone') ? 'error' : 'true'}
            fill={dataForm.phone ? 'fill' : 'enpty'}>
            <input
              className="form-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={dataForm.phone}
              onChange={(e) => handleChange(e)}
            />
            <span className="form-top-text">Label</span>
            {errors.phone ? (
              <small>{errors.phone.map((el) => el)}</small>
            ) : (
              <small>+38 (XXX) XXX - XX - XX</small>
            )}
          </div>
          <div className="form-control radio-input">
            <p className="radio-button-title">Select your position</p>
            {!positionsList
              ? ''
              : positionsList.map((el) => (
                  <RadioButton
                    key={el.id}
                    name={el.name}
                    id={el.id}
                    onChange={(e) => handleChange(e)}
                  />
                ))}
          </div>
          <div
            className="form-control img-custom-label"
            type={Object.keys(errors).includes('photo') ? 'error' : 'true'}>
            <label htmlFor="photo" className="upload-img">
              Upload
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              hidden
              onChange={(e) => handleChange(e)}
            />
            <span className="upload-img-description">
              {dataForm.photo ? `${dataForm.photo}` : 'Upload your photo'}
            </span>
            {errors.photo ? errors.photo.map((el, index) => <small key={index}>{el}</small>) : ''}
          </div>
          {isSendForm.message ? <p className="validationName">{isSendForm.message}</p> : ''}
          <button
            className="submit-button submit-from"
            type="submit"
            onClick={(e) => handlerSubmit(e)}
            disabled={activeButton}>
            Sign up
          </button>
        </form>
      </section>
    </>
  );
};
Form.propTypes = {
  getPositionsList: PropTypes.func.isRequired,
  positionsList: PropTypes.array,
  postFofm: PropTypes.func.isRequired,
  isSendForm: PropTypes.object
};
const mapDispatch = (dispatch) => {
  return {
    getPositionsList: (startUrl) => dispatch(candidatesActions.getPositionsList(startUrl)),
    postFofm: (formData) => dispatch(candidatesActions.getPostFofm(formData))
  };
};
const mapState = (state) => {
  return {
    candidatesList: candidatesSelectors.candidatesListSelector(state),
    isFetching: candidatesSelectors.isFetchingSelector(state),
    positionsList: candidatesSelectors.positionsListSelector(state),
    isSendForm: candidatesSelectors.isSendFormSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Form);
