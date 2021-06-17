import React from 'react';

class SearchBar2 extends React.Component {
    state = {term : ''};

    onFormSubmit = (event) =>{
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
        <div className='ui segment'>  
            <form className = 'ui form' onSubmit={this.onFormSubmit}> 
                <div className = 'field'>
                    <label>Image Search</label>
                    <input 
                    type='text'
                    value = {this.state.term} 
                    onChange={(e) => {this.setState({term : e.target.value})}}
                    />
                </div>
            </form>
        </div>
        );
        }
}


export default SearchBar2; 


// The error occurs within the code because when the JSX input element invokes
// the call back function, the function exists as its own separate entity, 
//unconnected to the component. As a result, it does not have access to 'this', 
//so when it's called within the call back function, it returns as undefined.

// To resolve the issue, one must bind the function to the component so 
// that it gains access to 'this', which is done through either direct 
// binding within the constructor, using an arrow function for the call back 
// function within the component or the JSX element attribute
