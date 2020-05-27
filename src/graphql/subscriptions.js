/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGameTable = /* GraphQL */ `
  subscription OnCreateGameTable {
    onCreateGameTable {
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
export const onUpdateGameTable = /* GraphQL */ `
  subscription OnUpdateGameTable {
    onUpdateGameTable {
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
export const onDeleteGameTable = /* GraphQL */ `
  subscription OnDeleteGameTable {
    onDeleteGameTable {
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
export const onCreateGameTablePlayers = /* GraphQL */ `
  subscription OnCreateGameTablePlayers {
    onCreateGameTablePlayers {
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
export const onUpdateGameTablePlayers = /* GraphQL */ `
  subscription OnUpdateGameTablePlayers {
    onUpdateGameTablePlayers {
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
export const onDeleteGameTablePlayers = /* GraphQL */ `
  subscription OnDeleteGameTablePlayers {
    onDeleteGameTablePlayers {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
