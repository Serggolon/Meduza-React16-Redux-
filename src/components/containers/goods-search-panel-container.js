import React from 'react';
import {connect} from "react-redux";
import SearchPanel from "../goods-search-panel";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {categorySearchKeyword} from "../../actions";


const SearchPanelContainer = ({categories, loading, error, category, onSearchChange}) => {

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorIndicator/>
    }

    const {label} = categories.find((item) => item.name === category);

    return <SearchPanel  category={label} onSearchChange={onSearchChange}/>;
};

const mapStateToProps = ({settingsList: {settings: {categories}, loading, error}}) => {
    return {
        categories,
        loading,
        error
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (keyWord) => dispatch(categorySearchKeyword(keyWord)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanelContainer);