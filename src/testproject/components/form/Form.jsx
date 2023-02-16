import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import * as candidatesActions from './../../candidates.actions';
import * as candidatesSelectors from '../../candidates.selectors';

import { positionsUrl } from '../../../env';

import './form.scss';
import RadioButton from '../radioButton/RadioButton';
let tokenPost = null;

const fetchToken = async () => {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  tokenPost = data.token;

  return data;
};

const tryPost = (data, test, setErrors) => {
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: data,
    headers: {
      Token: test
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.success) {
        // process success response
      } else {
        setErrors(data.fails);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Form = ({ getPositionsList, positionsList }) => {
  const fileField = document.querySelector('input[type="file"]');
  const [errors, setErrors] = useState({});

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: '',
    photo: ''
  });
  let activeButton = Object.values(dataForm).some((x) => x.length === 0);
  //console.log(Object.values(dataForm).every((x) => x.length !== 0));
  //console.log(Object.values(dataForm));
  useEffect(() => {
    getPositionsList(positionsUrl);
    fetchToken();
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchToken();
  //   }, 2400000);
  //   console.log(interval);
  //   return () => clearInterval(interval);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };

  //console.log(errors);
  //console.log(fileField);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    formData.append('position_id', dataForm.position_id);
    formData.append('name', dataForm.name);
    formData.append('email', dataForm.email);
    formData.append('phone', dataForm.phone);
    formData.append('photo', fileField.files[0]);

    tryPost(formData, tokenPost, setErrors);
  };

  return (
    <section className="post-request">
      <h2 className="post-request__title title">Working with POST request</h2>
      <form>
        <div
          className="form-control"
          type={errors.name ? 'error' : 'true'}
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
          type={errors.phone ? 'error' : 'true'}
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
        <div className="form-control radio-input" type={errors.position_id ? 'error' : 'true'}>
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
        <div className="form-control img-custom-label" type={errors.photo ? 'error' : 'true'}>
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
        <button
          className="submit-button submit-from"
          type="submit"
          onClick={(e) => handlerSubmit(e)}
          disabled={activeButton}>
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
