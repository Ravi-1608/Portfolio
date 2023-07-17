import './Heading.css'
import Name from './Name/Name.js';
import Social from './SocialIcon/Social.js'
import NavigationList from './NavigationList/NavigationList.js';

function Heading (){
    return(
        <div className="Headings">
            <NavigationList/>
            <Name/>
            <Social/>
           
        </div>
    )
}

export default Heading;