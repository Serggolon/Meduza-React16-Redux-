import React, {Component} from 'react';
import {connect} from 'react-redux';
import withGoodsStoreService from '../hoc';
import {fetchGoods} from "../../actions";
import {compose} from '../../utils';

import GoodsList from '../goods-list';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class GoodsListContainer extends Component {

    componentDidMount() {
        this.props.fetchGoods();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.props.fetchGoods();
        }
    }

    render() {
        const {goods, goodsLoading, goodsError, defaultGoodIcon, currencies, keyWord, onGoodClick} = this.props;
        console.log(goods);

        function filteredGoodsRender(arr, searchWord) {
            if(!searchWord) return arr;

            return arr.filter((item) => {
                return item.name.toLowerCase().indexOf(searchWord) > -1 ||
                    item.price.quantity.toString().indexOf(searchWord) > -1 ||
                    item.price.value.toString().indexOf(searchWord) > -1 ||
                    item.price.wholesale.toString().indexOf(searchWord) > -1;
            });
        }

        if (goodsLoading) {
            return <Spinner/>;
        }

        if (goodsError) {
            return <ErrorIndicator/>
        }

        const {label} = currencies.find((item) => item.value === "1");

        return <GoodsList goods={filteredGoodsRender(goods, keyWord)}
                          defaultGoodIcon={defaultGoodIcon}
                          currencyLabel={label}
                          onGoodClick={onGoodClick}/>;
    };
}

const mapStateToProps = ({goodsList: {goods, goodsLoading, goodsError}, settingsList: {settings: {defaultGoodIcon, currencies}}, siteNavigationList: {keyWord}}) => {
    return {goods, goodsLoading, goodsError, defaultGoodIcon, currencies, keyWord};
};

const mapDispatchToProps = (dispatch, {goodsStoreService, category}) => {
    const queryCategory = `categories=${category}`;

    return {fetchGoods: fetchGoods(goodsStoreService, dispatch, queryCategory)};
};

export default compose(
    withGoodsStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GoodsListContainer);