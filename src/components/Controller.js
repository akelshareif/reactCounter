import React from 'react';

class Controller extends React.Component {

    render(){
        return(
            <div>
                <button onClick={this.props.decrement} className='ui red icon button'>
                    <i className='minus icon' />
                </button>
                <button onClick={this.props.increment} className='ui green icon button'>
                    <i className='plus icon' />
                </button>
            </div>
        );
    }
}

export default Controller;