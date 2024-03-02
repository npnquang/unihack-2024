import PropTypes from "prop-types"

export default function Snake(props) { 
    return ( 
        <div> 
            {props.snakeDots.map((dot, i) => { 
                const style = { 
                    left: `${dot[0]}%`, 
                    top: `${dot[1]}%`, 
                }; 
                return <div className="snake" key={i} style={style} />; 
            })} 
        </div> 
    ); 
}

Snake.propTypes = {
  props: PropTypes.array
}