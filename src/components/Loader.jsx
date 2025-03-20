import { CatchingPokemon } from "@mui/icons-material";
import Backdrop from "@mui/material/Backdrop";
import { useSelector } from "react-redux";

const Loader = () => {
  const open = useSelector((state) => state.posts);
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CatchingPokemon
          sx={{
            display: {
              width: "100px",
              height: "100px",
              xs: "none",
              md: "flex",
              animation: "rotate 1.5s linear infinite",
              "@keyframes rotate": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            },
          }}
        />
      </Backdrop>
    </>
  );
};
export default Loader;
