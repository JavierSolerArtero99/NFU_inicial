import React from "react";
import { IonIcon, IonPage } from "@ionic/react";
import { basketball, logoEuro, person, time } from "ionicons/icons";
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
        <div>
          <h2>Ontinyent</h2>
          <h3>Partido de futbol</h3>
        </div>
        <div className="infoContainer">
          <div className="info">
            <IonIcon
              style={{
                marginRight: "0.7rem",
                color: "white",
                fontSize: "2.3rem",
              }}
              icon={time}
            />
            <p>04:10</p>
          </div>
          <div className="info">
            <IonIcon
              style={{
                marginRight: "0.7rem",
                color: "white",
                fontSize: "2.3rem",
              }}
              icon={person}
            />
            <p>3</p>
          </div>
          <div className="info">
            <IonIcon
              style={{
                marginRight: "0.7rem",
                color: "white",
                fontSize: "2.3rem",
              }}
              icon={logoEuro}
            />
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MatchCard;
