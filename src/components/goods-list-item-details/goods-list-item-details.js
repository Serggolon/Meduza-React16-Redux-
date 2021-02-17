import React from 'react';
import {textFieldRender} from '../../utils';
import {
    StyledGoodDetails,
    StyledGoodPhotos,
    StyledGoodPhoto,
    StyledGoodMinPhotos,
    StyledGoodMinPhoto,
    StyledGoodDescribes,
    StyledHeaderTwo
} from '../styled-elems';

const GoodsListItemDetails = ({good, category, currencies, photos, photoId, onPhotoSelected}) => {
    const {_id, name, price: {value, wholesale, quantity}, properties, description} = good;
    const {label: currencyLabel} = currencies.find((item) => item.value === "1");
    const mainPicture = photos.find((item) => item._id === photoId || photoId === 0);

    const propertiesRender = (props) => {
        return props.map((item) => {
            return textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'white',  item.value, item.label);
        })
    };

    const renderMinPhoto = (id, photo) => {
        let highlighted = false;
        if (mainPicture._id === id) highlighted = true;
        return <StyledGoodMinPhoto key={id} src={photo} onClick={() => onPhotoSelected(id)} highlighted={highlighted}/>;
    };

    function calcColumnsNumber(arrLength) {
        const number = Math.trunc(arrLength / 4) + (arrLength % 4 !== 0 ? 1 : 0);
        return number;
    }

    const renderPhotos = () => {

        if (photos.length !== 0) {
            return <StyledGoodPhotos>
                <StyledGoodPhoto key={`${mainPicture._id}12345`} src={mainPicture.photo}/>
                <StyledGoodMinPhotos columnsNumber={calcColumnsNumber(photos.length)}>
                    {
                        photos.map((item) => {
                            return renderMinPhoto(item._id, item.photo);
                        })
                    }
                </StyledGoodMinPhotos>
            </StyledGoodPhotos>
        }

        return (null);
    };

    return (
        <StyledGoodDetails>
                <StyledHeaderTwo>{name} - {category}</StyledHeaderTwo>

                {renderPhotos()}

                <StyledGoodDescribes>
                    {textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'white',  name, "Название товара")}
                    {textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'white', category, "Категория товара")}
                    {textFieldRender('font-style', 'font-style', 'font-weight', 'font-weight', 'white', _id, 'Код товара')}
                    {propertiesRender(properties)}
                    {<br/>}
                    {textFieldRender('font-style', 'italic', 'font-weight', 'bold', 'gold', `${value} ${currencyLabel}`, 'Цена')}
                    {textFieldRender('font-style', 'italic', 'font-weight', 'bold', 'red', `${wholesale} ${currencyLabel}`, `Цена(от ${quantity}шт.)`)}
                    {<br/>}
                    {textFieldRender('font-style', 'italic', 'font-weight', 'font-weight', 'white', `${description}`, 'Описание')}
                </StyledGoodDescribes>

                <StyledHeaderTwo>{name} - {category}</StyledHeaderTwo>

            </StyledGoodDetails>
    );
};

export default GoodsListItemDetails;