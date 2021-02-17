const categorySearchKeyword = (keyword) => {
    return {
        type: 'NEW_KEYWORD_ADDED',
        payload: keyword
    };
};

const goodPhotoSelectedId = (photoId) => {
  return {
      type: 'NEW_PHOTOID_ADDED',
      payload: photoId
  };
};

const setActivePresentation = (activePresentation) => {
    return {
        type: 'NEW_ACTIVEPRESENTATION_ADDED',
        payload: activePresentation
    };
};

export {
    categorySearchKeyword,
    goodPhotoSelectedId,
    setActivePresentation
};
