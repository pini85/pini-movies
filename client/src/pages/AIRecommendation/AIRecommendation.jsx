import { useState } from "react";
import Button from "components/Button/Button";
import CategoryTitle from "components/CategoryTitle/CategoryTitle.component";
import Modal from "components/Modal/Modal.component";
import FineTuneRecommendations from "./components/FineTuneRecommendations/FineTuneRecommendations";
import FindRecommendations from "./components/FindRecommendations/FindRecommendations";
const AIRecommendation = () => {
  const [toggleFindRecommendations, setToggleFindRecommendations] =
    useState(false);
  const [fineTuneRecommendations, setFineTuneRecommendations] = useState(false);
  return (
    <div>
      <CategoryTitle title="AI Recommendations" />
      <Button
        title="Find Recommendations"
        handleClick={() => {
          setToggleFindRecommendations((prevState) => !prevState);
        }}
      />
      <Button
        title="Fine Tune Recommendations"
        handleClick={() => {
          setFineTuneRecommendations((prevState) => !prevState);
        }}
      />
      {toggleFindRecommendations && (
        <Modal
          title="Find Recommendations"
          isToggled={toggleFindRecommendations}
          setToggled={setToggleFindRecommendations}
        >
          <FindRecommendations />
        </Modal>
      )}
      {fineTuneRecommendations && (
        <Modal
          title="Fine Tune Recommendations"
          isToggled={fineTuneRecommendations}
          setToggled={setFineTuneRecommendations}
        >
          <FineTuneRecommendations />
        </Modal>
      )}
    </div>
  );
};
export default AIRecommendation;
