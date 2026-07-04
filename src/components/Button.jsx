function Button({ text }) {
  return (
    <button
      className="
        bg-blue-500
        hover:bg-blue-600
        hover:scale-105
        transition
        duration-300
        px-7
        py-3
        rounded-xl
        shadow-lg
        font-semibold
      "
    >
      {text}
    </button>
  );
}

export default Button;