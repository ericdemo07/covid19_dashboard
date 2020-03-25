import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => (
  <div>
    <br />
    <br />
    <FontAwesomeIcon icon={faPaintRoller} size="lg" />
    &nbsp;Under construction&nbsp;
    <FontAwesomeIcon icon={faPaintRoller} size="lg" />
    <br />
    <br />
  </div>
);
export default Header;
