import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import HomeIcon from "@mui/icons-material/Home";
import { renderToStaticMarkup } from "react-dom/server";

/* ── Custom pulsing location marker ── */
const locationIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="20" fill="rgba(233, 69, 96, 0.15)" stroke="none">
    <animate attributeName="r" values="14;20;14" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="24" cy="24" r="10" fill="#e94560" stroke="#fff" stroke-width="3"/>
</svg>
`;

const locationIcon = L.divIcon({
  html: `
    <div style="position:relative; width:48px; height:48px;">
      ${locationIconSvg}
      <div style="
        position:absolute;
        bottom:-22px;
        left:50%;
        transform:translateX(-50%);
        background:rgba(0,0,0,0.75);
        color:#fff;
        padding:2px 8px;
        border-radius:8px;
        font-size:11px;
        font-weight:600;
        white-space:nowrap;
        letter-spacing:0.5px;
        backdrop-filter:blur(4px);
      ">📍 I am here</div>
    </div>
  `,
  className: "",
  iconSize: [48, 48],
  iconAnchor: [24, 24],
  popupAnchor: [0, -30],
});

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 15);
  return null;
}

const MapComponent = ({ onNextClick }) => {
  const navigate = useNavigate();
  const [position, setPosition] = useState(null);

  const handleGoHome = () => {
    if (onNextClick) {
      onNextClick();
    } else {
      navigate("/homepage");
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (success) => {
        const { latitude, longitude } = success.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        alert("Location error: " + error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  if (!position)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          color: "#fff",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            border: "4px solid rgba(233,69,96,0.3)",
            borderTop: "4px solid #e94560",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <span style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: 1 }}>
          Fetching your location...
        </span>
      </div>
    );

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={position} />
        <Marker position={position} icon={locationIcon} />
      </MapContainer>

      {/* Modern "Destination" Button */}
      <button
        onClick={handleGoHome}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 22px",
          background: "linear-gradient(135deg, #e94560, #c23152)",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.5px",
          boxShadow: "0 4px 20px rgba(233, 69, 96, 0.4)",
          transition: "all 0.3s ease",
          backdropFilter: "blur(10px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 6px 28px rgba(233, 69, 96, 0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(233, 69, 96, 0.4)";
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Destination
      </button>
    </div>
  );
};

export default MapComponent;