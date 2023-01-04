export const ErrorContainer = ({ error }) => {
  return (
    <div className="zoba-error-container">
      {error && <span className={"zoba-error"}>{error}</span>}
    </div>
  );
};
