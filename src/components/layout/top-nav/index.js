import React from 'react';
import {Menu, Button, Image} from 'semantic-ui-react';
import Logo from '../../../logo.png';
import {Auth} from 'aws-amplify';

export const TopNav = () => {

    const signOutHandler =() => {
        Auth.signOut();
    }

    return (
        <Menu secondary style={{borderBottom:'1px solid #CCC'}}>
            <Menu.Menu position='left'>
                <Menu.Item>
                    <Image style={{width:126, height:35}} src={Logo} />
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button basic color='red' onClick={signOutHandler}>Sign Out</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}