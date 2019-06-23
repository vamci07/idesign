import React from "react";
import { StyledFooter } from "./style";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { red } from "@material-ui/core/colors";

export default function Footer(props) {
  return (
    <StyledFooter>
      <Typography variant="subtitle1">
        <FontAwesomeIcon icon={faHeart} style={{ color: red[500] }} /> Hyd!
      </Typography>
    </StyledFooter>
  );
}
