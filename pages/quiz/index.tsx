import TimesTable from "@components/TimesTable";
import { Map } from "immutable";
import { useState } from "react";

const timesTables = Map({ 1: false });

const Quiz = () => {
  const [selectedNumbers, setSelectedNumbers] = useState(
    Map<boolean>({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
    })
  );

  const onNumberClickHandler = (number: number) => {
    const key = number.toString();
    if (selectedNumbers.get(key)) {
      setSelectedNumbers(selectedNumbers.set(key, false));
    } else {
      setSelectedNumbers(selectedNumbers.set(key, true));
    }
  };
  return (
    <div className="bg-purple-200 h-screen flex flex-col items-center justify-center">
      <div className="mb-2 font-extrabold text-xl text-purple-500">
        Choose your timestables
      </div>
      <div className="grid grid-cols-4 gap-4">
        <TimesTable
          number={1}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("1")}
        />
        <TimesTable
          number={2}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("2")}
        />
        <TimesTable
          number={3}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("3")}
        />
        <TimesTable
          number={4}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("4")}
        />
        <TimesTable
          number={5}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("5")}
        />
        <TimesTable
          number={6}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("6")}
        />
        <TimesTable
          number={7}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("7")}
        />
        <TimesTable
          number={8}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("8")}
        />
        <TimesTable
          number={9}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("9")}
        />
        <TimesTable
          number={10}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("10")}
        />
        <TimesTable
          number={11}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("11")}
        />
        <TimesTable
          number={12}
          onClick={onNumberClickHandler}
          selected={!!selectedNumbers.get("12")}
        />
      </div>
    </div>
  );
};

export default Quiz;
