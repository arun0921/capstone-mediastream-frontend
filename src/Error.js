import React from 'react';
import Media from './media/Media';

const Error = () => {
    // Check if the object with the 'error' property is defined
if ( Media && Media.error) {
    // Access the 'error' property
    console.log(Media.error);
  } else {
    console.log("Object is undefined or 'error' property does not exist.");
  }
  return (
    <div>
      <h1>404 not found</h1>
    </div>
  );
}

export default Error;
