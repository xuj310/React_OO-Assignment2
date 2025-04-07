import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

// Functionality for favoriting items

export default function FavButton({favAnime}) {

    const [buttonText, setButtonText] = useState("Favorite ⭐");
  
    useEffect(() => {
        alreadyFav();
    }, []); 

    // Logic for adding or removing favorite
    const handleFavAnime = () => {
        // Get favorites from the localStorage
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [' '];
        // Check if the anime title is already favorited
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

    /*  Check if the current item has already been favorited or not. We do this to figure out what to display for the favorites button */
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