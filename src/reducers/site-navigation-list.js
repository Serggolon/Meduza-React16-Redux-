const updateSiteNavigationList = (state, action) => {

    if (state === undefined) {
        return {
            keyWord: '',
            photoId: 0,
            activePresentation: -1,
        }
    }


    function currentActivePresetationIndex(index) {

        const lastActivePresentationIndex = state.siteNavigationList.activePresentation;
        const numberOfPresentations = state.presentationsList.presentations.length-1;

        if (numberOfPresentations === -1) return -1;

        if (index !== null) return index;

        if (index === null) {

            if (lastActivePresentationIndex === numberOfPresentations){
                return 0;
            }

            return (lastActivePresentationIndex+1);
        }
    }

    switch (action.type) {
        case 'NEW_KEYWORD_ADDED':
            return {
                keyWord: action.payload,
                photoId: state.siteNavigationList.photoId,
                activePresentation: state.siteNavigationList.activePresentation,
            };

        case 'NEW_PHOTOID_ADDED':
            return {
                keyWord: state.siteNavigationList.keyWord,
                photoId: action.payload,
                activePresentation: state.siteNavigationList.activePresentation,
            };

        case 'NEW_ACTIVEPRESENTATION_ADDED':
            return {
                keyWord: state.siteNavigationList.keyWord,
                photoId: state.siteNavigationList.photoId,
                activePresentation: currentActivePresetationIndex(action.payload),
            };

        default:
            return state.siteNavigationList;
    }
};

export default updateSiteNavigationList;