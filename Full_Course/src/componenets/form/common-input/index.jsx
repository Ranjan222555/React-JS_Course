function CommonInput({ name, id, type, placeholder, onChange, value, label }) {
  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <input
        name={name}
        type={type || "text"}
        id={id}
        placeholder={placeholder || "Enter something"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
