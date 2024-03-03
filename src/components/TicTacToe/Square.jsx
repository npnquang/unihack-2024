import { PropTypes } from 'prop-types'

export function Square({ value, onSquareClick }) {
  return (
    <button className="square bg-gray-500 w-6 h-6 border-solid border-black" onClick={onSquareClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func.isRequired,
}