import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { Question, UserResponse } from '../types/personality';
import { ProgressBar } from './ProgressBar';

interface QuestionnaireScreenProps {
  questions: Question[];
  onComplete: (responses: UserResponse[]) => void;
  onRestart: () => void;
  nickname: string;
}

export const QuestionnaireScreen: React.FC<QuestionnaireScreenProps> = ({
  questions,
  onComplete,
  onRestart,
  nickname,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);

  const question = questions[currentQuestion];

  const handleAnswer = (optionId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    const newResponse: UserResponse = { questionId: question.id, optionId };
    const updatedResponses = responses.filter((r) => r.questionId !== question.id);
    updatedResponses.push(newResponse);
    setResponses(updatedResponses);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onComplete(updatedResponses);
      }
    }, 300);
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getCurrentOptionId = () =>
    responses.find((r) => r.questionId === question.id)?.optionId;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-navy mb-2">
            Hey {nickname}.
          </h2>
          <p className="text-navy/70">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <button
            onClick={onRestart}
            className="inline-flex items-center space-x-1 text-sm text-navy/60 hover:text-purple transition-colors mt-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Start Over</span>
          </button>
          <ProgressBar
            current={currentQuestion + 1}
            total={questions.length}
            className="mt-4 max-w-md mx-auto"
          />
        </div>

        <div className="bg-cream backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8 animate-slide-up border border-navy/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-navy mb-4 leading-tight">
              {question.text}
            </h3>
            <p className="text-navy/60">Pick the option that feels most like you.</p>
          </div>

          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = getCurrentOptionId() === option.id;
              return (
                <button
                  key={option.id}
                  onClick={(e) => handleAnswer(option.id, e)}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 transform hover:scale-[1.02] border ${
                    isSelected
                      ? 'bg-navy text-cream border-navy shadow-lg'
                      : 'bg-cream hover:bg-yellow/20 text-navy border-navy/15'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex-1">{option.text}</span>
                    <div
                      className={`w-4 h-4 rounded-full border-2 shrink-0 ${
                        isSelected ? 'bg-cream border-cream' : 'border-navy/30'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentQuestion === 0
                ? 'text-navy/30 cursor-not-allowed'
                : 'text-purple hover:bg-purple/10'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="text-sm text-navy/60">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
          </div>

          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
};
