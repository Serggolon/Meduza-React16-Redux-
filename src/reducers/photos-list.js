const updatePhotosList = (state, action) => {

    if (state === undefined) {
        return {
            photos: [],
            photosLoading: true,
            photosError: null,
        }
    }

    switch (action.type) {
        case 'FETCH_PHOTOS_SUCCESS':
            return {
                photos: action.payload,
                photosLoading: false,
                photosError: null
            };

        case 'FETCH_PHOTOS_REQUEST':
            return {
                photos: [],
                photosLoading: true,
                photosError: null
            };

        case 'FETCH_PHOTOS_FAILURE':
            return {
                photos: [],
                photosLoading: false,
                photosError: action.payload
            };
        default:
            return state.photosList;
    }
};

export default updatePhotosList;