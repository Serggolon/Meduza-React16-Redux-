import React from 'react';
import {textFieldRender} from '../../utils';

import {
    StyledGoodDetails,
    StyledGoodPhotos,
    StyledGoodPhoto,
    StyledGoodMinPhotos,
    StyledGoodMinPhoto,
    StyledGoodDescribes
} from '../styled-elems';

const Presentations = ({presentations, activePresentation, onManualPresentationChange}) => {
    console.log(presentations);
    console.log(activePresentation);
    const mainPicture = presentations[activePresentation];
    console.log(mainPicture._id);

    const renderMinPhoto = (id, photo) => {
        let highlighted = false;
        if (mainPicture._id === id) highlighted = true;
        return <StyledGoodMinPhoto key={id} src={photo} onClick={() => onManualPresentationChange(id)} highlighted={highlighted}/>;
    };

    function calcColumnsNumber(arrLength){
        const number = Math.trunc(arrLength/4) + (arrLength%4 !== 0 ? 1 : 0);
        return number;
    }

    return (
        <StyledGoodDetails>

            <StyledGoodPhotos>
                <StyledGoodPhoto key={`${mainPicture._id}12345`} src={mainPicture.photo}/>
                <StyledGoodMinPhotos columnsNumber={calcColumnsNumber(presentations.length)}>
                    {
                        presentations.map((item) => {
                            return (renderMinPhoto(item._id, item.photo));
                        })
                    }
                </StyledGoodMinPhotos>
            </StyledGoodPhotos>

            <StyledGoodDescribes>
                {textFieldRender('italic', 'font-style', 'font-weight', 'bold', 'gold', mainPicture.description)}
            </StyledGoodDescribes>

        </StyledGoodDetails>
    );
};

export default Presentations;