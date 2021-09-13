const Button = ({ unit, handleClick }) => {
  console.log("Button - Render");
  return <button onClick={() => handleClick(unit)}>{unit}</button>;
};

export default Button;
