import React from 'react';
import ImageShow from './ImageShow';

export default function ImageList({ listOfImages }) {
  return (
    <div className="imagelist">
      {listOfImages.map((item) => {
        return <ImageShow key={item.id} data={item}></ImageShow>;
      })}
    </div>
  );
}
