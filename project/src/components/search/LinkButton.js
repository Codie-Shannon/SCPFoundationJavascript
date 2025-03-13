// Import React Hooks
import { Link } from 'react-router-dom';

// Functions
function LinkButton({id, item, setLinkState, boundary = "SCP-006", boundaryValue = "/", value = "Read More..."})
{
    return (
        // Set LinkState to Elements id on Link Click
        <Link to={item === boundary ? boundaryValue : "/" + item} onClick={() => setLinkState(id)}>
            <li className="srcitem-btn">{value}</li>
        </Link>
    );
}

// Export Link Button
export default LinkButton;