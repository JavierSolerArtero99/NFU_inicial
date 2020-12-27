import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { star, map } from "ionicons/icons";

const InstalationDetails: React.FC = () => (
  <IonPage>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonTitle>Instalation Details</IonTitle>
    </IonToolbar>
    <IonContent>
      <div style={{ height: "25%", backgroundColor: "blue" }}></div>
      <div
        style={{
          display: "flex",
          paddingTop: "1rem",
          paddingBottom: "3rem",
          justifyContent: "center",
          height: "5%",
          borderBottomColor: "grey",
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
        }}
      >
        <IonIcon style={{ fontSize: "2.3rem" }} color="primary" icon={star} />
        <IonIcon style={{ fontSize: "2.3rem" }} color="primary" icon={star} />
        <IonIcon style={{ fontSize: "2.3rem" }} color="primary" icon={star} />
        <IonIcon style={{ fontSize: "2.3rem" }} color="primary" icon={star} />
        <IonIcon style={{ fontSize: "2.3rem" }} color="medium" icon={star} />
      </div>
      <IonText>
        <h2>Descripción</h2>
      </IonText>
      <IonText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea
          veritatis assumenda vitae aperiam praesentium! Dicta, beatae qui! Quos
          voluptas quibusdam quae. Porro cumque laboriosam et, consectetur quia
          possimus nemo.
        </p>
      </IonText>
      <div
        style={{
          backgroundColor: "blue",
          width: "4rem",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100px"
        }}
      >
        <IonIcon style={{ fontSize: "2.3rem" }} color="medium" icon={map} />
      </div>
    </IonContent>
  </IonPage>
);

export default InstalationDetails;
