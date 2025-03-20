import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

//for fetching the data
export const fetchPostsData = createAsyncThunk(
  "posts/fetchPosts",
  async (offset = 0) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
      );
      const pokemonList = response.data.results;

      //for getting each details of every pokemon as in above api only name of pokmon is present
      const detailedPokemon = await Promise.all(
        pokemonList?.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return details?.data;
        })
      );

      return detailedPokemon;
    } catch (error) {
      throw new Error("Failed to fetch Pokémon data");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    selectedPost: null,
    loading: false,
    error: null,
    post: {},
    currentPage: 0,
    searchValue: "",
    filteredPosts: [],
  },
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    searchPost: (state, action) => {
      state.searchValue = action.payload;
      //filtering the pokmon as per smart search
      state.filteredPosts = state.postsList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsData.fulfilled, (state, action) => {
        state.loading = false;
        state.postsList = action.payload;
        state.filteredPosts = action.payload;
      })
      .addCase(fetchPostsData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch Pokemon List.";
      });
  },
});

export const { setSelectedPost, changePage, searchPost } = postsSlice.actions;
export default postsSlice.reducer;
