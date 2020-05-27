/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGameTable = /* GraphQL */ `
  mutation CreateGameTable(
    $input: CreateGameTableInput!
    $condition: ModelGameTableConditionInput
  ) {
    createGameTable(input: $input, condition: $condition) {
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
export const updateGameTable = /* GraphQL */ `
  mutation UpdateGameTable(
    $input: UpdateGameTableInput!
    $condition: ModelGameTableConditionInput
  ) {
    updateGameTable(input: $input, condition: $condition) {
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
export const deleteGameTable = /* GraphQL */ `
  mutation DeleteGameTable(
    $input: DeleteGameTableInput!
    $condition: ModelGameTableConditionInput
  ) {
    deleteGameTable(input: $input, condition: $condition) {
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
export const createGameTablePlayers = /* GraphQL */ `
  mutation CreateGameTablePlayers(
    $input: CreateGameTablePlayersInput!
    $condition: ModelGameTablePlayersConditionInput
  ) {
    createGameTablePlayers(input: $input, condition: $condition) {
      id
      gameTable {
        id
        limit
        handsCount
        gamesCount
        createdAt
        updatedAt
      }
      player {
        id
        nickName
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateGameTablePlayers = /* GraphQL */ `
  mutation UpdateGameTablePlayers(
    $input: UpdateGameTablePlayersInput!
    $condition: ModelGameTablePlayersConditionInput
  ) {
    updateGameTablePlayers(input: $input, condition: $condition) {
      id
      gameTable {
        id
        limit
        handsCount
        gamesCount
        createdAt
        updatedAt
      }
      player {
        id
        nickName
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteGameTablePlayers = /* GraphQL */ `
  mutation DeleteGameTablePlayers(
    $input: DeleteGameTablePlayersInput!
    $condition: ModelGameTablePlayersConditionInput
  ) {
    deleteGameTablePlayers(input: $input, condition: $condition) {
      id
      gameTable {
        id
        limit
        handsCount
        gamesCount
        createdAt
        updatedAt
      }
      player {
        id
        nickName
        createdAt
        updatedAt
      }
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
