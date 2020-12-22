import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Login.css";

interface IProps {}

interface IState {
  loading?: boolean;
}

class Login extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div className="container">
            <IonItemDivider></IonItemDivider>
            <IonInput
              className="input"
              type="email"
              disabled={false}
              placeholder="Email"
              onIonChange={(e) => console.log(e)}
            />
            <IonItemDivider></IonItemDivider>

            <IonInput
              className="input"
              type="password"
              disabled={false}
              placeholder="Password"
              onIonChange={(e) => console.log(e)}
            />
            <IonItemDivider></IonItemDivider>
            <IonButton>Login</IonButton>
            <IonButton>Register</IonButton>
            <IonItemDivider></IonItemDivider>
            <IonButton>Google</IonButton>
            <IonButton>Facebook</IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Login;
