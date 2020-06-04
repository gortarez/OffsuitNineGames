import React from 'react';
import {AppContainer} from "./components/layout/app-container";
import {Amplify} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';
import 'semantic-ui-css/semantic.min.css';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const AppWithAuth = withAuthenticator(App, false);

export default () => (
    <AppWithAuth />
);