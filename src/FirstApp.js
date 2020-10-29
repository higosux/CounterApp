//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//IMR para importar rapidamente 
//Functional Components mas estables y mantenibles
const FirstApp = ({ greeting, subtitle  }) => {
    //arreglos los contatena
    //boleanos no imprime 
    //objetos con Json.stingify()02+
    
    // const greeting = 'Hola Gosu';
    // console.log(props);

   

    return (
        //React reconoce que es un Fragment <> </>
        <> 
            <h1> {greeting}</h1>
            {/* <pre> { JSON.stringify(greeting, null ,3) } </pre> */}
            <p>{subtitle}</p>
        </>
    );
 

}

FirstApp.propTypes = {
        greeting: PropTypes.string.isRequired, 
        subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Subtitulo por defecto'
}

export default FirstApp;