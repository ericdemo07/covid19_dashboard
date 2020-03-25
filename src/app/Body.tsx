import React, { FC } from "react";
import { Button } from "react-bootstrap";

const Body: FC = () => (
  <div className="Body-Wrapper">
    <div className="Body-Wrapper-Item"></div>
    <div className="Body">
      <Button
        variant="outline-dark"
        className="Body-Button"
        href="http://webcache.googleusercontent.com/search?q=cache:https://mohfw.gov.in/&strip=1"
        type="reset"
      >
        Coronavirus information - India
        <br />
        <sub>Ministry of Health and Family Welfare, Govt. of India</sub>
      </Button>

      <Button
        variant="outline-dark"
        className="Body-Button"
        href="https://www.worldometers.info/coronavirus/"
        type="reset"
      >
        Corona virus stats - World
        <br />
        <sub>https://www.worldometers.info</sub>
      </Button>

      <Button
        variant="outline-dark"
        className="Body-Button"
        href="https://www.mygov.in/covid-19"
        type="reset"
      >
        Coronavirus information - India
        <br />
        <sub>Govt. of India</sub>
      </Button>

      <Button
        variant="outline-dark"
        className="Body-Button"
        href="https://api.whatsapp.com/send?phone=919013151515&text=Hi"
        type="reset"
      >
        Govt. of India - Whatsapp support
        <br />
        <sub>Govt. of India</sub>
      </Button>

      <Button
        variant="outline-dark"
        className="Body-Button"
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/"
        type="reset"
      >
        Coronavirus information - World
        <br />
        <sub>World Health Organization</sub>
      </Button>

      <Button
        variant="outline-dark"
        className="Body-Button"
        href="https://api.whatsapp.com/send?phone=41225017655&text=hi"
        type="reset"
      >
        WHO - Whatsapp support
        <br />
        <sub>World Health Organization</sub>
      </Button>
    </div>
    <div className="Body-Wrapper-Item"></div>
  </div>
);
export default Body;
