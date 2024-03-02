import "./Menu.css"; 
import PropTypes from "prop-types"

export default function Menu({ onRouteChange }) { 
    return ( 
        <div className="wrapper"> 
            <div> 
                <input 
                    onClick={onRouteChange} 
                    className="start"
                    type="button"
                    value="start game"
                /> 
            </div> 
        </div> 
    ); 
}

Menu.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
}