import { IonButton, IonContent, IonHeader, IonText } from "@ionic/react";
import React from "react";

const MatchInfo: React.FC = () => (
  <IonContent className="matchInfo">
    <IonHeader>
      <h2>Informacion del partido</h2>
    </IonHeader>
    <IonText>
      <p>
        <strong>Campo:</strong>
      </p>
    </IonText>
    <IonText>
      <p>
        <strong>Organizador:</strong>
      </p>
    </IonText>
    <IonText>
      <p>
        <strong>Inscritos:</strong>
      </p>
    </IonText>

    <IonButton>UNITSE A LA PARTIDA</IonButton>

    <IonHeader>
      <h2>Normas</h2>
    </IonHeader>
    <IonText>
        <p>EEEEEEEEEEEEEEEEEE</p>
    </IonText>
  </IonContent>
);

export default MatchInfo;
