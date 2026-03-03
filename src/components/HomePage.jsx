import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
} from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShieldIcon from "@mui/icons-material/Shield";

function HomePage() {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination) return alert("Enter destination");

    navigate("/route", {
      state: { destination },
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background circles */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(233, 69, 96, 0.15)",
          filter: "blur(60px)",
          animation: "pulse 4s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.3 },
            "50%": { transform: "scale(1.2)", opacity: 0.6 },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(108, 92, 231, 0.2)",
          filter: "blur(50px)",
          animation: "pulse 5s ease-in-out infinite",
        }}
      />

      {/* Shield Icon */}
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #e94560, #c23152)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          boxShadow: "0 8px 32px rgba(233, 69, 96, 0.4)",
          animation: "float 3s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        }}
      >
        <ShieldIcon sx={{ fontSize: 40, color: "#fff" }} />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          fontWeight: 700,
          mb: 1,
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        Safe Route
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "rgba(255,255,255,0.6)",
          mb: 4,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        Enter your destination and we'll find the safest route for you
      </Typography>

      {/* Main Card */}
      <Paper
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "35px 30px",
          width: "100%",
          maxWidth: 420,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Current Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 3,
            p: 1.5,
            borderRadius: "12px",
            background: "rgba(76, 175, 80, 0.12)",
            border: "1px solid rgba(76, 175, 80, 0.25)",
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(76, 175, 80, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MyLocationIcon sx={{ color: "#4caf50", fontSize: 20 }} />
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}
            >
              YOUR LOCATION
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#4caf50", fontWeight: 600 }}
            >
              Current Location (GPS)
            </Typography>
          </Box>
        </Box>

        {/* Destination Input */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            placeholder="Where do you want to go?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(255,255,255,0.4)" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.06)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.15)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(233, 69, 96, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#e94560",
                  borderWidth: "2px",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "rgba(255,255,255,0.35)",
                opacity: 1,
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<DirectionsIcon />}
            sx={{
              py: 1.5,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #e94560, #c23152)",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              letterSpacing: "0.5px",
              boxShadow: "0 6px 25px rgba(233, 69, 96, 0.35)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #ff6b81, #e94560)",
                boxShadow: "0 8px 30px rgba(233, 69, 96, 0.5)",
                transform: "translateY(-2px)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }}
          >
            Find Safe Route
          </Button>
        </form>
      </Paper>

      {/* Bottom tagline */}
      <Typography
        variant="caption"
        sx={{
          color: "rgba(255,255,255,0.3)",
          mt: 4,
          textAlign: "center",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontSize: "0.65rem",
        }}
      >
        Your safety is our priority
      </Typography>
    </Box>
  );
}

export default HomePage;