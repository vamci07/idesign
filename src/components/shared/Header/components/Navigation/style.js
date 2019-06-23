import styled from "styled-components";

export const HeaderNav = styled.div`
  font-size: 1rem;
  font-family: "Bungee Inline";
  text-transform: uppercase;
  z-index: 100;
  top: 0;
  height: 48px;

  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
    margin: 0 16px;
    padding-top: 16px;
    position: relative;
  }
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    :hover {
      color: #fff;
      :before {
        width: 100%;
      }
    }
    :before {
      content: "";
      display: block;
      height: 4px;
      background-color: #fff;
      position: absolute;
      top: 0;
      width: 0%;
      transition: all ease-in-out 250ms;
    }
  }
`;
