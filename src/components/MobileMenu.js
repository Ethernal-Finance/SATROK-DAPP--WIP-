import React from "react";

import { ReactComponent as Rewardsred } from "../assets/images/rewardsred.svg";
import { ReactComponent as Rewardsgreen } from "../assets/images/rewardsgreen.svg";
import { ReactComponent as Gamepadred } from "../assets/images/gamepadred.svg";
import { ReactComponent as Gamepadgreen } from "../assets/images/gamepadgreen.svg";
import { ReactComponent as Transfer1 } from "../assets/images/Transfer.svg";
import { ReactComponent as Exchange2 } from "../assets/images/Transfer2.svg";

const MobileMenu = (props) => {
  return (
    <div className="mobile-menu only-mobile  d-flex justify-content-around">
      <div
        className={props.view === 1 ? "selected-tab" : ""}
        onClick={() => {
          props.changeView(1);
        }}
      >
        <div>{props.view === 1 ? <Rewardsgreen /> : <Rewardsred />}</div>
        <div className="text-gray">Rewards</div>
      </div>
      <div
        className={props.view === 3 ? "selected-tab" : ""}
        onClick={() => {
          props.changeView(3);
        }}
      >
        <div>{props.view === 3 ? <Transfer1 /> : <Exchange2 />}</div>
        <div className="text-gray">Transfer</div>
      </div>
      <div
        className={props.view === 2 ? "selected-tab" : ""}
        onClick={() => {
          props.changeView(2);
        }}
      >
        <div>{props.view === 2 ? <Gamepadgreen /> : <Gamepadred />}</div>
        <div className="text-gray">Play Game</div>
      </div>
    </div>
  );
};

export default MobileMenu;
