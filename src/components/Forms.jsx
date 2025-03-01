import React from 'react';
import Signup from "../pages/Signup.jsx";

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

export const SignupForm = () => {
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
        <div className="form-select-wrap">
          <select className="form-select" id="country" placeholder="Choose your country" required>
            <option value="United States" className="flag flag-us">United States</option>
            <option value="China" className="flag flag-cn">China</option>
            <option value="Czech Republic" className="flag flag-cz">Czech Republic</option>
            <option value="Denmark" className="flag flag-dk">Denmark</option>
            <option value="France" className="flag flag-fr">France</option>
            <option value="Germany" className="flag flag-de">Germany</option>
            <option value="Greece" className="flag flag-gr">Greece</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="form-select-wrap">
          <select className="form-select" id="language" placeholder="Language" required>
            <option value="cn" className="flag flag-cn">Chinese</option>
            <option value="cz" className="flag flag-cz">Czech</option>
            <option value="dk" className="flag flag-dk">Danish</option>
            <option value="en" className="flag flag-gb">English</option>
            <option value="fr" className="flag flag-fr">French</option>
            <option value="de" className="flag flag-de">German</option>
            <option value="el" className="flag flag-gr">Greek</option>
            <option value="he" className="flag flag-il">Hebrew</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <input id="password" type="password" className="form-control form-control-password" required placeholder="Password" autoComplete="off" />
        <a href="#" className="form-password-toggle"></a>
      </div>
      <div className="form-group">
        <input id="password-2" type="password" className="form-control form-control-password" required placeholder="Repeat Password" autoComplete="off" />
        <a href="#" className="form-password-toggle"></a>
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