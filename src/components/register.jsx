import { Link } from 'react-router-dom';
import './register-css.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PasswordIcon from '@mui/icons-material/Password';
import Checkbox from '@mui/material/Checkbox';


export default function RegisterPage() {

  return (
    <div className="register-container">
      <form className="register-form" action="/api/user/register" method="post">
        <h2 className='heading'>Create Account</h2>
        <PersonIcon />
        <div className="input-group">
          <label>Full name</label>
          <input
            className="input"
            type="text"
            placeholder="Your full name"
            name="fullname"
            required
          />
        </div>

        <div className="input-group">
          <EmailIcon />
          <label>Email</label>
          <input
            className="input"
            type="email"
            placeholder="you@example.com"
            name="email"
            required
          />
        </div>

        <div className="input-group">
          <ContactPhoneIcon />
          <label>Phone</label>
          <input
            className="input"
            type="tel"
            placeholder="+1 555 555 5555"
            name="phone"
            required
          />
        </div>
        <div className="input-group">
          <PasswordIcon />
          <label>Password</label>
          <input
            className="input"
            type="password"
            placeholder="Create a password"
            name="password"
            required
          />
        </div>

        <button type="submit" className="login-button">Register</button>
        <p className="form-meta">By creating an account you agree to our terms.</p>
        <Checkbox required></Checkbox>
          <label className="checkbox-label">I agree to the terms and conditions</label>
        <p className="auth-switch">Already have an account? <Link to="/login">Log in here</Link></p>
      </form>
    </div>
  );
}