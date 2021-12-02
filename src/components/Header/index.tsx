import React from "react";

interface IHeader {
  children: string;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
