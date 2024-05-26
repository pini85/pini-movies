import ActorInput from "./FormInput/Inputs/ActorInput";
import DirectorInput from "./FormInput/Inputs/DirectorInput";
import WriterInput from "./FormInput/Inputs/WriterInput";
import * as S from "./CreateInputs.styles";

const CreateInputs = () => {
  return (
    <S.CreateInputContainer>
      <ActorInput width="20rem" />
      <DirectorInput width="20rem" />
      <WriterInput width="20rem" />
    </S.CreateInputContainer>
  );
};
export default CreateInputs;
