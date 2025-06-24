import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    // return (
    //     <form onSubmit={handleSubmit} className="form-container">
    //         <h1>{name}</h1>
    //         <input
    //             className="form-input"
    //             type="text"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //             placeholder="Username"
    //         />
    //         <input
    //             className="form-input"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             placeholder="Password"
    //         />
    //         {loading && <LoadingIndicator />}
    //         <button className="form-button" type="submit">
    //             {name}
    //         </button>
    //     </form>
    // );

return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('/bg.jpg')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"> </div>
            
            {/* Form Container */}
            <form
                onSubmit={handleSubmit}
                className="relative z-10 bg-white bg-opacity-95 p-8 rounded-2xl shadow-xl w-96 max-w-full"
            >
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Get There Fast</h1>


                <input
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                
                {loading && <LoadingIndicator />}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    {name}
                </button>
            </form>
        </div>
    );
}

export default Form