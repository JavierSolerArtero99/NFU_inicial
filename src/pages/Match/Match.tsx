import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Match.css";
import { information, people, map, chatbox } from "ionicons/icons";
import MatchInfo from "./MatchInfo";
import MatchChat from "./MatchChat";
import MatchPlace from "./MatchPlace";
import MatchParticipants from "./MatchParticipants";

interface IProps {}

interface IState {
  toSee?: string;
}

class Match extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      toSee: "INFO",
    };
  }

  componentDidMount() {}

  handleChangeMode(newMode: string): void {
    this.setState({
      ...this.state,
      toSee: newMode,
    });
  }

  getActualModeView(): React.ReactNode {
    switch (this.state.toSee) {
      case "INFO":
        return <MatchInfo />;
      case "PARTICIPANTS":
        return <MatchParticipants />;
      case "PLACE":
        return <MatchPlace />;
      case "CHAT":
        return <MatchChat />;
      default:
        return <MatchInfo />;
    }

    return <p>{this.state.toSee}</p>;
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Match</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div
            style={{
              backgroundImage: "url(http://placekitten.com/g/200/300)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "30%",
              width: "100%",
            }}
          ></div>
          <div style={{ height: "60%" }}>{this.getActualModeView()}</div>
          <div className="buttonsContainer">
            <IonButton
              className="changeButton"
              onClick={() => this.handleChangeMode("INFO")}
            >
              <IonIcon color="medium" slot="start" icon={information} />
            </IonButton>
            <IonButton
              className="changeButton"
              onClick={() => this.handleChangeMode("PARTICIPANTS")}
            >
              <IonIcon color="medium" slot="start" icon={people} />
            </IonButton>
            <IonButton
              className="changeButton"
              onClick={() => this.handleChangeMode("PLACE")}
            >
              <IonIcon color="medium" slot="start" icon={map} />
            </IonButton>
            <IonButton
              className="changeButton"
              onClick={() => this.handleChangeMode("CHAT")}
            >
              <IonIcon color="medium" slot="start" icon={chatbox} />
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Match;
