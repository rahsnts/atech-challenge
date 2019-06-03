import React from 'react';

import ArchiveIcon from "@material-ui/icons/ArchiveOutlined";
import { Typography } from '@material-ui/core';

class EmptyState extends React.Component {

    render() {
        return (
            <aside className="empty">
                <ArchiveIcon />
                <Typography>There are no items to display</Typography>
            </aside>
        );
    }
}

export default EmptyState;