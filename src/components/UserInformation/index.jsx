import React from 'react';

import Menu from "../Menu";

class UserInformation extends React.Component {

    constructor() {
        super();

        this.userName = localStorage.getItem('USER_NAME');
        this.userPhotoURL = localStorage.getItem('USER_PHOTO_URL');
        this.userEmail = localStorage.getItem('USER_EMAIL');
    }

    render() {
        return (
            <section className="content">
                <aside>
                    <img 
                        src={this.userPhotoURL}
                        alt="User" 
                    />
                    <h3>
                        <strong>{this.userName}</strong>
                    </h3>
                    {
                        this.userEmail !== null ?
                        <span>{this.userEmail}</span> :
                        ""
                    }
                </aside>
                <Menu />
            </section>
        );
    }
}

export default UserInformation;