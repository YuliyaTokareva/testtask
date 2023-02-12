import React from 'react';

import './form.scss';

const Form = () => {
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
          />
          <span className="form-top-text">Label</span>
        </div>
        <div className="form-control">
          <input
            className="form-input"
            type="email"
            id="email"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            size="30"
            required
            placeholder="Email"
            aria-invalid="true"
            aria-describedby="test"
          />
          <span className="form-top-text">Label</span>
          <span className="form-error-text" id="test">
            Please provide a valid email
          </span>
        </div>
        <div className="form-control">
          <input
            className="form-input"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            placeholder="Phone"
          />
          <small>+38 (XXX) XXX - XX - XX</small>
        </div>
        <div className="form-control radio-input">
          <p className="radio-button-title">Select your position</p>

          <label htmlFor="frontend" className="radio">
            <input type="radio" id="frontend" name="position" value="frontend" />
            <span>Frontend developer</span>
          </label>

          <label htmlFor="backend" className="radio">
            <input type="radio" id="backend" name="position" value="backend" />
            <span>Backend developer</span>
          </label>

          <label htmlFor="designer" className="radio">
            <input type="radio" id="designer" name="position" value="designer" />
            <span>Designer</span>
          </label>

          <label htmlFor="qa" className="radio">
            <input type="radio" id="qa" name="position" value="qa" />
            <span>QA</span>
          </label>
        </div>
        <div className="form-control img-custom-label">
          <label htmlFor="img" className="upload-img">
            Upload
          </label>
          <input type="file" id="img" name="img" accept="image/*" hidden />
          <span className="upload-img-description">Upload your photo</span>
        </div>
        <button className="submit-button submit-from" type="submit" disabled>
          Sign up
        </button>
      </form>
    </section>
  );
};
export default Form;
