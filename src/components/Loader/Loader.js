import { Oval } from 'react-loader-spinner';
import React from 'react';


//const loaderRoot = document.querySelector('#loader-root');

function Loader() {
  return (  
      <Oval
        ariaLabel="loading-indicator"
        strokeWidth={5}
        color="red"
        secondaryColor="yellow"
        height={400}
        width={400}
      />  
  );
}

export default Loader;
