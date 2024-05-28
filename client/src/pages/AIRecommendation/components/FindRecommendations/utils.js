export const recommendationQuestions = [
  {
    question: "What mood are you in?",
    answers: [
      {
        type: "component",
        content: "HappyEmotion",
        value: "happy",
      },
      {
        type: "component",
        content: "NeutralEmotion",
        value: "neutral",
      },
      {
        type: "component",
        content: "SadEmotion",
        value: "sad",
      },
    ],
  },
  {
    question: "What genres do you like?",
    answers: [
      { type: "checkbox", content: "Action", value: "action" },
      { type: "checkbox", content: "Adventure", value: "adventure" },
      { type: "checkbox", content: "Animation", value: "animation" },
      { type: "checkbox", content: "Comedy", value: "comedy" },
      { type: "checkbox", content: "Crime", value: "crime" },
      { type: "checkbox", content: "Documentary", value: "documentary" },
      { type: "checkbox", content: "Drama", value: "drama" },
      { type: "checkbox", content: "Family", value: "family" },
      { type: "checkbox", content: "Fantasy", value: "fantasy" },
      { type: "checkbox", content: "History", value: "history" },
      { type: "checkbox", content: "Horror", value: "horror" },
      { type: "checkbox", content: "Music", value: "music" },
      { type: "checkbox", content: "Mystery", value: "mystery" },
      { type: "checkbox", content: "Romance", value: "romance" },
      { type: "checkbox", content: "Sci-fi", value: "sci-fi" },
      { type: "checkbox", content: "Thriller", value: "thriller" },
      { type: "checkbox", content: "War", value: "war" },
      { type: "checkbox", content: "Western", value: "western" },
    ],
  },
  {
    question: "Do you like this movie?",
    answers: [
      { type: "component", content: "FineTuneRecommendations", value: null },
    ],
  },
  {
    question: "What is the occasion?",
    answers: [
      {
        type: "checkbox",
        content: "Just watching a movie by myself",
        value: "alone",
      },
      { type: "checkbox", content: "Movie Date", value: "date" },
      {
        type: "checkbox",
        content: "Movie Night with friends",
        value: "friends",
      },
      { type: "checkbox", content: "Family Movie Night", value: "family" },
      { type: "checkbox", content: "Kids' Movie Night", value: "kids" },
      {
        type: "selector",
        placeholder: "Holiday-themed movie night ",

        content: [
          "Christmas",
          "Halloween",
          "Thanksgiving",
          "New Year's Eve",
          "Valentine's Day",
          "Easter",
          "Chinese New Year",
          "Diwali",
          "Hanukkah",
          "St. Patrick's Day",
          "International Womens Day",
          "Earth Day",
          "Ramadan",
          "Lunar New Year",
          "Cinco de Mayo",
          "Mother's Day",
          "Father's Day",
          "Independence Day (4th of July)",
          "Labor Day",
          "Veterans Day",
        ],
        value: "",
      },
      { type: "input", content: "Other (explain)", value: "" },
    ],
  },

  {
    question: "Favorite actors and directors?",
    answers: [{ type: "cast-input", value: [{ actors: [], directors: [] }] }],
  },
  {
    question: "Do you like this movie?",
    answers: [
      { type: "component", content: "FineTuneRecommendations", value: null },
    ],
  },
];
