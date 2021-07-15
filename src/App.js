import './App.css';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleSearchChange = (e) => {
    console.log(this);
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } =  this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox placeholder="Search" handleChange={this.handleSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

}

export default App;
