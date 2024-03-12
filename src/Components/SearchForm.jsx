import { BsSearch } from "react-icons/bs";
import { CustomForm, Button } from "./Movies.styled";

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
