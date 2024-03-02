import PropTypes from "prop-types"

function Food ({ location}) { 
    const style = { 
        left: `${location[0]}%`, 
        top: `${location[1]}%`,
    }; 
    return <div className="food" style={style} />; 
}
  
export default Food; 

Food.propTypes = {
  location: PropTypes.array.isRequired
}

