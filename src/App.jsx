import React from "react";

import { CardList } from "./component/card-list/CardList";
import { SearchBox } from "./component/search-box/Search-box";

import "./App.css";

class App extends React.Component {
    state = {
        monsters: [],
        searchfield: ""
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchfield } = this.state;
        const filterMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchfield.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Search the monster"
                    handleChange={e =>
                        this.setState({ searchfield: e.target.value })
                    }
                />
                <CardList monsters={filterMonster} />
            </div>
        );
    }
}

export default App;
