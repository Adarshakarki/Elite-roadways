import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSignupRedirect = () => {
        navigate('/signup');  // Navigate to the signup page
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/api/v1/users/login', formData, {
                withCredentials: true,
            });

            // Use the response data (if any) from the backend
            toast.success(data.message || 'Login successful! Redirecting to home...', {
                position: 'top-right',
                autoClose: 3000,
            });

            // Navigate to /home after a short delay
            setTimeout(() => navigate('/home'), 3000);
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);

            toast.error(error.response?.data?.message || 'Login failed. Please try again.', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#F9F6E6] to-[#BAD8B6] px-4">
            <h2 className="text-3xl font-bold text-[#8D77AB] mb-6">Login to Your Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm space-y-4 bg-white bg-opacity-70 p-6 rounded-xl shadow-lg">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-md border border-[#BAD8B6] focus:outline-none focus:ring-2 focus:ring-[#8D77AB]"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-md border border-[#BAD8B6] focus:outline-none focus:ring-2 focus:ring-[#8D77AB] "
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-[#8D77AB] text-white font-medium rounded-md shadow-lg hover:bg-[#2A004E] transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Login
                </button>
                <p className="mt-4 text-sm text-gray-600">
        Don't have an account yet?{' '}
        <button
          onClick={handleSignupRedirect}  // Trigger the navigation on click
          className="text-[#8D77AB] font-medium hover:text-[#2A004E]"
        >
          Create one
        </button>
      </p>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;