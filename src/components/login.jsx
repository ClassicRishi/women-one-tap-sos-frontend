import './login-css.css';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';


const LoginPage = () => {
    return (
        <div className="login-container">
            <form className="login-form" action="https://women-one-tap-sos-backend.onrender.com/user/login" method="post">
                <h2 className="heading">Welcome Back</h2>

                <div className="input-group">
                    <EmailIcon />
                    <label htmlFor="Email">Email</label>
                    <input type="email"
                        placeholder="Enter your email"
                        name="email"
                        required
                    />
                </div>

                <div className="input-group">
                    <PasswordIcon />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        required
                    />
                </div>
                <button type="submit" className="login-button">Submit</button>
                <p className="register-link">
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </form>
        </div>
    )
}
export default LoginPage;