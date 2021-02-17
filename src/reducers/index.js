import updateSettingsList from './settings-list';
import updateGoodsList from './goods-list';
import updatePhotosList from './photos-list';
import updateSiteNavigationList from "./site-navigation-list";
import updatePresentationsList from "./presentations-list";

const reducer = (state, action) => {
    return {
        settingsList: updateSettingsList(state, action),
        goodsList: updateGoodsList(state, action),
        presentationsList: updatePresentationsList(state, action),
        photosList: updatePhotosList(state, action),
        siteNavigationList: updateSiteNavigationList(state, action)
    };
};

export default reducer;