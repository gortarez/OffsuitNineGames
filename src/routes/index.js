import React from "react";
import {Lobby} from "../components/page/lobby";
import {Table} from "../components/page/table";

export const Routes = [
    {
        path: '/',
        name: 'Lobby',
        exact: true,
        allowedRoles:['Player'],
        component: (props) => {
                return (
                    <Lobby {...props} />
                )
        }
    },
    {
        path: '/table/:id',
        name: 'Table',
        allowedRoles:['Player'],
        exact: false,
        component: (props) => (
            <Table {...props} />
        ),
    }
];