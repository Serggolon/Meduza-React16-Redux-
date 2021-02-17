const presentationsLoaded = (newPresentations) => {
    return {
        type: 'FETCH_PRESENTATIONS_SUCCESS',
        payload: newPresentations
    };
};

const presentationsRequested = () => {
    return {
        type: 'FETCH_PRESENTATIONS_REQUEST'
    }
};

const presentationsError = (error) => {
    return {
        type: 'FETCH_PRESENTATIONS_FAILURE',
        payload: error
    };
};

const fetchPresentations = (goodsStoreService, dispatch) => () => {

    dispatch(presentationsRequested());

    goodsStoreService.getPresentations()
                .then((data) => dispatch(presentationsLoaded(data)))
                .catch((err) => dispatch(presentationsError(err)));
};

export default fetchPresentations;
