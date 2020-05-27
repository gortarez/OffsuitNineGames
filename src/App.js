import React, { Component } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { TableList } from "./compnents/TableList";

import awsconfig from './aws-exports';
import 'semantic-ui-css/semantic.min.css';

// Amplify init
Amplify.configure(awsconfig);


class App extends Component {
    render() {
        return (
            <TableList />
    );
    }
}

const AppWithAuth = withAuthenticator(App, true);

export default () => (
    <AppWithAuth />
);