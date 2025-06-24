// src/components/AuthLayout.jsx

function AuthLayout({ children, method }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Panel */}
      <div
        className="hidden md:flex flex-col items-center justify-center text-white p-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-300">Welcome to GetThereFast</h2>
        <p className="text-lg text-center max-w-md text-white">
          {method === "login"
            ? "The fastest way to get there. Sign in to continue your journey."
            : "Create an account and start your journey with GetThereFast."}
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-8 bg-gray-100">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
