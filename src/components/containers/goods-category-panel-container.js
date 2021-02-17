import React from 'react';
import {connect} from "react-redux";
import CategoryPanel from "../goods-category-panel";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const CategoryPanelContainer = ({categories, activeButton, onButtonClick, loading, error}) => {

    const categoriesNumber = categories ? categories.length : null;

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorIndicator/>
    }

    return <CategoryPanel
        categories={categories}
        activeButton={activeButton}
        onButtonClick={onButtonClick}
        categoriesNumber={categoriesNumber}/>;
};

const mapStateToProps = ({settingsList: {settings: {categories}, loading, error}}) => {
    return {
        categories,
        loading,
        error
    };
};

export default connect(mapStateToProps)(CategoryPanelContainer);