import "./styles.scss";

const ButtonUI = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className="button-ui">
      {children}
    </button>
  );
};

export default ButtonUI;
