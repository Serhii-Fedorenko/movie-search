import { BsSearch } from "react-icons/bs";
import { Button } from "./MovieCard.styled";
import { CustomForm } from "./Movies.styled";

const SearchForm = ({ query, updateQueryString, handleFormSubmit }) => {
  return (
    <CustomForm onSubmit={handleFormSubmit}>
      <input type="text" value={query} onChange={updateQueryString} />
      <Button type="submit">
        <BsSearch />
      </Button>
    </CustomForm>
  );
};

export default SearchForm;
