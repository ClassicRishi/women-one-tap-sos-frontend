import { useLocation } from "react-router-dom";

function RoutePage() {
  const { state } = useLocation();
  const { location, destination } = state || {};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Route Page</h2>
      <p>From: {location?.lat}, {location?.lng}</p>
      <p>To: {destination}</p>
      <p>Next step: Calculate & show safest route on map</p>
    </div>
  );
}

export default RoutePage;