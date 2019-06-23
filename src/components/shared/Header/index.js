import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import bgImage from "shared/images/6.jpg";

export const BgDiv = styled.div`
  background-image: url(${bgImage});
  height: 560px;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 1280px) {
    background-size: cover;
  }
`;

export default function Header(props) {
  return (
    <BgDiv>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h3" style={{ fontFamily: "Montez", fontWeight: 700, fontSize: '4rem' }}>
            R . designs
          </Typography>
        </Toolbar>
      </AppBar>
    </BgDiv>
  );
}
