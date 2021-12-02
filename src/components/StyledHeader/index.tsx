import styled from "styled-components";
import { blue } from "@mui/material/colors";

interface IHeader {
  children: string;
}

const StyledHeader = styled.header<IHeader>`
  padding: 20px;
  background-color: ${blue[100]};
`;

export default StyledHeader;
