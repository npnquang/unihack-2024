import PropTypes from "prop-types"

export default function Snake({ snakeDots }) { 
    return ( 
        <div> 
            {snakeDots.map((dot, i) => { 
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
  snakeDots: PropTypes.array.isRequired,
}