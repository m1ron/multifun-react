import React, { useState, useEffect } from 'react';
import NiceSelect from 'nice-select2';

export const LoginForm = () => {
  return (
    <form className="form form-login" action="./" method="get">
      <h3 className="form-heading">Log in</h3>
      <div className="form-group">
        <label className="form-label" htmlFor="email"></label>
        <input id="email" type="email" className="form-control form-control-log" required placeholder="Email address" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password"></label>
        <input id="password" type="password" className="form-control form-control-password" required placeholder="Password" />
      </div>
      <div className="form-group form-link form-link-right">
        <a href="/forgot-password" className="white">Forgot password?</a>
      </div>
      <div className="form-group form-group-btn">
        <button className="btn btn-primary" type="submit">Sign In</button>
      </div>
      <div className="form-link form-link-bottom">
        <p>Don't have an account? <a href="/signup"><em>Sign Up</em></a></p>
      </div>
    </form>
  );
};

export const PasswordToggle = ({ id, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePassword = (event) => {
    event.preventDefault();
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="form-group">
      <input id={id} type={isVisible ? "text" : "password"} className="form-control form-control-password" required placeholder={placeholder} autoComplete="off" />
      <span className={`form-password-toggle ${isVisible ? "active" : ""}`} onClick={togglePassword}></span>
    </div>
  );
};

export const NiceSelectComponent = ({ options, id, placeholder, required, defaultValue, onChange, className }) => {
  useEffect(() => {
    if (typeof NiceSelect !== 'undefined') {
      const selectElement = document.querySelector("select.form-select:not(.inited)");
      if (selectElement) {
        console.log(selectElement);
        selectElement.classList.add('inited');
        const instance = new NiceSelect(selectElement);
        console.log(instance);
        //return () => instance.destroy();
      }
    }
  }, []);

  return (
    <div className="form-select-wrap">
      <select id={id} className="form-select" onChange={onChange} defaultValue={defaultValue} placeholder={placeholder} required>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};


export const SignupForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePassword = (event) => {
    event.preventDefault();
    setIsVisible((prev) => !prev);
  };

  return (
    <form className="form form-login" action="./" method="get">
      <h3 className="form-heading">Sign Up</h3>
      <div className="form-group">
        <input id="email" type="email" className="form-control form-control-log" required placeholder="Email address" />
      </div>
      <div className="form-group-flex">
        <div className="form-group">
          <input id="firstname" type="text" className="form-control form-control-user" required placeholder="First name" />
        </div>
        <div className="form-group">
          <input id="lastname" type="text" className="form-control form-control-user" required placeholder="Last name" />
        </div>
      </div>
      <div className="form-group">
        <NiceSelectComponent
          id="country"
          placeholder="Choose your country"
          options={[
            { value: "United States", label: "United States", class: "flag flag-us" },
            { value: "China", label: "China", class: "flag flag-cn" },
            { value: "Czech Republic", label: "Czech Republic", class: "flag flag-cz" },
            { value: "Denmark", label: "Denmark", class: "flag flag-dk" },
            { value: "France", label: "France", class: "flag flag-fr" },
            { value: "Germany", label: "Germany", class: "flag flag-de" },
            { value: "Greece", label: "Greece", class: "flag flag-gr" },
          ]}
        />
      </div>
      <div className="form-group">
        <NiceSelectComponent
          id="language"
          placeholder="Language"
          options={[
            { value: "English", label: "English", class: "flag flag-gb" },
            { value: "Chinese", label: "Chinese", class: "flag flag-cn" },
            { value: "Czech", label: "Czech", class: "flag flag-cz" },
            { value: "Danish", label: "Danish", class: "flag flag-dk" },
            { value: "French", label: "French", class: "flag flag-fr" },
            { value: "German", label: "German", class: "flag flag-de" },
            { value: "Greek", label: "Greek", class: "flag flag-gr" },
            { value: "Hebrew", label: "Hebrew", class: "flag flag-il" },
          ]}
        />
      </div>
      <div className="form-group">
        <PasswordToggle
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <PasswordToggle
          id="password-repeat"
          placeholder="Repeat Password"
        />
      </div>
      <div className="form-group form-link form-link-code">
        <a href="#" className="white"><img className="form-icon" src="assets/img/svg/gift-sm.svg" alt="" />Referral code?</a>
      </div>
      <div className="form-group form-group-btn">
        <button className="btn btn-primary" type="submit">Sign Up</button>
      </div>
      <div className="form-link form-link-bottom">
        <p>Already have an account? <a href="/login"><em>Sign In</em></a></p>
      </div>
    </form>
  );
};

export const ForgotPasswordForm = () => {
  return (
    <form className="form form-login" action="./" method="get">
      <h3 className="form-heading">Forgot Password?</h3>
      <p className="form-subheading">Enter your email below</p>
      <div className="form-group">
        <label className="form-label" htmlFor="email"></label>
        <input id="email" type="email" className="form-control form-control-log" required placeholder="Email address" />
      </div>
      <div className="form-group form-group-btn">
        <button className="btn btn-primary" type="submit">Reset Password</button>
      </div>
      <div className="form-link form-link-back">
        <a href="/login"><img className="form-icon" src="assets/img/svg/arrow-left.svg" alt="" /> Back to login page</a>
      </div>
    </form>
  );
};

export const LoginForm2 = () => {
  return (
    <div class="wrapper">
      <div className="col">
        <div className="slider">
          <div className="slider__item">
            <figure><img src="assets/img/slider/1.jpg" alt="" /></figure>
          </div>
          <div className="slider__item">
            <figure><img src="assets/img/slider/2.jpg" alt="" /></figure>
          </div>
          <div className="slider__item">
            <figure><img src="assets/img/slider/3.jpg" alt="" /></figure>
          </div>
        </div>
      </div>
      <div className="col">
        <form className="form form-login" action="./" method="get">
          <figure className="form-logo"><a href="/"><img src="assets/img/logo.svg" alt="Multifun" /></a></figure>
          <h3 className="form-heading">Login into your account</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="email"></label>
            <input id="email" type="email" className="form-control form-control-log" required placeholder="Email address" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password"></label>
            <input id="password" type="password" className="form-control form-control-password" required placeholder="Password" />
          </div>
          <div className="form-group form-group-btn">
            <button className="btn btn-primary" type="submit">Sign In</button>
          </div>
          <div className="form-link form-link-bottom">
            <p>Don't have an account? <a className="btn btn-outline" href="/signup">Sign up for multifun</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Default export: A full Footer component combining both
const AllForms = () => (
  <div>
    <LoginForm />
    <SignupForm />
    <ForgotPasswordForm />
    <LoginForm2 />
  </div>
);

export default AllForms;