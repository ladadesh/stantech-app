import { Button } from "@mui/material";
import PostDetail from "../components/PostDetail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        sx={{ mt: 3, backgroundColor: "#f0f0f0", color: "#ee1515" }}
        onClick={() => navigate("/")}
        startIcon={<ArrowBackIcon />}
      >
        Back to Pokemon List
      </Button>
      <PostDetail />
    </>
  );
};

export default Details;
