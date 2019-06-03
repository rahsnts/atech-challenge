import React from 'react';

import CardRepositories from './CardRepositories';
import SearchIcon from "@material-ui/icons/Search";
import { Input } from '@material-ui/core';
import EmptyState from '../EmptyState';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class Repositories extends React.Component {

    constructor() {
        super();
        this.state = {
            repositories: [],
            userEmail: localStorage.getItem('USER_EMAIL'),
            userName: ''
        };
        this.getDefaultUser();
    }

    getDefaultUser() {
        if (this.state.userEmail) {
            fetch('https://api.github.com/search/users?q=' + this.state.userEmail)
            .then( response => {
                if (!response.ok) {
                    ToastsStore.error(response.statusText);
                }
                return response.json();
            })
            .then(user => {
                this.setState({ userName:  user.items[0].login});
                this.getRepositoriesbyUserName();
            })
            .catch(error => ToastsStore.error(error.statusText));
        }
    }

    getRepositoriesbyUserName() {
        fetch('https://api.github.com/users/' + this.state.userName + '/repos')
            .then( response => {
                if (!response.ok) {
                    ToastsStore.error("Username " + response.statusText) ;
                }
                return response.json();
            })
            .then(repositories => {
                this.setState({ repositories });
            })
            .catch(error => ToastsStore.error(error.statusText));
    }

    setUserName(event) {
        this.setState({ userName: event.target.value});
    }

    render() {
        return (
            <aside>
                <article className="search"> 
                    <SearchIcon 
                        onClick={this.getRepositoriesbyUserName.bind(this)}
                    />
                    <Input
                        placeholder="Insert the username..."
                        value={this.state.userName}
                        onChange={this.setUserName.bind(this)}
                    />
                </article>
                <article className="cards">
                    {
                        this.state.repositories.length > 0 ?
                            this.state.repositories.map(repository => 
                            <CardRepositories 
                                key={repository.id} 
                                repository={repository} 
                            />) :
                            <EmptyState />
                    }             
                    <ToastsContainer 
                        store={ToastsStore}
                        position={ToastsContainerPosition.TOP_RIGHT}
                    />
                </article>
            </aside>
        );
    }
}

export default Repositories;