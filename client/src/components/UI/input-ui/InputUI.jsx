import "./styles.scss";

const InputUI = (props) => {
  const { type, placeholder, label, onChange, value } = props;
  return (
    <div className="input-ui">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputUI;
