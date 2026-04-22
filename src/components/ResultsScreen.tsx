import React, { useState } from 'react';
import { Share2, RefreshCw, Twitter, Facebook, Linkedin, Instagram, Sparkles, ExternalLink } from 'lucide-react';
import { PersonalityId, PersonalityResult } from '../types/personality';
import { personalityTypes } from '../data/personalityTypes';
import { characterIllustrations } from '../data/characterIllustrations';

// Theoretical max per personality: the sum of the best-scoring option's weight
// in each question. A real user can never hit all 9 maxes simultaneously —
// these are per-type ceilings used as percentage denominators.
const MAX_SCORES: Record<PersonalityId, number> = {
  ninja: 6.7,
  optimizer: 6.5,
  delegate: 5.7,
  'ethical-curator': 5.5,
  impulse: 5.3,
  stockpiler: 5.2,
  chaos: 4.9,
  'brand-loyalist': 4.6,
  'over-optimistic': 4.6,
};

interface ResultsScreenProps {
  result: PersonalityResult;
  nickname: string;
  onRestart: () => void;
}

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
  </svg>
);

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ result, nickname, onRestart }) => {
  const [showSharing, setShowSharing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const shareText = `I just discovered I'm ${result.type.name}! Find out your grocery shopper type too.`;
  const shareUrl = window.location.href;

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2000);
  };

  const handleShare = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const handleCopyAndOpen = async (siteUrl: string) => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      showToast('Caption copied — paste it in your story');
    } catch {
      showToast('Open the app and paste your result');
    }
    window.open(siteUrl, '_blank');
  };

  const rankedScores = personalityTypes
    .map((type) => ({ type, score: result.scores[type.id] ?? 0 }))
    .sort((a, b) => b.score - a.score);

  const top3 = rankedScores.slice(0, 3);
  const bottom = rankedScores[rankedScores.length - 1];

  const toPercent = (score: number, id: PersonalityId) => {
    const max = MAX_SCORES[id];
    if (!max) return 0;
    return Math.max(0, Math.min(100, Math.round((Math.max(0, score) / max) * 100)));
  };

  const isHidden = !!result.type.hidden;
  const illustration = characterIllustrations[result.type.id];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8 animate-fade-in">
          {isHidden ? (
            <>
              <div className="inline-flex items-center space-x-2 bg-navy text-cream px-4 py-1.5 rounded-full text-sm font-medium mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Hidden Personality Unlocked</span>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-2">
                Well, well, well… {nickname}.
              </h2>
              <p className="text-navy/70">
                You found the secret 9th type. Not everyone gets here.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-navy mb-2">
                Congratulations, {nickname}.
              </h2>
              <p className="text-navy/70">Your grocery shopper type has been revealed</p>
            </>
          )}
        </div>

        <div className="rounded-3xl shadow-2xl mb-8 animate-slide-up border border-navy/10 overflow-hidden">
          <div
            className="relative flex items-end justify-center pt-8 pb-2 min-h-[320px]"
            style={{ background: illustration.gradient }}
          >
            <div
              className="w-full max-w-[340px] [&>svg]:w-full [&>svg]:h-auto [&>svg]:block [&>svg]:overflow-visible"
              dangerouslySetInnerHTML={{ __html: illustration.svg }}
            />
          </div>
          <div className="bg-cream p-8">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-2" style={{ color: result.type.color }}>
                {result.type.name}
              </h3>
              <p className="italic text-navy/70 mb-4">"{result.type.motto}"</p>
              <p className="text-lg text-navy/80 leading-relaxed max-w-2xl mx-auto">
                {result.type.description}
              </p>
            </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-navy mb-4">Key Traits</h4>
              <div className="space-y-2">
                {result.type.traits.map((trait, index) => (
                  <div key={index} className="flex items-center space-x-2 text-navy/80">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: result.type.color }}
                    />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-navy mb-4">Strengths</h4>
              <div className="space-y-2">
                {result.type.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2 text-navy/80">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: result.type.color }}
                    />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-navy/15 pt-8">
            <h4 className="text-xl font-bold text-navy mb-4">Your Shopper DNA</h4>
            <p className="text-sm text-navy/60 mb-4">
              How strongly each shopper type showed up in your answers.
            </p>
            <div className="space-y-2">
              {top3.map(({ type, score }) => {
                const isWinner = type.id === result.type.id;
                const pct = toPercent(score, type.id);
                return (
                  <div key={type.id} className="flex items-center gap-3">
                    <div className="w-44 shrink-0 text-sm font-medium text-navy/80">
                      <span className={isWinner ? 'font-bold text-navy' : ''}>
                        {type.name.replace(/^The /, '')}
                      </span>
                    </div>
                    <div className="flex-1 h-3 bg-navy/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${isWinner ? '' : 'opacity-60'}`}
                        style={{ width: `${Math.max(2, pct)}%`, backgroundColor: type.color }}
                      />
                    </div>
                    <div className={`w-12 text-right text-xs tabular-nums ${isWinner ? 'font-bold text-navy' : 'text-navy/60'}`}>
                      {pct}%
                    </div>
                  </div>
                );
              })}
            </div>

            {bottom && (
              <>
                <p className="mt-6 mb-2 text-xs font-semibold uppercase tracking-wider text-navy/50">
                  Least like you
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-44 shrink-0 text-sm font-medium text-navy/80">
                    {bottom.type.name.replace(/^The /, '')}
                  </div>
                  <div className="flex-1 h-3 bg-navy/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 opacity-60"
                      style={{ width: `${Math.max(2, toPercent(bottom.score, bottom.type.id))}%`, backgroundColor: bottom.type.color }}
                    />
                  </div>
                  <div className="w-12 text-right text-xs tabular-nums text-navy/60">
                    {toPercent(bottom.score, bottom.type.id)}%
                  </div>
                </div>
              </>
            )}
          </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowSharing(!showSharing)}
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan to-purple text-cream rounded-xl font-semibold hover:from-purple hover:to-navy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Share2 className="w-5 h-5" />
            <span>Share Results</span>
          </button>

          <a
            href="https://flipp.com/flyers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-yellow text-navy rounded-xl font-semibold hover:bg-pink hover:text-cream transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Shop Smarter with Flipp</span>
          </a>

          <button
            onClick={onRestart}
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-navy/5 text-navy border border-navy/20 rounded-xl font-semibold hover:bg-navy/10 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Take Again</span>
          </button>
        </div>

        {showSharing && (
          <div className="relative mt-6 bg-cream backdrop-blur-sm rounded-2xl p-6 shadow-xl animate-slide-up border border-navy/10">
            <h4 className="text-lg font-bold text-navy mb-4 text-center">Share Your Results</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </button>
              <button
                onClick={() => handleCopyAndOpen('https://www.tiktok.com/')}
                className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-navy transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
                <span>TikTok</span>
              </button>
              <button
                onClick={() => handleCopyAndOpen('https://www.instagram.com/')}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </button>
            </div>
            {toast && (
              <div className="mt-4 text-center text-sm text-navy/70">{toast}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
