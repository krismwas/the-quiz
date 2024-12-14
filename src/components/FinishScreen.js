function FinishScreen({ points, totalPoints }) {
  const percentage = (points / totalPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} ({percentage}
        )%
      </p>
      <p className="highscore">(High Score: X points)</p>
    </>
  );
}

export default FinishScreen;
