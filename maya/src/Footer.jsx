import './Footer.css'

import Logo from "./logo"
import Contact from "./Contact"
import SocialMedia from './SocialMedia'

import Copyright from './Copyright'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='logo-div'><div><Logo></Logo></div></div>
                <Contact></Contact>
                <SocialMedia></SocialMedia>

            </div>

            <Copyright></Copyright>
        </>
    )
}

export default Footer