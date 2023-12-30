import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends React.Component{
   constructor(){
    super();
    console.log('1')
    this.state={
        robots:[],
        searchField:''
    }
}

   componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>this.setState({robots:users}))
    console.log('2')
   }
   handleSearchChange=(event)=>{
    this.setState({searchField:event.target.value});
} 
   render(){
    const {robots,searchField} =this.state;
    console.log("3")
    const filteredRobots= robots.filter(robot=>robot.name.toLowerCase().includes(searchField));
    if(robots.length){
        return <h1>Loading...</h1>
    }
    else{
    return(
        <div className="tc">
        <h1 className="f1 white">RoboFriends</h1>
        <SearchBox onSearchChange={this.handleSearchChange} />
        <Scroll>
        <CardList data={filteredRobots}/>
        </Scroll>
        </div>
    )
    }
    }
}

export default App ;