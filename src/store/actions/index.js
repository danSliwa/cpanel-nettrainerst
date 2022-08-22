export function getModulePicked() {
    return {
        type: 'GET_MODULE_PICKED',
        payload: 'modulePicked'
    }
}

export function setModulePicked(modulePicked='none') {
    return {
        type: 'SET_MODULE_PICKED',
        payload: {modulePicked}
    }
}