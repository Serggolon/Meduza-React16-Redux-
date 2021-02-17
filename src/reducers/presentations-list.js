const updatePresentationsList = (state, action) => {

    if (state === undefined) {
        return {
            presentations: [],
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_PRESENTATIONS_SUCCESS':
            return {
                presentations: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_PRESENTATIONS_REQUEST':
            return {
                presentations: state.presentationsList.presentations,
                loading: true,
                error: null
            };

        case 'FETCH_PRESENTATIONS_FAILURE':
            return {
                presentations: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.presentationsList;
    }
};

export default updatePresentationsList;