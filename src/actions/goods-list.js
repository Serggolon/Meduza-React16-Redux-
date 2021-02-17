const goodsLoaded = (newGoods) => {
    return {
        type: 'FETCH_GOODS_SUCCESS',
        payload: newGoods
    };
};

const goodsRequested = () => {
    return {
        type: 'FETCH_GOODS_REQUEST'
    }
};

const goodsError = (error) => {
    return {
        type: 'FETCH_GOODS_FAILURE',
        payload: error
    };
};

const fetchGoods = (goodsStoreService, dispatch, category) => () => {
    dispatch(goodsRequested());
    switch (category) {

        case `${category}`:
            goodsStoreService.getGoods(`${category}`)
                .then((data) => dispatch(goodsLoaded(data)))
                .catch((err) => dispatch(goodsError(err)));
            break;

        default:
            goodsStoreService.getGoods()
                .then((data) => dispatch(goodsLoaded(data)))
                .catch((err) => dispatch(goodsError(err)));
    }

};

export default fetchGoods;
