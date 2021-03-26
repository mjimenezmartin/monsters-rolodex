import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  #search = (event) => this.setState({search: event.target.value});

  constructor() {
    super();

    this.state = {
      monsters: [],
      search: '',
    }
  }

  async componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({monsters: users}))
  }

  render() {
    const {search, monsters} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(search.toLowerCase()));

      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="Search Monsters" handleChange={this.#search}/>

          <CardList monsters={filteredMonsters}/>
        </div>
      );
  }
}

export default App;