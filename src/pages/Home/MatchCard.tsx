import React from "react";
import { IonIcon, IonPage } from "@ionic/react";
import { basketball } from "ionicons/icons";
import "./MatchCard.css";

const MatchCard: React.FC = () => (
  <div className="Card">
    <div className="image"></div>
    <div className="halfCardTop">
      <div className="halfCardTopInside">
        <div className="IconContainer">
          <IonIcon
            style={{ color: "white", fontSize: "2.3rem" }}
            icon={basketball}
          />
        </div>
      </div>
    </div>
    <div className="halfCardBot">
      <div className="halfCardBotInside">
        <h2>Hola</h2>
      </div>
    </div>
  </div>
);

export default MatchCard;
