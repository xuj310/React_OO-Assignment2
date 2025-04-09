import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/* 
   Functionality for favoriting items
   favAnime - The favorited anime that has been selected
*/

export default function FavButton({favAnime}) {

    const [buttonText, setButtonText] = useState("Favorite ⭐");
    const navigate = useNavigate();
  
    useEffect(() => {
        alreadyFav();
    }, []); 

    // Logic for adding or removing favorite
    const HandleFavAnime = () => {
        // Get favorites from the localStorage
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        // Check if the anime title is already favorited
        const index = favorites.findIndex(item => item.title === favAnime.title);
        if (index !== -1) {
            favorites.splice(index, 1); // Remove the existing item
            navigate('/Favorites');
        } else {
            favorites.push(favAnime); // Add the new item
            setButtonText('Unfavorite ❎');
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        
    }

    /*  Check if the current item has already been favorited or not. We do this to figure out what to display for the favorites button */
    const alreadyFav = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [' '];
        const exists = favorites.find(item => item.title === favAnime.title);
        if (exists) {
            setButtonText('Unfavorite ❎');
        }
    }

    return (
        <Button className="headerItem"  onClick={HandleFavAnime} variant="outline-light">{buttonText}</Button>
    );
  }