import React from "react";
import { render, screen } from "@testing-library/react";
import PostList from "../components/PostList";

const mockPokemon = {
  name: "Bulbasaur",
  sprites: { other: { dream_world: { front_default: "pikachu.png" } } },
  stats: [{ base_stat: 49 }],
  types: [{ type: { name: "grass" } }],
};

test("renders Pokemon card with name and image", () => {
  render(<PostList post={mockPokemon} />);

  expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();

  const image = screen.getByAltText(/Bulbasaur/i);
  expect(image).toBeInTheDocument();
});
