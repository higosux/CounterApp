import React,{useState} from 'react';
import PropTypes from 'prop-types';
// rafcp Funcitonal Component con el nombre del js.

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value); // retorna un arreglo de 2 valores 


    //handleAdd

    const handleAdd = () => {
        // setCounter( counter+1 );
        setCounter((c) => c + 1);
    }
    const handleReset = () => setCounter(value);

    const handleSubtracts = () => setCounter(counter - 1);


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={handleAdd}> + 1 </button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleSubtracts}> - 1 </button>
        </>
    );
    
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
