import { useNavigate } from "react-router-dom";
import MapComponent from "./MapComponent";

function MapPage() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/homepage");
  };

  return <MapComponent onNextClick={handleNextClick} />;
}

export default MapPage;