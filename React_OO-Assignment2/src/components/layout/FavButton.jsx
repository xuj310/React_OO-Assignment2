import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

export default function FavButton({favAnime}) {

    const [buttonText, setButtonText] = useState("Favorite ⭐");

    useEffect(() => {
        alreadyFav();
    }, []); 

    const handleFavAnime = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [' '];

        const index = favorites.findIndex(item => item.title === favAnime.title);

        if (index !== -1) {
            favorites.splice(index, 1); // Remove the existing item
            setButtonText('Favorite ⭐');
        } else {
            favorites.push(favAnime); // Add the new item
            setButtonText('Already Favorited ✅');
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    const alreadyFav = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [' '];
        const exists = favorites.find(item => item.title === favAnime.title);

        if (exists) {
            setButtonText('Already Favorited ✅');
        }
    }

    return (
        <Button className="headerItem" onClick={handleFavAnime} variant="outline-light">{buttonText}</Button>
    );
  }