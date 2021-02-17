const updateSettingsList = (state, action) => {

    if (state === undefined) {
        return {
            settings: {},
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_SETTINGS_SUCCESS':
            return {
                settings: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_SETTINGS_REQUEST':
            return {
                settings: state.settingsList.settings,
                loading: true,
                error: null
            };

        case 'FETCH_SETTINGS_FAILURE':
            return {
                settings: {},
                loading: false,
                error: action.payload
            };
        default:
            return state.settingsList;
    }
};

export default updateSettingsList;