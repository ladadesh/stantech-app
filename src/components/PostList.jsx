import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { typeColor } from "../utlis/constants";
import { useNavigate } from "react-router-dom";
import { setSelectedPost } from "../redux/postsSlice";
import { useDispatch } from "react-redux";

const PostList = ({ post }) => {
  if (!post) return null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(setSelectedPost(post));
    navigate(`/post/${id}`);
  };

  const { sprites, name, types, id } = post;
  const pokemonImgSrc = sprites?.other?.dream_world?.front_default;
  const pokemonName = name[0]?.toUpperCase() + name?.slice(1);
  const themeColor = typeColor[types[0]?.type.name];

  return (
    <>
      <Box textAlign="center" mt={1} onClick={handleClick}>
        <Card
          sx={{
            maxWidth: 300,
            background: `radial-gradient(circle at 100% 0%, ${themeColor} 46%, #EEEEEE 36%)`,
            mx: "auto",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0px 4px 20px ${themeColor}`,
            },
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              image={pokemonImgSrc}
              alt={pokemonName}
              sx={{ height: 140, objectFit: "contain" }}
            />
            <Typography variant="h5" fontWeight="bold" mt={2}>
              {pokemonName}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default PostList;
