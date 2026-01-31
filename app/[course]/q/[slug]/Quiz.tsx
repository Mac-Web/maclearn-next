"use client";

import type { QuizType } from "@/types/Quiz";
import { useState } from "react";
import Hero from "@/components/layout/Hero";
import Link from "next/link";

const buttonStyles =
  "bg-blue-500! dark:bg-blue-600! hover:bg-blue-600! dark:hover:bg-blue-700! text-black dark:text-white text-lg py-2 px-7 rounded cursor-pointer";

type QuizProps = {
  quiz: QuizType;
  course: string;
  prevSlug: string;
  nextSlug: string;
};

function Quiz({ quiz, course, prevSlug, nextSlug }: QuizProps) {
  const [started, setStarted] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [failed, setFailed] = useState<boolean>(true);

  function handleFinishQuiz() {
    setEnded(true);
    const quizScore = selectedOptions.reduce((acc, option, i) => {
      return acc + (quiz.questions[i].correct === option ? 1 : 0);
    }, 0);
    setScore(quizScore);
    if (quizScore === quiz.questions.length) {
      setFailed(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center">
      {!started && (
        <>
          <Hero title={quiz.name + " Quiz"} description={quiz.description} />
          <button className={buttonStyles} onClick={() => setStarted(true)}>
            Start
          </button>
        </>
      )}
      {started && !ended && (
        <div className="py-12 flex flex-col gap-y-7 w-full">
          <h2 className="text-black dark:text-white text-xl font-bold">{quiz.questions[index].question}</h2>
          <div className="flex flex-col gap-y-2.5">
            {quiz.questions[index].options.map((option, i) => (
              <label
                className="bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded text-lg py-4 cursor-pointer flex items-center hover:bg-gray-400 dark:hover:bg-gray-800"
                key={i}
              >
                <input
                  type="radio"
                  className="cursor-pointer w-5 h-5 rounded-full appearance-none m-0 border-2 border-gray-400 mx-5 flex items-center justify-center before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0 before:transition-transform! before:bg-gray-700! dark:before:bg-gray-300! checked:before:scale-100"
                  checked={selectedOptions[index] === i}
                  onChange={() => {
                    const newSelectedOptions = [...selectedOptions];
                    newSelectedOptions[index] = i;
                    setSelectedOptions(newSelectedOptions);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="flex gap-x-4">
            {index !== 0 && (
              <button className={buttonStyles} onClick={() => setIndex(index - 1)}>
                Back
              </button>
            )}
            {index < quiz.questions.length - 1 ? (
              <button className={buttonStyles} onClick={() => setIndex(index + 1)}>
                Next
              </button>
            ) : (
              <button className={buttonStyles} onClick={handleFinishQuiz}>
                Finish
              </button>
            )}
          </div>
        </div>
      )}
      {ended && (
        <div className="flex flex-col items-center gap-y-10 py-10 w-full">
          <div className="text-center text-lg leading-10">
            You {failed ? "failed" : "passed"} the quiz with a score of {score}/{quiz.questions.length} and{" "}
            {Math.round((score / quiz.questions.length) * 1000) / 10}% accuracy.
            <br />
            {failed ? "Go back, review, and try again to improve your score!" : quiz.end}
          </div>
          <Link href={`/${course}/${failed ? prevSlug : nextSlug}`} className={buttonStyles}>
            {failed ? "Review" : "Go"}
          </Link>
          {quiz.questions.map((question, i) => {
            return (
              <div key={i} className="bg-gray-300 dark:bg-gray-800 rounded overflow-hidden p-5 flex flex-col gap-y-5 w-full">
                <h2 className="text-black dark:text-white font-bold text-lg px-5">{question.question}</h2>
                <div className="flex flex-col gap-y-2">
                  {question.options.map((option, j) => {
                    return (
                      <div
                        key={j}
                        className={`${selectedOptions[i] === j && question.correct === j ? "bg-green-300! dark:bg-green-900!" : selectedOptions[i] === j || !selectedOptions[i] ? "bg-red-300! dark:bg-red-900!" : "bg-gray-200! dark:bg-gray-900!"} rounded py-2 px-4`}
                        style={{
                          backgroundColor:
                            question.correct == j && question.correct == selectedOptions[i]
                              ? "var(--green)"
                              : selectedOptions[i] == j
                                ? "var(--red)"
                                : selectedOptions[i]
                                  ? "transparent"
                                  : "var(--red)",
                        }}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Quiz;
