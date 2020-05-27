/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGameTable = /* GraphQL */ `
  query GetGameTable($id: ID!) {
    getGameTable(id: $id) {
      id
      game {
        id
        name
        rules
        createdAt
        updatedAt
      }
      limit
      gameTablePlayers {
        nextToken
      }
      handsCount
      gamesCount
      createdAt
      updatedAt
    }
  }
`;
export const listGameTables = /* GraphQL */ `
  query ListGameTables(
    $filter: ModelGameTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        limit
        handsCount
        gamesCount
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      nickName
      playerGameTables {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nickName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      name
      gameTables {
        nextToken
      }
      rules
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        rules
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
