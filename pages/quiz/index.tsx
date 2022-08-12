import Button from "@components/Button";
import FullScreenWrapper from "@components/FullScreenWrapper";
import Sums from "@components/Sums";
import TimesTable from "@components/TimesTable";
import { useGetSumsQuery } from "queries/sums";
import { useState } from "react";

const Quiz = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [gameState, setGameState] = useState<"setup" | "play">("setup");

  const { data } = useGetSumsQuery(
    selectedNumbers,
    gameState === "play" && selectedNumbers.length > 0
  );

  const onNumberClickHandler = (number: number) => {
    const foundNumber = selectedNumbers.findIndex((x) => x === number);
    if (foundNumber !== -1) {
      setSelectedNumbers(selectedNumbers.filter((x) => x !== foundNumber));
    } else {
      setSelectedNumbers([...(selectedNumbers ?? []), number]);
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
          disabled={!selectedNumbers || selectedNumbers.length === 0}
          onClick={() => {
            setGameState("play");
          }}
        >
          Let's go
        </Button>
      </FullScreenWrapper>
    );
  }

  return (
    <FullScreenWrapper>
      {data ? (
        <Sums
          sums={data}
          numbers={selectedNumbers}
          onClear={() => {
            setSelectedNumbers([]);
            setGameState("setup");
          }}
        />
      ) : (
        <>Loading</>
      )}
    </FullScreenWrapper>
  );
};

export default Quiz;
