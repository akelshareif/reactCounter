import React from 'react';
import Controller from './Controller';

class Counter extends React.Component {

    state = {
        count: 0
    }

    onIncrement = () => {
        this.setState({count: this.state.count+1});
    }

    onDecrement = () => {
        this.setState({count: this.state.count-1})
    }

    render(){
        return(
            <div className='center text'>
                {this.state.count}
                <div className='margin'>
                    <Controller increment={this.onIncrement} decrement={this.onDecrement} />
                </div>
            </div>
        );
    }
}

export default Counter;