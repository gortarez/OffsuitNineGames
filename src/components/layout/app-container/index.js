import React from "react";
import {TopNav} from "../top-nav";
import {Grid} from "semantic-ui-react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Background from "../../../assets/images/common/bg.png";
import {Routes} from "../../../routes";

export const AppContainer = () => {
    return (
        <Router>
            <Grid divided>
                <Grid.Row style={{paddingBottom:0, boxShadow:"0px 0px 8px 2px #000000"}}>
                    <Grid.Column>
                        <TopNav/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{backgroundImage:`url(${Background})`, backgroundColor:'#3D3A3A', height:"calc(100vh - 58px)"}}>
                    {Routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.component route={route} />}
                        >
                        </Route>
                    ))}
                </Grid.Row>
            </Grid>
        </Router>
     )
}