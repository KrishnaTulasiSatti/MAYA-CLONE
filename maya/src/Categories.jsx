import './Categories.css'
import { FaLaptopCode } from "react-icons/fa";


const Categories = () => {
    return (
        <>
            <div className="main-div">
                <div className="heading">
                   <h1>Top Categories</h1>
                </div>

            <div className="categories">
                <div className="div1" >
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Technology Training</h5></div>
                </div>
                <div className="div1" style={{backgroundColor:'#EE4A6212'}}>
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Coding</h5></div>
                </div>
                <div className="div1">
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Apt Logic</h5></div>
                </div>

                <div className="div1" style={{backgroundColor:'#EE4A6212'}}>
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Communication</h5></div>
                </div>
                <div className="div1">
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Profile Building</h5></div>
                </div>
                <div className="div1" style={{backgroundColor:'#EE4A6212'}}>
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Placements</h5></div>
                </div>

                <div className="div1">
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Certifications</h5></div>
                </div>
                <div className="div1" style={{backgroundColor:'#EE4A6212'}}>
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Internships</h5></div>
                </div>
                <div className="div1">
                    <div className="icon-div"><FaLaptopCode className='icon'></FaLaptopCode></div>
                    <div className="category"><h5>Project Space</h5></div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Categories