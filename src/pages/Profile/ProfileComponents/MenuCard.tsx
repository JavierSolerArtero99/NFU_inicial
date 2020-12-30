import React from "react";
import { IonIcon } from "@ionic/react";
import { star, map } from "ionicons/icons";

import "./MenuCard.css"

interface Props {
  name: String;
  icon: any
}

const MenuCard: React.FC<Props> = (props) => (
  <div className="MenuCard">
    <IonIcon style={{ color: "#ffffff", fontSize: "2rem" }} icon={props.icon} />
    <p style={{ fontWeight:"bold", color: "#ffffff"}}>{props.name}</p>
  </div>
);

export default MenuCard;
