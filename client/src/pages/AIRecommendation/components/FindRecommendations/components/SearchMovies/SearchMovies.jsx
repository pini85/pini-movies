import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetSuggestions from "hooks/reactQuery/useGetSuggestions";
import Suggestion from "components/Suggestions/Suggestions";
import Input from "components/Input/Input.component";
import CastSuggestion from "components/CastSuggestion/CastSuggestion.component";
import * as S from "./searchMovies.styles";
const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // searchQuery, showMovies, showCast, moviesNumber, castNumber, type;
  const { suggestions } = useGetSuggestions(
    searchQuery,
    true,
    false,
    5,
    0,
    "Acting"
  );
  console.log({ suggestions });

  const movieSuggestions = suggestions?.movieObj;

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const addMovieFromSuggestions = (movieName) => {
    console.log({ movieName });
  };

  const renderActorSuggestions = () => {
    console.log({ movieSuggestions });
    return movieSuggestions.movies.map((movie) => {
      return (
        <CastSuggestion
          name={movie.title}
          key={movie.id}
          cb={addMovieFromSuggestions}
        />
      );
    });
  };

  return (
    <S.Container>
      <Input
        name="search"
        type="search"
        label="Search"
        value={searchQuery}
        handleOnChange={handleChange}
        placeholder="Search"
      />

      {movieSuggestions && searchQuery && (
        <S.SuggestionContainer>
          {renderActorSuggestions()}
        </S.SuggestionContainer>
      )}
    </S.Container>
  );
};
export default SearchMovies;
