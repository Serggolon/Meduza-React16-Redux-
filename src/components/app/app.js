import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import withGoodsStoreService from "../hoc";
import {connect} from "react-redux";
import {compose} from "../../utils";
import {fetchSettings} from "../../actions";

import ShopHeader from '../shop-header';
import {
    GoodsPage,
    PresentationsPage,
    ContactsPage,
    GoodDetailsPage,
} from '../pages';
import ShopFooter from '../shop-footer';

import {Main} from '../styled-elems';

class App extends Component {

    componentDidMount() {
        this.props.fetchSettings();
    };

    render() {

        return (
            <Main>
                <ShopHeader/>
                <Switch>
                    <Route
                        path="/"
                        render={() => {
                            return <GoodsPage category={"populyarnye_tovary"}/>
                        }} exact/>

                    <Route
                        path="/goods/:id"
                        render={({match}) => {
                            const {id} = match.params;
                            return <GoodsPage category={id}/>
                        }}/>

                    <Route
                        path="/good-details/:id"
                        render={({match}) => {
                            const {id} = match.params;
                            return <GoodDetailsPage goodId={id}/>
                        }}/>

                    <Route
                        path="/presentations"
                        component={PresentationsPage}
                        exact/>

                    <Route
                        path="/contacts"
                        component={ContactsPage}
                        exact/>


                    <Route render={() => <h2>Page not found</h2>}/>

                </Switch>
                <ShopFooter/>
            </Main>
        );
    }
}

const mapDispatchToProps = (dispatch, {goodsStoreService}) => {
    return {
        fetchSettings: fetchSettings(goodsStoreService, dispatch),
    };
};

export default compose(
    withGoodsStoreService(),
    connect(null, mapDispatchToProps)
)(App);