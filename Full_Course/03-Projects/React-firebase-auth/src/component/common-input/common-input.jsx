function CommonInput({ type, placeholder, name, value, onChange, className,autoComplete }) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || "Enter Something here"}
      value={value}
      onChange={onChange}
      name={name}
      className={
        className || "w-full block px-5 py-2 mt-2 text-black border rounded-lg"
      }
      autoComplete={autoComplete || "off"}
    ></input>
  );
}
export default CommonInput;
