import { ChangeEvent } from "react";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

const StyledFormControl = styled(FormControl)`
  .MuiInput-root {
    border: 1px solid black;
    border-radius: 20px;

    &::before {
      content: unset;
    }
  }
`;

interface IInputComponent {
  search: string;
  setSearch: (param: string) => void;
}

const InputComponent: React.FC<IInputComponent> = ({
  search,
  setSearch,
}): JSX.Element => {
  return (
    <StyledFormControl>
      <InputLabel htmlFor="input-with-icon-adornment">Company name</InputLabel>
      <Input
        disableUnderline={true}
        id="input-with-icon-adornment"
        placeholder="Example Apple"
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </StyledFormControl>
  );
};

export default InputComponent;
