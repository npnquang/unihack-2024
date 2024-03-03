import { PropTypes } from 'prop-types'

export function Square({ value, onSquareClick }) {
  return (
    <button className="square w-20 h-20 mt-0 mb-0 pt-0 pb-0 bg-gray-500 text-white border-solid border-black border-2" onClick={onSquareClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func.isRequired,
}