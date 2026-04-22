import React, { useState } from 'react';
import { ChevronRight, Sparkles, ShoppingCart, Clock } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (nickname: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim()) {
      onStart(nickname.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan to-purple p-4 rounded-full">
              <ShoppingCart className="w-12 h-12 text-cream" />
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent mb-4">
            Grocery Shopper Type Indicator
          </h1>
          <p className="text-xl text-navy/70 max-w-lg mx-auto leading-relaxed">
            Find out what kind of grocery shopper you really are. Nine personalities.
            One hidden type. Seven quick questions.
          </p>
        </div>

        <div className="bg-cream backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8 animate-slide-up border border-navy/10">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-purple">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">7 Questions</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">~2 Minutes</span>
            </div>
            <div className="flex items-center space-x-2 text-navy">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium">9 Types</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-navy mb-2">
                What should we call you?
              </label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-navy/20 bg-cream focus:border-cyan focus:outline-none transition-colors text-lg text-center text-navy placeholder:text-navy/40"
                placeholder="Enter your nickname"
                maxLength={20}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan to-purple text-cream py-4 px-8 rounded-xl font-semibold text-lg hover:from-purple hover:to-navy transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Begin Your Journey</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="text-sm text-navy/60 animate-fade-in-delay">
          <p>Answer 7 playful questions about how you shop. We'll reveal which of 9 grocery shopper personalities you match — and maybe a hidden one. Built on top of the original <a href="https://github.com/Spandan-Bhattarai/Personality-Traits-Tester" className="underline hover:text-purple">Personality Traits Tester by Spandan</a>.</p>
        </div>
      </div>
    </div>
  );
};