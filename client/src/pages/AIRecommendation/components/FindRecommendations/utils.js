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
      { type: "checkbox", content: "TV Movie", value: "tv-movie" },
      { type: "checkbox", content: "Thriller", value: "thriller" },
      { type: "checkbox", content: "War", value: "war" },
      { type: "checkbox", content: "Western", value: "western" },
    ],
  },
  {
    question: "Do you have any favorite actors or directors?",
    answers: [{ type: "input", content: "put the input here", value: "" }],
  },
];
