import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { useSelector } from "react-redux";
import { typeColor } from "../utlis/constants";

const PostDetail = () => {
  const selectedPokemon = useSelector((state) => state.posts.selectedPost);
  if (!selectedPokemon)
    return <Typography textAlign="center">Pokémon not found</Typography>;

  const {
    stats,
    sprites,
    name,
    types,
    weight,
    height,
    base_experience,
    abilities,
    moves,
  } = selectedPokemon;

  const imgSrc = sprites.other.dream_world.front_default;
  const pokeName = name.charAt(0).toUpperCase() + name.slice(1);
  const themeColor = types.length > 0 ? typeColor[types[0].type.name] : "gray";

  return (
    <Box display="flex" justifyContent="center" mt={3} p={2}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: 900,
          background: `radial-gradient(circle at 10% 10%, ${themeColor} 40%, #EEEEEE 60%)`,
          mx: "auto",
          p: 3,
        }}
      >
        {/* pokekmon image */}
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <CardMedia
            component="img"
            image={imgSrc}
            alt={pokeName}
            sx={{
              width: { xs: "100%", md: 300 },
              height: 300,
              objectFit: "contain",
            }}
          />
        </Box>

        {/* pokemon details */}
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} textAlign="center">
            {pokeName}
          </Typography>

          {/* type of pokmon */}
          <Box display="flex" justifyContent="center" gap={1} mb={2}>
            {types.map((item, index) => (
              <Chip
                key={index}
                label={item.type.name}
                sx={{ backgroundColor: themeColor, color: "white" }}
              />
            ))}
          </Box>

          {/* info of pokemn */}
          <Typography variant="h6">
            Base Experience: {base_experience}
          </Typography>
          <Typography variant="h6">Weight: {weight} kg</Typography>
          <Typography variant="h6">Height: {height} m</Typography>
          <Box mt={2}>
            <Typography variant="h6">Abilities:</Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
              {abilities.map((ability, index) => (
                <Chip
                  key={index}
                  label={ability.ability.name}
                  sx={{ backgroundColor: "#2196F3", color: "white" }}
                />
              ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="h6">Top Moves:</Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
              {moves.slice(0, 5).map((move, index) => (
                <Chip
                  key={index}
                  label={move.move.name}
                  sx={{ backgroundColor: "#FF9800", color: "white" }}
                />
              ))}
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-around" mt={2}>
            <Box textAlign="center">
              <Typography variant="h6">{stats[0].base_stat}</Typography>
              <Typography variant="body2">HP</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h6">{stats[1].base_stat}</Typography>
              <Typography variant="body2">Attack</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h6">{stats[2].base_stat}</Typography>
              <Typography variant="body2">Defense</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h6">{stats[5].base_stat}</Typography>
              <Typography variant="body2">Speed</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostDetail;
