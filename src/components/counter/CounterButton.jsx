import { PropTypes } from "prop-types";

export default function CounterButton({ by, incrementTotal, decrementTotal }) {
  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={() => incrementTotal(by)}>
          +{by}
        </button>
        <button className="counterButton" onClick={() => decrementTotal(by)}>
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};
