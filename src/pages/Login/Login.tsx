import React, { useContext, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonButtons,
  IonMenuButton,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonModal,
  IonIcon,
} from "@ionic/react";
import ActivitiesContext, { Activity } from "../../data/activities-context";
import classes from "./AllActivities.module.css";
import CompleteModalActivity from "../../components/CompleteActivityModal";
import { checkmarkOutline } from "ionicons/icons";

const Login: React.FC = () => {
  return (
    // <React.Fragment>
    //   <IonModal isOpen={!!activityToComplete}>
    //     <CompleteModalActivity
    //       activity={activityToComplete as Activity}
    //       dismissModal={closeModal}
    //     />
    //   </IonModal>

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Login</p>
      </IonContent>
    </IonPage>
  );
  {
    /* </React.Fragment> */
  }
};

export default Login;
