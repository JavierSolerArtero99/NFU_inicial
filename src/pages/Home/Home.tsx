import React from "react";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonLoading,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import MatchCard from "./MatchCard";

interface IProps {}

interface IState {
  loading?: boolean;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        loading: false,
      });
    }, 1000);
  }

  render() {
    return this.state.loading ? (
      <IonLoading cssClass="my-custom-class" isOpen={true} />
    ) : (
      <IonPage>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>

        <IonContent>
          <IonHeader collapse="condense"></IonHeader>
          <IonSearchbar></IonSearchbar>
          <IonList className="CardsContainer">
            <MatchCard />
          </IonList>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
