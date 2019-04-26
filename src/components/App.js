import React from 'react';
import Counter from './Counter';
import '../styles.css';

const App = () => {
    return(
        <div className='ui container'>
            <div className='ui grid'>
                <div className='ui eight wide centered column'>
                    <Counter />
                </div>
            </div>
        </div>
    );
}

export default App;