import './SocialMedia.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <>
            <div className="socialmedia-div">
                <h3>Our Social Media</h3>
                 <div className="icons">
                    <FaLinkedinIn className='linkedin'></FaLinkedinIn>
                    <FaYoutube className='youtube'></FaYoutube>
                    <FaFacebookF className='facebook'></FaFacebookF>
                     <FaInstagram className='instagram'></FaInstagram>
                 </div>
            </div>
        </>
    )
}

export default SocialMedia