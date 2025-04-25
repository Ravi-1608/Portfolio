import Home from './Home/Home';
import './NavigationList.css'

function NavigationList() {
    return (
        <div>
           

            <ul className="navbar">
                <Home/>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Experiance</a>
                </li>
                <li>
                    <a href="#">Education</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>


    );

}

export default NavigationList;