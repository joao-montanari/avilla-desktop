import './topbar.sass';
import { FaUser } from 'react-icons/fa';

function Topbar() {
    return(
        <div id='topbar'>
            <div id='topbarGradient' />
            <div id='topbarContent'>
                <h1>BOSCH</h1>
                <FaUser/>
            </div>
        </div>
    )
}

export default Topbar;