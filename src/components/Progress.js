function Progress({ index, numOfQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer)} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        Question <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
