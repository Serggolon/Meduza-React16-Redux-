const photosLoaded = (newPhotos) => {
    return {
        type: 'FETCH_PHOTOS_SUCCESS',
        payload: newPhotos
    };
};

const photosRequested = () => {
    return {
        type: 'FETCH_PHOTOS_REQUEST'
    }
};

const photosError = (error) => {
    return {
        type: 'FETCH_PHOTOS_FAILURE',
        payload: error
    };
};

const fetchPhotos = (goodsStoreService, dispatch, photoIds) => () => {

    dispatch(photosRequested());

            goodsStoreService.getPhotos(photoIds)
                .then((data) => dispatch(photosLoaded(data)))
                .catch((err) => dispatch(photosError(err)));

};

export default fetchPhotos;
