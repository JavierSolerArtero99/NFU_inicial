import React from "react";
import {
  IonButtons,
  IonContent,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Instalations: React.FC = () => (
  <IonPage>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonTitle>Instalations</IonTitle>
    </IonToolbar>
    <IonContent>
      <IonList style={{ height: "90%"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "30%",
            backgroundColor: "green",
            backgroundImage:
              "url('https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/deporte/pistaatletismogallur.jpg?itok=0LvECHWF')",
          }}
        >
          <IonText style={{color: "white", fontWeight: "bold", fontSize: "2rem" }}>Polideportivo de Madrid</IonText>
        </div>
      </IonList>
    </IonContent>
  </IonPage>
);

export default Instalations;
