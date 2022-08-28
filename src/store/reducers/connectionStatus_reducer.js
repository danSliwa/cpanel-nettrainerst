const ConnectionStatusOptions = require('../ConnectionStatusOptions');

const INITIAL_STATE = {
    connectionStatus: ConnectionStatusOptions.OFFLINE
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_CONNECTION_STATUS': {
            return { connectionStatus: action.payload}
        }
        case 'SET_CONNECTION_STATUS': {
            var arrayToCheck = Object.keys(ConnectionStatusOptions).map(function(key) {
                return ConnectionStatusOptions[key];
            });
            const foundOption = arrayToCheck.includes(action.payload.connectionStatus);
            if (foundOption) {
                console.log(`New connection status: ${action.payload.connectionStatus}`);
                return action.payload;
            } else {
                throw new Error(`Cannot find action type with ${action.payload.connectionStatus}`);
            }

        }
        default: {
            return state;
        }
    }
}