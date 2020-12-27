import React from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption } from "@ionic/react";

const ModifyProfile: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonList>
        <h2>Datos personales</h2>
        <IonItem>
          <IonInput placeholder="Nombre de usuario"></IonInput>
        </IonItem>

        <IonRadioGroup
          value={2}
          // onIonChange={(e) => setSelected(e.detail.value)}
        >
          <IonListHeader>
            <IonLabel>Sexo</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Femenino</IonLabel>
            <IonRadio slot="start" value="femenino" />
          </IonItem>

          <IonItem>
            <IonLabel>Masculino</IonLabel>
            <IonRadio slot="start" value="masculino" />
          </IonItem>

          <IonItem>
            <IonLabel>No binario</IonLabel>
            <IonRadio slot="start" value="no_binario" />
          </IonItem>
        </IonRadioGroup>

        <IonListHeader>
          <IonLabel>F. Nacimiento</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonInput type="date" placeholder="Enter Input"></IonInput>
        </IonItem>

        <IonListHeader>
          <IonLabel>Por donde juegas?</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonSelect placeholder="Provincia">
            <IonSelectOption value="Alicante">Alicante</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonSelect placeholder="Poblacion">
            <IonSelectOption value="Alcoy">Alcoy</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default ModifyProfile;
