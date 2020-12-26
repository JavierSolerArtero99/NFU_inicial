import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const CreateMatches: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Create Match</IonTitle>
      </IonToolbar>
      <IonContent>
        <IonList>
          {/* Paso 1 */}
          <IonItemDivider>Paso 1: Nombre y deporte</IonItemDivider>
          <IonItem>
            <IonInput placeholder="Nombre de la partida"></IonInput>
          </IonItem>

          <IonItem>
            <IonSelect placeholder="Deporte">
              <IonSelectOption value="basket">Basket</IonSelectOption>
              <IonSelectOption value="football">Football</IonSelectOption>
              <IonSelectOption value="tennis">Tennis</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Paso 2 */}
          <IonItemDivider>Paso 2: Donde y cuando?</IonItemDivider>
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
          <IonItem>
            <IonInput
              placeholder="Nombre de la instalacion"
            ></IonInput>
          </IonItem>

          <IonItemDivider>
            No lo encuentras?
            <IonButton>Añadelo</IonButton>
          </IonItemDivider>

          <IonItem>
            <IonInput
              placeholder="Zona de encuentro"
              // onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              type="date"
              placeholder="Enter Input"
            ></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CreateMatches;
