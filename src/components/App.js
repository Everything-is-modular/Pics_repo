import React from 'react';
import SearchBar from './Searchbar2';
import axios from 'axios';
import ImageList from './imageList'

class App extends React.Component{
    state = {images : []};

    onSearchSubmit =  async (term) =>{
       const response =  await axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term},
            headers: {
                Authorization : 
                'Client-ID 2P1ClA2zeYcuZIEazOxYVwSG-CpXuAGbyrIHZQbiAAk'
            }
        });
        this.setState({images : response.data.results});
        console.log(this.state.images);
        
    }

    

   

    render(){
        return (
            <div className='ui container' style = {{marginTop : "10px"}}>
        <SearchBar onSubmit = {this.onSearchSubmit}/>
        <ImageList images = {this.state.images}/>
        </div>
        )
    }
    
}

export default App;