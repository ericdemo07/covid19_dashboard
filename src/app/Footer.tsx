import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: FC = () => (
  <div>
    <footer className="Footer">
      <hr />
      <pre>
        For information purposes only. Consult a doctor for medical advice.
        <br />
        Source: www.mohfw.gov.in., www.worldometers.info, www.who.int,
        www.mygov.in, www.whatsapp.com/coronavirus
        <br />
        If you want to get any resouce added, changed or removed drop a{" "}
        <a href="mailto: ericdemo07@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </pre>
    </footer>
  </div>
);
export default Footer;
