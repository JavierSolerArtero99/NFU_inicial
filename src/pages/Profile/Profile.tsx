import React from "react";
import {
  IonButtons,
  IonContent,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  chatbox,
  basketball,
  settings,
  addCircle,
  person,
} from "ionicons/icons";
import MenuCard from "./ProfileComponents/MenuCard";
import "./Profile.css";

const Profile: React.FC = () => (
  <IonPage>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonTitle>Profile</IonTitle>
    </IonToolbar>
    <IonContent>
      <div
        style={{
          backgroundImage:
            "url(https://lrabm.files.wordpress.com/2020/06/sports-image-low-res.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          height: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url(https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "100px",
            height: "9rem",
            width: "9rem",
          }}
        ></div>
        <p style={{margin: "0px", color: "#fff", fontWeight: "bold", fontSize:"1.5rem"}}>A</p>
      </div>

      <div className="Cards">
        <MenuCard icon={addCircle} name={"Partida"} />
        <MenuCard icon={chatbox} name={"Invitaciones"} />
        <MenuCard icon={basketball} name={"Partidas"} />
        <MenuCard icon={person} name={"Perfil"} />
        <MenuCard icon={settings} name={"Settings"} />
      </div>
    </IonContent>
  </IonPage>
);

export default Profile;
