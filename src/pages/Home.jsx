import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsData, changePage, searchPost } from "../redux/postsSlice";
import { Grid, Container, Typography, TextField, Box } from "@mui/material";
import Loader from "../components/Loader";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CatchingPokemon } from "@mui/icons-material";

const Home = () => {
  const dispatch = useDispatch();
  const { filteredPosts, loading, currentPage, searchValue } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsData(currentPage));
  }, [dispatch, currentPage]);

  const handleNext = () => {
    dispatch(changePage(currentPage + 12));
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      dispatch(changePage(currentPage - 12));
    }
  };

  const handleSearch = (event) => {
    dispatch(searchPost(event.target.value));
  };

  if (loading) return <Loader />;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* for search */}
      <Box display="flex" justifyContent="center" my={3}>
        <TextField
          label="Search for Pokemon..."
          variant="filled"
          fullWidth
          sx={{
            maxWidth: 700,
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            outline: "none",
            border: "none",
          }}
          value={searchValue}
          onChange={handleSearch}
        />
      </Box>

      {/* for pokemon list */}
      <Container>
        <Grid container spacing={4} mb={1}>
          {filteredPosts?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <PostList post={item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* for pagination */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          zIndex: 1000,
        }}
      >
        <Button
          sx={{
            mt: 3,
            backgroundColor: currentPage === 0 ? "#f0f0f0" : "#ee1515",
            color: currentPage === 0 ? "#ee1515" : "#f0f0f0",
          }}
          onClick={() => handlePrevious()}
          startIcon={<ArrowBackIosIcon />}
          disabled={currentPage === 0}
        >
          Back <CatchingPokemon sx={{ ml: 1 }} />
        </Button>
        <Button
          sx={{ mt: 3, backgroundColor: "#ee1515", color: "#f0f0f0" }}
          onClick={() => handleNext()}
          endIcon={<ArrowForwardIosIcon />}
        >
          Next <CatchingPokemon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </div>
  );
};

export default Home;
