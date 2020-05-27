import React, { Component } from "react";
import { Connect } from "aws-amplify-react";
import { graphqlOperation }  from "aws-amplify";
import { Icon, Table } from 'semantic-ui-react'
import { listGameTables } from '../../graphql/queries';
import { onUpdateGameTable } from '../../graphql/subscriptions';
import { Card } from '../Card';
import CardBack from '../../assets/images/cards/back.jpg';
import { Table as GameTable } from '../../compnents/Table/index';

export class TableList extends Component {

    tableClicked = (gameTable) =>  {
        return function() {
            console.log(gameTable);
        }
    };

    render() {
        const ListView = ({ gameTables }) => (
            <React.Fragment>
                <Card card={CardBack} />
                <GameTable />
                <Table celled inverted selectable >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell><Icon name={'key'} /> Id</Table.HeaderCell>
                            <Table.HeaderCell><Icon name={'moon'} />Limit</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {gameTables.map(gameTable =>
                            <Table.Row key={gameTable.id}>
                                <Table.Cell  onDoubleClick={this.tableClicked(gameTable)}>{gameTable.id}</Table.Cell>
                                <Table.Cell>{gameTable.limit}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </React.Fragment>
        );
        return (
            <Connect
                query={graphqlOperation(listGameTables)}
                subscription={graphqlOperation(onUpdateGameTable)}
                onSubscriptionMsg={(prevState, { onUpdateGameTable  }) => {
                    console.log("Updated", onUpdateGameTable);
                    //prevState.listGameTables.items.push(onCreateGameTable);
                    return prevState;
                }}
            >
                {({ data: { listGameTables }, loading, errors }) => {
                    if (errors.length) return (<h3>Erro</h3>);
                    if (loading || !listGameTables) return (<h3>Loading...</h3>);
                    return (<ListView gameTables={listGameTables? listGameTables.items : []} /> );
                }}
            </Connect>
        );
    }

}