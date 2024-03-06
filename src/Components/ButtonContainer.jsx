import { Button } from "./MovieCard.styled";
import { ButtonBox } from "./Movies.styled";

const ButtonContainer = ({ handleNextButtonClick, handlePrevButtonClick }) => {
  return (
    <ButtonBox>
      <Button type="button" onClick={handlePrevButtonClick}>
        prev
      </Button>
      <Button type="button" onClick={handleNextButtonClick}>
        next
      </Button>
    </ButtonBox>
  );
};

export default ButtonContainer;
