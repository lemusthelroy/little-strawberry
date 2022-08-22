import { ISumsResponse } from "queries/sums";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { FaRedo, FaPlay } from "react-icons/fa";
import Button from "./Button";
import Sum from "./Sum";
import IncorrectSum from "./IncorrectSum";

const Sums = ({
  sums,
  numbers,
  onClear,
}: {
  sums: ISumsResponse[];
  numbers: number[];
  onClear: VoidFunction;
}) => {
  const formMethods = useForm<{
    [key: string]: string | undefined;
  }>();

  const [score, setScore] = useState<number>();
  const [incorrectAnswers, setIncorrectAnswers] = useState<{
    [key: string]: string | undefined;
  }>({});

  const onSubmit = (data: { [key: string]: string | undefined }) => {
    let correctCount = 0;
    let incorrectAnswersSubmitted: { [key: string]: string | undefined } = {};
    Object.entries(data).forEach(([key, value]) => {
      const x = key.split("-")[0];
      const y = key.split("-")[1];
      const correctAnswer = parseInt(x) * parseInt(y);
      const answeredCorrectly = value && correctAnswer === parseInt(value);

      if (answeredCorrectly) {
        correctCount++;
      } else {
        incorrectAnswersSubmitted[key] = value;
      }
    });
    setIncorrectAnswers(incorrectAnswersSubmitted);
    setScore(correctCount);
  };

  const queryClient = useQueryClient();

  if (score !== undefined) {
    return (
      <div className="text-center">
        <h2 className="text-6xl">
          {score} / {sums.length}
        </h2>
        <p className="mt-2">
          {sums.length / score === 1 ? (
            "Nice work! 🎉"
          ) : (
            <div className="mt-6">
              {Object.entries(incorrectAnswers).map(([key, value]) => {
                console.log({ value });
                const x = key.split("-")[0];
                const y = key.split("-")[1];
                return (
                  <IncorrectSum
                    x={parseInt(x)}
                    y={parseInt(y)}
                    answer={value ? parseInt(value) : undefined}
                  />
                );
              })}
              Almost there...keep trying! 👏
            </div>
          )}
        </p>

        <div className="flex flex-row justify-center">
          <Button
            className="mt-4 mr-1 flex flex-row items-center"
            onClick={() => {
              formMethods.reset();
              setScore(undefined);
              onClear();
            }}
          >
            New quiz <FaPlay className="ml-2" />
          </Button>
          <Button
            className="mt-4 ml-2 mr-1 flex flex-row items-center"
            onClick={() => {
              queryClient.resetQueries(["getSums", numbers.toString()]);
            }}
          >
            Try Again <FaRedo className="ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          {sums.map((sum) => (
            <Sum x={sum.X} y={sum.Y} />
          ))}
        </div>
        <div className="flex flex-row mt-4 justify-center">
          <Button type="submit">Submit Answers</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Sums;
