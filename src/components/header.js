import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "nav-active" } : null;

const Header = ({ siteTitle }) => (
  <MainHeader>
    <TitleNavContainer>
      <TitleHeader>
        <Link to="/">
          <LogoLinkImg
            src={require("../images/decoupled-blog-logo.svg")}
            alt={siteTitle}
          />
        </Link>
      </TitleHeader>
      <NavMenu id="menu">
        <NavItem>
          <Link
            to="/article/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Article
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/video/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Video
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/code/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Code
          </Link>
        </NavItem>
      </NavMenu>
    </TitleNavContainer>
  </MainHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const MainHeader = styled.header`
  padding-top: 0.5rem;
  color: var(--primary-color);
  background: var(--white);
  margin-bottom: 1.5rem;
  h1 {
    margin: 0;
  }
  border-bottom: 2px dashed var(--primary-color);
`;

const TitleNavContainer = styled.div`
  margin: 0 auto;
  max-width: 840px;
  padding: 0px 1.0875rem;
  padding-top: 0;
  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleHeader = styled.h1`
  float: left;
`;

const LogoLinkImg = styled.img`
  width: 100%;
  margin-bottom: 0;
`;

const NavMenu = styled.ul`
  display: inline-block;
  float: right;
  margin-bottom: 0.25rem;
  margin-left: 0;

  @media (min-width: 600px) {
    margin-top: 1rem;
  }
`;

const NavItem = styled.li`
  display: inline;
  a {
    padding: 5px 10px;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      border-bottom: 1px solid;
  }
  &:hover {
    border-bottom: 1px solid #139fc9;
  }
`;

export default Header;
