import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as candidatesActions from './../../candidates.actions';
import * as candidatesSelectors from '../../candidates.selectors';
import { fetchToken } from '../../candidatesGateway';
import { startFormData, compliteFormData } from '../../../utils/useForm';
import RadioButton from '../radioButton/RadioButton';
const POSITIONS_URL = process.env.REACT_APP_POSITIONS_URL;

import './form.scss';

const Form = ({ getPositionsList, positionsList, postFofm, isSendForm }) => {
  const fileField = document.querySelector('input[type="file"]');
  const [errors, setErrors] = useState({});
  const [sendStatus, setSendStatus] = useState({});

  const [nameEmpty, setNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [photoEmpty, setPhotoEmpty] = useState(false);
  const [photoName, setPhotoName] = useState('');
  const [nameValidation, setNameValidation] = useState('The Name must be filled');
  const [emailValidation, setEamailValidation] = useState('The Email must be filled');
  const [phoneValidation, setPhoneValidation] = useState(
    'The Phone must be +38 (XXX) XXX - XX - XX'
  );
  const [photoValidation, setPhotoValidation] = useState('The Photo must be filled');

  const [dataForm, setDataForm] = useState(startFormData);
  //let activeButton = Object.values(dataForm).some((x) => x.length === 0);
  let activeButton = [nameValidation, emailValidation, phoneValidation, photoValidation].some(
    (x) => x.length !== 0
  );
  useEffect(() => {
    getPositionsList(POSITIONS_URL);
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
    const { name, value, files } = e.target;

    switch (e.target.name) {
      case 'name':
        setNameEmpty(true);
        const regName = /^([0-9]*[a-zA-Z]){3,}[0-9]*$/;
        if (!regName.test(String(e.target.value).toLowerCase())) {
          setNameValidation('Name shud be more than 3 simbols');
        } else {
          setNameValidation('');
        }
        break;
      case 'email':
        setEmailEmpty(true);
        const regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regEmail.test(String(e.target.value).toLowerCase())) {
          setEamailValidation('Email incorrect');
        } else {
          setEamailValidation('');
        }
        break;
      case 'phone':
        setPhoneEmpty(true);
        const regPhone = /^\+38\d{10}$/;
        if (!regPhone.test(e.target.value)) {
          setPhoneValidation('Phone incorrect');
        } else {
          setPhoneValidation('');
        }
        break;
      case 'photo':
        setPhotoName(files[0].name);

        const maxSize = 1000000; // 1MB
        //const desiredWidth = 70;
        //const desiredHeight = 70;
        const fileSize = files[0].size;

        if (fileSize > maxSize) {
          setPhotoValidation('File size is too large');
        } else {
          setPhotoValidation('');
        }

        break;
    }

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
  const blurhandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameEmpty(true);

        break;
      case 'email':
        setEmailEmpty(true);

        break;
      case 'phone':
        setPhoneEmpty(true);

        break;
      case 'photo':
        setPhotoEmpty(true);

        break;
    }
    return;
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
              onBlur={(e) => blurhandler(e)}
            />
            {nameValidation && nameEmpty ? (
              <small className="errorCheck">{nameValidation}</small>
            ) : (
              ''
            )}
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
              onBlur={(e) => blurhandler(e)}
            />
            <span className="form-top-text">Label</span>
            {emailValidation && emailEmpty ? (
              <small className="errorCheck">{emailValidation}</small>
            ) : (
              ''
            )}
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
              onBlur={(e) => blurhandler(e)}
            />
            <span className="form-top-text">Label</span>
            {phoneValidation && phoneEmpty ? (
              <small className="errorCheck">{phoneValidation}</small>
            ) : (
              ''
            )}
            {errors.phone ? (
              <small>{errors.phone.map((el) => el)}</small>
            ) : (
              ''
              // <small>+38 (XXX) XXX - XX - XX</small>
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
            <label htmlFor="photo" name="photo" className="upload-img">
              Upload
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept=".png"
              hidden
              onChange={(e) => handleChange(e)}
              onClick={(e) => blurhandler(e)}
            />

            <span className="upload-img-description">
              {photoName ? `${photoName}` : 'Upload your photo'}
            </span>
            {/* {photoValidation && photoEmpty ? (
              <small className="errorCheck">{photoValidation}</small>
            ) : (
              ''
            )} */}
            <div>
              {photoValidation && photoEmpty ? (
                <small className="errorCheck">{photoValidation}</small>
              ) : (
                ''
              )}
            </div>
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
