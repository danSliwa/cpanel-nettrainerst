const ModuleOptions = require('../ModuleOptions');

const INITIAL_STATE = {
    modulePicked: 'none'
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'GET_MODULE_PICKED': {
            return { modulePicked: action.payload }
        }
        case 'SET_MODULE_PICKED': {      
            var arrayToCheck = Object.keys(ModuleOptions).map(function(key) {
                return ModuleOptions[key];
            });
            const foundOption = arrayToCheck.includes(action.payload.modulePicked);
            if (foundOption) {
                console.log(`New module picked ${action.payload.modulePicked}`);
                if (action.payload.modulePicked === 'none') {
                    console.log(`Resetting the device...`);
                }
                return action.payload;
            } else {
                throw new Error(`Cannot find action type with ${action.payload.modulePicked}`);
            }

        }
        default: {
            return state;
        }
    }
}