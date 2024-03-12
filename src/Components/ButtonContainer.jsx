import { ButtonBox, Button } from "./Movies.styled";

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
