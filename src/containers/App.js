import React,{useEffect,useState} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

const App =()=>{
    const [robots,setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const handleSearchChange= (e)=> setSearchField(e.target.value)
    const filteredRobots = robots.filter((robot)=>robot.name.toLowerCase().includes(searchField))
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(users=>{
            setRobots(users)
        })
        .catch(err=>{
            console.log("ERROR GETTING USERS");
            console.log(err)
        })
    },[])
    
    if(!robots.length){
        return <h1>Loading...</h1>
    }
    else{
        return (
            <div className="tc">
            <h1 className="f1 white">RoboFriends</h1>
            <SearchBox onSearchChange={handleSearchChange} />
            <Scroll>
            <ErrorBoundry>
            <CardList data={filteredRobots}/>
            </ErrorBoundry>   
            </Scroll>
            </div>
        )
    }
}

export default App ;