import React from "react";
import { IonContent, IonItem, IonLabel, IonPage, IonToggle } from "@ionic/react";

const Settings: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonItem>
        <IonLabel>Notificaciones Partidas</IonLabel>
        <IonToggle checked color="primary" value="match_notifications" />
      </IonItem>

      <IonItem>
        <IonLabel>Notificaciones Usuarios</IonLabel>
        <IonToggle checked color="primary" value="users_notifications" />
      </IonItem>
    </IonContent>
  </IonPage>
);

export default Settings;
