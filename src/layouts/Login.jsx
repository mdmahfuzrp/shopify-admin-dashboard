import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    const { user, handleLogin, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
    console.log(user);

    // sanmeetwalia@ sanmeetwalia@gmail.com

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // Normal Email Login Method
    const handleLoginNow = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Hey, Sanmeet!',
                    text: 'Email Login Successful',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })
    }

    // Google Login Method
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                    title: 'Hey, Sanmeet!',
                    text: 'Google Login Successful',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = () => {
        handleGithubSignIn()
            .then(result => {
                Swal.fire({
                    title: 'Hey, Sanmeet!',
                    text: 'Github Login Successful',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
            <div className="bg-white p-10 py-14 rounded-xl">
                <img className="w-[145px] -ms-2" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png" alt="" />
                <h1 className="mt-7 text-2xl font-semibold text-slate-700">Login For Admin Panel</h1>
                <p className="text-slate-500">Your account will allow you to partner with shopify</p>

                <form className="mt-7" onSubmit={handleLoginNow}>
                    <div className="">
                        <input type="email" name="email" placeholder="Enter email" required className="input input-bordered w-full focus:outline-none" />
                    </div>
                    <div className="mt-2">
                        <input type="password" name="password" placeholder="Password" required className="input input-bordered w-full focus:outline-none" />
                    </div>
                    <input type="submit" className="btn btn-block hover:bg-[green] hover:bg-opacity-50 bg-[green] bg-opacity-60 text-white font-medium text-xl mt-1" value="Login" />
                </form>
                <div className="text-center mt-2">or</div>
                <button onClick={handleGoogleLogin} className="border rounded-md py-3 text-center font-medium mt-3 cursor-pointer w-full flex items-center justify-center">
                    <FaGoogle size={23} className="mx-2" />
                    Continue with Google
                </button>
                <button onClick={handleGithubLogin} className="border rounded-md py-3 text-center font-medium mt-3 cursor-pointer w-full flex items-center justify-center">
                    <FaGithub size={23} className="mx-2" />
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default Login;