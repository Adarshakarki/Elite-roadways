import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // Default role is 'user'
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate('/Login');  // Navigate to the login page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/v1/users/signup", formData, {
        withCredentials: true,
      });

      if (response.status === 201) {
        toast.success("Signup successful! Redirecting to home...");
        setTimeout(() => navigate("/home"), 3000);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F9F6E6] to-[#BAD8B6] px-4">
      <h2 className="text-3xl font-bold text-[#8D77AB] mb-6">Signup</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-sm space-y-4 bg-white bg-opacity-80 p-6 rounded-xl shadow-lg"
      >
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-[#8D77AB]"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-[#8D77AB] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#8D77AB]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-[#8D77AB] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#8D77AB]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:border-[#8D77AB] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-[#8D77AB]"
          >
            Role
          </label>
          <div className="flex items-center space-x-4">
            <label htmlFor="user">
              <input
                type="radio"
                id="user"
                name="role"
                value="user"
                checked={formData.role === "user"}
                onChange={handleChange}
                className="accent-[#8D77AB] mr-2"
              />
              User
            </label>
            <label htmlFor="admin">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={formData.role === "admin"}
                onChange={handleChange}
                className="accent-[#8D77AB] mr-2"
              />
              Admin
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-[#8D77AB] text-white font-medium rounded-md shadow-lg hover:bg-[#2A004E] transition duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <button
          onClick={handleLoginRedirect}  // Trigger the navigation on click
          className="text-[#8D77AB] font-medium hover:text-[#2A004E]"
        >
          Login
        </button>
      </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;