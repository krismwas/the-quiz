function Progress({ index, numOfQuestions, points, totalPoints }) {
  return (
    <header className="progress">
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
