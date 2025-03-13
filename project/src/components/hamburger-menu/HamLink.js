// Import React Hooks
import { Link } from 'react-router-dom';

// Functions
function HamLink({setLinkState, linkState, id, value, boundary = "SCP-006", boundaryValue = "/"})
{
    return (
        /* Set linkState to Elements id on Link Click */
        <Link to={value === boundary ? boundaryValue : "/" + value} onClick={() => setLinkState(id)}>
            <li className={linkState === id ? "link-active" : "link"}>{value}</li>
        </Link>
    );
}

// Export Ham Link
export default HamLink;