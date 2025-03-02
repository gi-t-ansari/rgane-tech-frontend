import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/features/authSlice";
import { FaLinkedin } from "react-icons/fa";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/linkedin"; // Adjust API URL
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        <FaLinkedin className="mr-2 text-xl" />
        Login with LinkedIn
      </button>
    </div>
  );
}
