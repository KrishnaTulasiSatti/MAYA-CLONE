import './Navbar.css'

import Logo from "./logo";
import Options from "./Options.jsx";
import Logout from './Logout.jsx';

const Navbar = () => {
    return (
        <>
          <div className='nav'>
            <Logo></Logo>
            <Options></Options>
            <Logout></Logout>
          </div>
        </>
    )
}

export default Navbar