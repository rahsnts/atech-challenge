import React from 'react';

import { Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import LayerIcon from '@material-ui/icons/Layers';
import StarIcon from "@material-ui/icons/Star";

class Menu extends React.Component {
    render() {
        return (
            <aside>
                <MenuList>
                    <MenuItem>
                        <LayerIcon />
                        <Link 
                            variant="inherit" 
                            to="/repositories"
                        >
                            Repositories
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <StarIcon />
                        <Link 
                            to="/stars"
                            variant="inherit"
                        >
                            Stars
                        </Link>
                    </MenuItem>
                </MenuList>
            </aside>
        );
    }
}

export default Menu;