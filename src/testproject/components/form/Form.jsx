import React from 'react';

//import './header.scss';

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
          />
        </div>
        <div className="form-control">
          <input
            className="form-input"
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="30"
            required
            placeholder="Email"
          />
        </div>
        <div className="form-control">
          <input
            className="form-input"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            placeholder="Email"
          />
          <small>+38 (XXX) XXX - XX - XX</small>
        </div>
        <div className="form-control">
          <p>Select your position</p>
          <input type="radio" id="frontend" name="position" value="frontend" />
          <label htmlFor="frontend">Frontend developer</label>
          <input type="radio" id="backend" name="position" value="backend" />
          <label htmlFor="backend">Backend developer</label>
          <input type="radio" id="designer" name="position" value="designer" />
          <label htmlFor="designer">Designer</label>
          <input type="radio" id="qa" name="position" value="qa" />
          <label htmlFor="qa">QA</label>
        </div>
        <div className="form-control">
          <button
          // style="display:block;width:120px; height:30px;"
          // onclick="document.getElementById('getFile').click()"
          >
            Upload
          </button>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            placeholder="Select"
            style={{ display: 'none' }}
          />
          <label htmlFor="img">Upload your photo</label>
        </div>
        <button className="submit-button" type="submit" disabled>
          Sign up
        </button>
      </form>
    </section>
  );
};
export default Form;
