import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";

import Button from "../Button/Button";
import SaveMovie from "../SaveMovie/SaveMovie.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Card.styles";
import { CardProps } from "./Card.types";

const Card: FC<CardProps> = ({
  movie,
  height,
  width,
  fromRecommendations = false,
  isSaved,
}) => {
  console.log("Card component mounted"); // Add this line
  console.log(height, width); // Your existing log
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);
  const image = () => {
    if (movie.poster_path === null) {
      return "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg";
    } else {
      return `https://image.tmdb.org/t/p/w185//${movie.poster_path}`;
    }
  };

  const modifyTitle = (name: string) => {
    const nameLength = fromRecommendations ? 30 : 17;
    if (name.length > nameLength) {
      return name.slice(0, 16) + "...";
    }
    return name;
  };
  const handleNavigation = () => {
    const url = `/movie/${movie.id}`;
    if (fromRecommendations) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(`/movie/${movie.id}`);
    }
  };
  const handleWatch = () => {
    const url = `/watch/${movie.id}`;
    if (fromRecommendations) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(`/watch/${movie.id}`);
    }
  };

  return (
    <S.CardContainer height={height} width={width}>
      <S.CardInner>
        <S.CardFront image={image}>
          <S.Year>
            {movie.release_date ? movie.release_date.substr(0, 4) : "N/A"}
          </S.Year>
          <S.Rating>
            <S.IconWrapper>
              <FontAwesomeIcon icon={faStar} />
            </S.IconWrapper>
            {Number(movie.vote_average).toFixed(1)}
          </S.Rating>
          <S.TitleFront> {modifyTitle(movie.title)}</S.TitleFront>
        </S.CardFront>
        <S.CardBack image={image}>
          <S.Gradient>
            <S.ButtonContainer>
              <Button title="Details" handleClick={handleNavigation} />
              <Button title="Watch" handleClick={handleWatch} />
            </S.ButtonContainer>
          </S.Gradient>
          {user && !fromRecommendations && (
            <SaveMovie movie={movie} isSaved={isSaved} />
          )}
          <S.TitleBack> {modifyTitle(movie.title)}</S.TitleBack>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
};

export default Card;
