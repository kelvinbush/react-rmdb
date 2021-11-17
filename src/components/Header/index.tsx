import React from "react";

// @ts-ignore
import RMDBLogo from "../../images/react-movie-logo.svg";
// @ts-ignore
import TMBDLogo from "../../images/tmdb_logo.svg";
import { Link } from "react-router-dom";

import { Content, LogoImg, TMDBLogoImg, Wrapper } from "./Header.styles";

const Header: React.FC = () => (
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
