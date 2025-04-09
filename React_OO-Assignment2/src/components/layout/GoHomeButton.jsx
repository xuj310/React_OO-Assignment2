import Button from 'react-bootstrap/Button';
import React from 'react';

/* 
   Button for the going home button
   goHome - function for going back to the home page
*/
export default function GoHomeButton({goHome}) {

    return (
        <Button className="headerItem" onClick={goHome} variant="outline-light">Home</Button>
    );
  }