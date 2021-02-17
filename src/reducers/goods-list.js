const updateGoodsList = (state, action) => {

    if (state === undefined) {
        return {
            goods: [],
            goodsLoading: true,
            goodsError: null,
        }
    }

    switch (action.type) {
        case 'FETCH_GOODS_SUCCESS':
            return {
                goods: action.payload,
                goodsLoading: false,
                goodsError: null,
            };

        case 'FETCH_GOODS_REQUEST':
            return {
                goods: state.goodsList.goods,
                goodsLoading: true,
                goodsError: null,
            };

        case 'FETCH_GOODS_FAILURE':
            return {
                goods: [],
                goodsLoading: false,
                goodsError: action.payload,
            };
        default:
            return state.goodsList;
    }
};

export default updateGoodsList;