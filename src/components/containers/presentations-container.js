import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import withGoodsStoreService from "../hoc";
import {compose} from "../../utils";

import Presentations from '../presentations';
import {fetchPresentations, setActivePresentation} from "../../actions";

class PresentationsContainer extends Component {

    componentDidMount() {
        this.props.fetchPresentations();

        this.interval = setInterval(() => {
            this.props.setPresentation(null);
        }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onManualPresentationChange(id) {
        let selectedItemIndex;
        this.props.presentations.forEach((item, index) => {
            if (item._id === id) selectedItemIndex = index;
        });
        return this.props.setPresentation(selectedItemIndex);
    }

    render() {
        const {loading, error, presentations, activePresentation} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        if (presentations.length === 0 && activePresentation === -1) {
            return <div> Извините, нет презентаций для отображения!!! </div>;
        }

        if (presentations.length !== 0 && activePresentation === -1) {
            return <div>  Идет подготовка презентаций для отображения!!! </div>;
        }

        if (presentations.length !== 0 && activePresentation !== -1) {
            return <Presentations presentations={presentations}
                                  activePresentation={activePresentation}
                                  onManualPresentationChange={(id) => this.onManualPresentationChange(id)}/>;
        }

        return <ErrorIndicator/>;

    }

}

const mapStateToProps = ({presentationsList: {loading, error, presentations}, siteNavigationList: {activePresentation}}) => {
    return {
        loading: loading,
        error: error,
        presentations: presentations,
        activePresentation: activePresentation,
    };
};

const mapDispatchToProps = (dispatch, {goodsStoreService}) => {
    return {
        fetchPresentations: fetchPresentations(goodsStoreService, dispatch),
        setPresentation: (index) => dispatch(setActivePresentation(index)),
    };
};

export default compose(
    withGoodsStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PresentationsContainer);