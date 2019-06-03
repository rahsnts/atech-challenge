import React from 'react';

import Typography from '@material-ui/core/Typography';
import StarIcon from "@material-ui/icons/Star";
import ForksIcon from "@material-ui/icons/SwapCalls";

class CardRepositories extends React.Component {
  render() {
    return (
      <div className="asideCard">
        <div className="informations">
          <h3>{this.props.repository.name}</h3>
          <h5>{this.props.repository.language ? this.props.repository.language : "-"}</h5>
          <Typography variant="body2">
            Update on {this.props.repository.description}
          </Typography>
        </div>
        <aside className="actions">
          <div>
            <StarIcon /> 
            <span title="Stars">
              {this.props.repository.stargazers_count}
            </span>
          </div>
          <div>
            <ForksIcon /> 
              <span title="Forks">
                {this.props.repository.forks_count}
              </span>
          </div>
        </aside>
      </div>
    );
  }
}

export default CardRepositories;