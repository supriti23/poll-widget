const Questions = ({question}) => {
  const styles = {
    color: "blue",
    font: "Lucida Sans",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "x-large",
    margin: "1%"
  };

  return (
      <label style={styles}>{question}</label>
  );
};
export default Questions;