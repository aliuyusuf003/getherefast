import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      color: "#343a40",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ marginBottom: "0.5rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
