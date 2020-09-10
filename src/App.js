import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }

  onSearchChange=(event)=>{
     console.log(event.target.value)
     console.log(event.target)
     const {name,value}=event.target
     this.setState(
       {
          [name]:value
       }
     )
    }



  render() {
    const { monsters, searchField } = this.state
    const filteredMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(monsters)
    console.log(searchField)
    return (
      <div className="App">

        <h1>monster app is running</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonster}/>
      </div>
    )
  }

}



export default App;
