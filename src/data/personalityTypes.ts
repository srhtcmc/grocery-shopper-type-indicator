import { PersonalityId, PersonalityType } from '../types/personality';

// Theoretical max per personality: sum of the best-scoring option's weight
// in each question. Used as the denominator for normalized "DNA" percentages
// and for ranking (so ranking and displayed % stay in sync).
export const MAX_SCORES: Record<PersonalityId, number> = {
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

export const personalityTypes: PersonalityType[] = [
  {
    id: 'optimizer',
    name: 'The Optimizer',
    motto: 'The shortest path to the highest value.',
    description:
      'Logic-driven and game-mode. The Optimizer maximizes coupons, loyalty points, and aisle efficiency. For them, grocery shopping is a solvable puzzle — and they are winning it.',
    traits: ['Data-driven', 'Methodical', 'Deal-hunter', 'Efficient', 'Competitive'],
    strengths: ['Price-per-unit math', 'Meal planning', 'Route optimization', 'Clipping digital coupons'],
    color: '#43C4F4',
    emoji: '🎯',
  },
  {
    id: 'stockpiler',
    name: 'The Stockpiler',
    motto: 'Better to have it and not need it, than need it and not have it.',
    description:
      'Logic-driven and prepared. The Stockpiler\'s cart is heavy on non-perishables and "Buy 2 Get 1" deals. Their pantry is a bunker. They are ready for anything — weather, guests, the apocalypse.',
    traits: ['Prepared', 'Patient', 'Bulk-buyer', 'Pragmatic', 'Long-view'],
    strengths: ['Spotting a bulk deal', 'Pantry management', 'Never running out', 'Emergency readiness'],
    color: '#000C52',
    emoji: '📦',
  },
  {
    id: 'over-optimistic',
    name: 'The Over-Optimistic Planner',
    motto: 'This week, I will be the person who eats kale.',
    description:
      "A Dreamer. Buys tons of fresh produce and niche ingredients for complex recipes that inevitably wilt in the crisper drawer. The intent is real — the execution is aspirational.",
    traits: ['Aspirational', 'Adventurous', 'Hopeful', 'Creative', 'Ambitious'],
    strengths: ['Inspired meal ideas', 'Discovering new ingredients', 'Pinterest-level grocery hauls'],
    color: '#FFD500',
    emoji: '🥬',
  },
  {
    id: 'impulse',
    name: 'The Impulse Buyer',
    motto: 'That looks interesting.',
    description:
      'A Dreamer. Their cart is a chaotic reflection of their current hunger level and whatever was on the "New Arrivals" endcap. Shopping is vibes, and the vibes are immediate.',
    traits: ['Spontaneous', 'Curious', 'Trend-aware', 'Playful', 'Distractible'],
    strengths: ['Discovering hidden gems', 'Trying what\'s viral', 'Making shopping fun'],
    color: '#FF658F',
    emoji: '🛒',
  },
  {
    id: 'brand-loyalist',
    name: 'The Brand Loyalist',
    motto: "If it's not [Brand Name], it's not food.",
    description:
      "Social and sensory. Will drive to three different stores to find the specific peanut butter they like. Finds deep comfort in the familiar — their cart is a love letter to trusted labels.",
    traits: ['Loyal', 'Consistent', 'Discerning', 'Traditional', 'Particular'],
    strengths: ['Knowing what they like', 'Quality consistency', 'Brand expertise'],
    color: '#760FCA',
    emoji: '💜',
  },
  {
    id: 'ethical-curator',
    name: 'The Ethical Curator',
    motto: 'I am what I support.',
    description:
      'Social and sensory. Spends more time reading labels (Fair Trade, Organic, Local, B-Corp) than actually putting items in the cart. Every purchase is a vote.',
    traits: ['Principled', 'Thoughtful', 'Informed', 'Value-aligned', 'Deliberate'],
    strengths: ['Label literacy', 'Supporting small producers', 'Sustainable shopping'],
    color: '#5A8F3D',
    emoji: '🌱',
  },
  {
    id: 'ninja',
    name: 'The "Just the Essentials" Ninja',
    motto: 'In and out in five minutes.',
    description:
      "A Minimalist. No cart, no basket. If they can\u2019t carry it in their two hands, they don't need it today. They treat grocery shopping as a surgical strike.",
    traits: ['Decisive', 'Focused', 'Minimalist', 'Time-efficient', 'Low-overhead'],
    strengths: ['Speed', 'Avoiding overbuying', 'Never forgetting the mission'],
    color: '#1F2937',
    emoji: '🥷',
  },
  {
    id: 'delegate',
    name: 'The Reluctant Delegate',
    motto: "I'm just here because I was told to be.",
    description:
      'A Minimalist by necessity. Glued to their phone, texting photos of cereal boxes to someone else asking, "Is this the right one?" They didn\'t plan this trip — they\'re executing someone else\'s.',
    traits: ['Agreeable', 'Communicative', 'Task-oriented', 'Humble', 'Adaptive'],
    strengths: ['Following directions', 'Real-time coordination', 'Getting it done'],
    color: '#6B7280',
    emoji: '📱',
  },
  {
    id: 'chaos',
    name: 'The Chaos Resident',
    motto: 'The grocery store is a third space.',
    description:
      "You found the hidden type. The Chaos Resident treats the grocery store like a third space — eating a rotisserie chicken in the seating area, using the free Wi-Fi, or buying a single lime and a pack of birthday candles at 11:00 PM.",
    traits: ['Unpredictable', 'Free-spirited', 'Resourceful', 'Unbothered', 'Iconic'],
    strengths: ['Making the mundane fun', 'Finding comfort anywhere', 'Never being boring'],
    color: '#E91E63',
    emoji: '🍗',
    hidden: true,
  },
];
