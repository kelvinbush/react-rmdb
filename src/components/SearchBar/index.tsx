import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import searchIcon from "../../images/search-icon.svg";
import { Content, Wrapper } from "./SearchBar.styles";

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder={"Search Movie"}
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
