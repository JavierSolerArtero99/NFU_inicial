import {
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonText,
} from "@ionic/react";
import React from "react";

const MatchParticipants: React.FC = () => (
  <IonContent>
    <IonHeader>
      <h2>Jugadores inscritos</h2>
    </IonHeader>
    <IonList>
      <IonItem>
        <div
          style={{
            backgroundImage:
              "url('https://www.gigantes.com/wp-content/uploads/2020/07/Michael-Jordan.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "100px",
            height: "50px",
            width: "50px",
          }}
        ></div>
        <IonText>Michael Jordan</IonText>
      </IonItem>
    </IonList>
  </IonContent>
);

export default MatchParticipants;
