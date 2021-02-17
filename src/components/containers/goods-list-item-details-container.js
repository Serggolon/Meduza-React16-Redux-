import React, {Component} from 'react';
import {connect} from 'react-redux';
import withGoodsStoreService from '../hoc';
import {compose} from '../../utils';
import {fetchPhotos, fetchGoods, goodPhotoSelectedId} from "../../actions";

import GoodsListItemDetails from '../goods-list-item-details';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class GoodsListItemDetailsContainer extends Component {

    componentDidMount() {
        if (this.props.goods.length === 0) {
            this.props.fetchGoods();
        }
        this.props.fetchPhotos();
    };

    render() {
        const {goods, goodId, categories, currencies, photos, goodsLoading, photosLoading, goodsError, photosError, photoId, onPhotoSelected} = this.props;
        const good = goods.find((item) => item._id === goodId);

        if (goodsLoading || photosLoading) {
            return <Spinner/>;
        }
        if (goodsError || photosError) {
            return <ErrorIndicator/>
        }

        if (good) {
            const {label: category}=categories.find((item) => item.id === good.categories);
            return (
                <GoodsListItemDetails good={good}
                                      category={category}
                                      currencies={currencies}
                                      photos={photos}
                                      photoId={photoId}
                                      onPhotoSelected={onPhotoSelected}/>
            );
        }

        return (
            <div> Элемент не выбран </div>
        );

    };
}

const mapStateToProps = ({
                             goodsList: {goods, goodsLoading, goodsError},
                             photosList: {photos, photosLoading, photosError},
                             settingsList: {settings: {categories, currencies}},
                             siteNavigationList: {photoId}
                         }) => {

    return {
        goods,
        goodsLoading,
        goodsError,
        photos,
        photosLoading,
        photosError,
        categories,
        currencies,
        photoId,
    };
};

const mapDispatchToProps = (dispatch, {goodsStoreService, goodId}) => {
    const queryId = `_id=${goodId}`;
    return {
        fetchGoods: fetchGoods(goodsStoreService, dispatch, queryId),
        fetchPhotos: fetchPhotos(goodsStoreService, dispatch, goodId),
        onPhotoSelected: (photoId) => dispatch(goodPhotoSelectedId(photoId))
    };
};

export default compose(
    withGoodsStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GoodsListItemDetailsContainer);