import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Match from "./pages/Match/Match";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Profile/Settings";
import CheckMatches from "./pages/Profile/CheckMatches";
import Instalations from "./pages/Instalations/Instalations";
import CreateMatches from "./pages/Profile/CreateMatch";
import ModifyProfile from "./pages/Profile/ModifyProfile";
import Invitation from "./pages/Profile/Invitations";
import InstalationDetails from "./pages/Instalations/InstalationDetails";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu />

      <IonRouterOutlet id="NFU_Navigation">
        {/* Main Routes */}
        <Route path="/home" component={Home} exact />
        <Route path="/login" component={Login} exact />

        {/* Match Routes */}
        <Route path="/match" component={Match} exact />

        {/* Instalations */}
        <Route path="/instalations" component={Instalations} exact />
        <Route path="/instalation-details" component={InstalationDetails} exact />

        {/* Profile routes */}
        <Route path="/profile" component={Profile} exact />
        <Route path="/create-match" component={CreateMatches} exact />
        <Route path="/check-match" component={CheckMatches} exact />
        <Route path="/invitations" component={Invitation} exact />
        <Route path="/modify-profile" component={ModifyProfile} exact />
        <Route path="/settings" component={Settings} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
