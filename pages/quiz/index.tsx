import Button from "@components/Button";
import FullScreenWrapper from "@components/FullScreenWrapper";
import Sum from "@components/Sum";
import TimesTable from "@components/TimesTable";
import { List } from "immutable";
import { useGetSumsQuery } from "queries/sums";
import { useState } from "react";

const Quiz = () => {
  const [selectedNumbers, setSelectedNumbers] = useState(List<number>());
  const [gameState, setGameState] = useState<"setup" | "play">("setup");

  const { data } = useGetSumsQuery(selectedNumbers, gameState === "play");

  const onNumberClickHandler = (number: number) => {
    const foundNumber = selectedNumbers.findIndex((x) => x === number);
    if (foundNumber !== -1) {
      setSelectedNumbers(selectedNumbers.remove(foundNumber));
    } else {
      setSelectedNumbers(selectedNumbers.push(number));
    }
  };

  if (gameState === "setup") {
    return (
      <FullScreenWrapper>
        <div className="mb-2 font-extrabold text-xl text-purple-500">
          Choose your timestables
        </div>
        <div className="grid grid-cols-4 gap-4">
          <TimesTable number={1} onClick={onNumberClickHandler} />
          <TimesTable number={2} onClick={onNumberClickHandler} />
          <TimesTable number={3} onClick={onNumberClickHandler} />
          <TimesTable number={4} onClick={onNumberClickHandler} />
          <TimesTable number={5} onClick={onNumberClickHandler} />
          <TimesTable number={6} onClick={onNumberClickHandler} />
          <TimesTable number={7} onClick={onNumberClickHandler} />
          <TimesTable number={8} onClick={onNumberClickHandler} />
          <TimesTable number={9} onClick={onNumberClickHandler} />
          <TimesTable number={10} onClick={onNumberClickHandler} />
          <TimesTable number={11} onClick={onNumberClickHandler} />
          <TimesTable number={12} onClick={onNumberClickHandler} />
        </div>
        <Button
          className="mt-2"
          disabled={selectedNumbers.count() === 0}
          onClick={() => {
            setGameState("play");
          }}
        >
          Begin the quiz
        </Button>
      </FullScreenWrapper>
    );
  }

  return (
    <FullScreenWrapper>
      <div className="grid grid-cols-4 gap-4">
        {data ? data.map((sum) => <Sum x={sum.X} y={sum.Y} />) : <>Loading</>}
      </div>
    </FullScreenWrapper>
  );
};

export default Quiz;
