import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMBDLogo from "../../images/tmdb_logo.svg";
import { Link } from "react-router-dom";

import { Content, LogoImg, TMDBLogoImg, Wrapper } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to={"/"}>
        <LogoImg src={RMDBLogo} alt={"rmdb-logo"} />
      </Link>
      <TMDBLogoImg src={TMBDLogo} alt={"tmdb-logo"} />
    </Content>
  </Wrapper>
);

export default Header;
