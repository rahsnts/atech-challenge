import React from 'react';

import Typography from '@material-ui/core/Typography';
import EyeIcon from "@material-ui/icons/RemoveRedEye";
import ForksIcon from "@material-ui/icons/SwapCalls";

class CardStarred extends React.Component {

    render() {
        return (
            <div className="asideCard">
                <div className="informations">
                    <h3>{this.props.star.full_name}</h3>
                    <h5>{this.props.star.language ? this.props.star.language : "-"}</h5>
                    <Typography variant="body2">
                        {this.props.star.description}
                    </Typography>
                </div>
                <aside className="actions">
                    <div>
                        <ForksIcon /> 
                        <span title="Forks">
                            {this.props.star.forks_count}
                        </span>
                    </div>
                    <div>
                        <EyeIcon /> 
                        <span title="Watchers">
                            {this.props.star.watchers}
                        </span>
                    </div>
                </aside>
            </div>
        );
    }
}

export default CardStarred;