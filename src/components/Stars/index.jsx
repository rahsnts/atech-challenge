import React from 'react';

import CardStarred from './CardStarred';
import SearchIcon from "@material-ui/icons/Search";
import { Input } from '@material-ui/core';
import EmptyState from '../EmptyState';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Repositories extends React.Component {

    constructor() {
        super();
        this.state = { 
            stars: [] ,
            userName: ''
        };
    }

    async getStarsbyUserName() {
        fetch('https://api.github.com/users/' + this.state.userName + '/starred')
            .then( response => {
                if (!response.ok) { 
                    ToastsStore.error("Username " + response.statusText) 
                }
                return response.json()
            })
            .then(stars => {
                this.setState({ stars });
            })
            .catch(error => ToastsStore.error(error.statusText));
    }

    setUserName(event) {
        this.setState({ userName: event.target.value});
    }

    render() {
        return (
            <aside>
                 <section className="search">
                    <SearchIcon 
                        onClick={this.getStarsbyUserName.bind(this)}
                    />
                    <Input
                        placeholder='Insert the username...'
                        value={this.state.userName}
                        onChange={this.setUserName.bind(this)}
                    />
                </section>
                <article className="cards">
                    {
                        this.state.stars.length > 0 ?
                            this.state.stars.map(star => 
                            <CardStarred  
                                key={star.id} 
                                star={star}
                            />) :
                            <EmptyState />
                    }  
                </article>
                <ToastsContainer 
                    store={ToastsStore}
                />
            </aside>
        );
    }
}

export default Repositories;