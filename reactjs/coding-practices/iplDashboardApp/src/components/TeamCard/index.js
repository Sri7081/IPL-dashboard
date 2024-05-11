// Write your code here
import {Link} from 'react-routet-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = props
    const {name, id, teamImageURL} = teamDetails

    return (
      <li className="team-item">
        <Link to={`/team-matches/${id}`} className="link">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
