import React from 'react';
import me from '../img/me.png'
const PhotoCard = () => {
  return (
    <div className='text-center'>
      <div>
        <img src={me} alt='god' className='me-img'></img>
      </div>
    </div>
  );
};


export default PhotoCard;
