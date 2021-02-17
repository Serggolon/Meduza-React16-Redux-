import React from 'react';
import {GoodsListContainer, CategoryPanelContainer, SearchPanelContainer} from '../containers';
import {withRouter} from 'react-router-dom';
import {ContainerMain, ContainerGoods} from '../styled-elems';

const GoodsPage = ({category, history}) => {

    return (
        <ContainerMain>
            <ContainerGoods>
                <CategoryPanelContainer
                    activeButton={category}
                    onButtonClick={(name) => history.push(`/goods/${name}`)}/>

                <SearchPanelContainer category={category}/>

                <GoodsListContainer
                    category={category}
                    onGoodClick={(goodId) => history.push(`/good-details/${goodId}`)}/>
            </ContainerGoods>
        </ContainerMain>
    );

};

export default withRouter(GoodsPage);