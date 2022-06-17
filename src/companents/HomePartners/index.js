import React from "react";
import "./index.scss";
import Img1 from "./img.png";
import Img2 from "./img3.png";
import Img3 from "./img4.png";
import Img4 from "./img5.png";
import Img5 from "./img6.png";

const HomePartners = () => {
  return (
    <div className="homePartners">
      <div className="container">
        <ul className="homePartners__partners partners">
            <li className="partners__partner"><img className="partners__img" src={Img1} alt="partners-logotype"/></li>
            <li className="partners__partner"><img className="partners__img" src={Img2} alt="partners-logotype"/></li>
            <li className="partners__partner"><img className="partners__img" src={Img3} alt="partners-logotype"/></li>
            <li className="partners__partner"><img className="partners__img" src={Img4} alt="partners-logotype"/></li>
            <li className="partners__partner"><img className="partners__img" src={Img5} alt="partners-logotype"/></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePartners;
