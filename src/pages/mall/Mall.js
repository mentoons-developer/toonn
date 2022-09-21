import React from "react";
import Styles from "./mall.module.scss";
import mall from "../../assets/malltop.png";

import audioStories from "../../assets/audio-stories.png";
import illustratedStories from "../../assets/illustrated-stories.png";
import stellaBella from "../../assets/stella_bella.png";
import worhshop from "../../assets/worhshop.png";

import merch1 from "../../assets/merch1.png";
import merch2 from "../../assets/merch2.png";
import merch3 from "../../assets/merch3.png";
import Header from "../../components/header/Header";

function Mall() {
  return (
    <div>
      <Header />
      <div className={Styles.wrapper}>
        <div className={Styles.herosec}>
          <p>Welcome to Toon Mall</p>
          <br />
          <img src={mall} alt="" />
        </div>
        <div className={Styles.menu}>
          <div>
            <img src={audioStories} alt="" />
            <p className={Styles.title}>Buy Audio Stories</p>
          </div>
          <div>
            <img src={illustratedStories} alt="" />
            <p className={Styles.title}>Buy Toonland Movies</p>
          </div>
          <div>
            <img src={worhshop} alt="" />
            <p className={Styles.title}>Buy Knowledge Cards</p>
          </div>
          <div>
            <img src={stellaBella} alt="" />
            <p className={Styles.title}>Buy Comics</p>
          </div>
        </div>

        <div className={Styles.merch}>
          <p>Announcing launch of T-shirts, Mugs & labels</p>
          <div className={Styles.imgs}>
            <img src={merch3} alt="" />
            <img src={merch1} alt="" />
            <img src={merch2} alt="" />
          </div>

          <p>
            We conduct weekly contests on quiz, characters of Toonland. Join our
            contests and win prizes.
          </p>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Mall;
