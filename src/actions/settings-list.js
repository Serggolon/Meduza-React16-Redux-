const settingsLoaded = (settings) => {
    return {
        type: 'FETCH_SETTINGS_SUCCESS',
        payload: settings
    };
};

const settingsRequested = () => {
    return {
        type: 'FETCH_SETTINGS_REQUEST',
    };
};

const settingsError = (error) => {
    return {
        type: 'FETCH_SETTINGS_FAILURE',
        payload: error
    };
};

const fetchSettings = (goodsStoreService, dispatch) => () => {

    dispatch(settingsRequested());

    goodsStoreService.getSettings()
        .then((data) => dispatch(settingsLoaded(data)))
        .catch((err) => dispatch(settingsError(err)));
};

export default fetchSettings;
