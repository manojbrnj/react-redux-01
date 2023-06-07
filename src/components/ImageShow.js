import React from 'react';

export default function ImageShow({ data }) {
  return (
    <div className="card">
      <h1></h1>
      <p>{data.description}</p>
      <img src={data.urls.raw} alt="" srcset="" />
    </div>
  );
}
