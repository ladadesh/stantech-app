import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

function Header() {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#ee1515" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#f0f0f0",
              textDecoration: "none",
            }}
          >
            Pokemon App
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
