function ErrorMessage({ message }) {
  return (
    <p style={{ color: "red" }}>
      {message || "An error occurred."}
    </p>
  );
}

export default ErrorMessage;