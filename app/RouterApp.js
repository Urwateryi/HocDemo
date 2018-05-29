import React, { PureComponent } from "react";
import {
    Router,
    Scene,
} from 'react-native-router-flux'
import HomePage from "./HomePage";
import PageOne from "./screens/PageOne";
import PageTwo from "./screens/PageTwo";

export default class RouterApp extends PureComponent {
    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene hideNavBar>
                    <Scene key="HomePage" initial component={HomePage}/>
                    <Scene key="PageOne" component={PageOne}/>
                    <Scene key="PageTwo" component={PageTwo}/>
                </Scene>
            </Router>
        );
    }
}

const getSceneStyle = () => ({
    backgroundColor : 'white',
    shadowOpacity : 1,
    shadowRadius : 3,
});
