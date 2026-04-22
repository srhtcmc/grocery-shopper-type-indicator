import { PersonalityId } from '../types/personality';

export interface CharacterIllustration {
  gradient: string;
  svg: string;
}

/**
 * Per-personality character illustrations rendered at the top of the
 * winner card on the results screen. SVG is injected via
 * dangerouslySetInnerHTML; gradient is applied as the card's background.
 */
export const characterIllustrations: Record<PersonalityId, CharacterIllustration> = {
  optimizer: {
    gradient: 'linear-gradient(155deg, #0D47A1, #1976D2, #42A5F5)',
    svg: `<svg viewBox="-35 -15 200 210" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="32" ry="6" fill="rgba(0,0,0,0.15)"/>
      <rect x="34" y="148" width="22" height="13" rx="6" fill="#0D47A1"/>
      <rect x="74" y="148" width="22" height="13" rx="6" fill="#0D47A1"/>
      <rect x="36" y="114" width="20" height="38" rx="4" fill="#1565C0"/>
      <rect x="74" y="114" width="20" height="38" rx="4" fill="#1565C0"/>
      <line x1="46" y1="114" x2="46" y2="150" stroke="#1976D2" stroke-width="1.5" opacity="0.5"/>
      <line x1="84" y1="114" x2="84" y2="150" stroke="#1976D2" stroke-width="1.5" opacity="0.5"/>
      <polygon points="22,84 108,84 103,118 27,118" fill="#1976D2"/>
      <polygon points="22,84 42,84 38,118 27,118" fill="#1565C0"/>
      <polygon points="108,84 88,84 92,118 103,118" fill="#1565C0"/>
      <polygon points="65,84 52,84 55,108 65,103" fill="#E3F2FD"/>
      <polygon points="65,84 78,84 75,108 65,103" fill="#E3F2FD"/>
      <polygon points="65,88 61.5,94 63,109 65,112 67,109 68.5,94" fill="#F57F17"/>
      <polygon points="22,86 6,89 8,134 26,130" fill="#1976D2"/>
      <rect x="-18" y="110" width="28" height="24" rx="3" fill="#FFFDE7" stroke="#E0E0E0" stroke-width="0.8"/>
      <line x1="-14" y1="117" x2="6" y2="117" stroke="#1565C0" stroke-width="1.2"/>
      <line x1="-14" y1="122" x2="6" y2="122" stroke="#1565C0" stroke-width="1.2"/>
      <line x1="-14" y1="127" x2="0" y2="127" stroke="#1565C0" stroke-width="1.2"/>
      <path d="M-14 115 l2 2 l4 -4" stroke="#2E7D32" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M-14 120 l2 2 l4 -4" stroke="#2E7D32" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <polygon points="108,86 122,89 124,132 106,130" fill="#1976D2"/>
      <rect x="120" y="100" width="22" height="30" rx="4" fill="#EEEEEE"/>
      <rect x="122" y="102" width="18" height="24" rx="2" fill="#29B6F6"/>
      <rect x="123" y="106" width="2.5" height="11" fill="#0D47A1"/>
      <rect x="127" y="106" width="1.5" height="11" fill="#0D47A1"/>
      <rect x="130" y="106" width="2.5" height="11" fill="#0D47A1"/>
      <rect x="134" y="106" width="1.5" height="11" fill="#0D47A1"/>
      <rect x="123" y="118" width="12" height="2" rx="1" fill="#0D47A1"/>
      <rect x="56" y="75" width="18" height="13" rx="2" fill="#FFCC80"/>
      <rect x="38" y="28" width="54" height="50" rx="9" fill="#FFCC80"/>
      <polygon points="38,28 92,28 92,52 38,52" fill="#FFD54F" opacity="0.2"/>
      <path d="M36,46 L38,28 L65,22 L92,28 L94,46 L88,36 L65,26 L42,36 Z" fill="#4E342E"/>
      <ellipse cx="37" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="93" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <rect x="42" y="46" width="16" height="11" rx="4" fill="none" stroke="#455A64" stroke-width="1.8"/>
      <rect x="65" y="46" width="16" height="11" rx="4" fill="none" stroke="#455A64" stroke-width="1.8"/>
      <line x1="58" y1="51" x2="65" y2="51" stroke="#455A64" stroke-width="1.8"/>
      <line x1="37" y1="51" x2="42" y2="51" stroke="#455A64" stroke-width="1.2"/>
      <line x1="81" y1="51" x2="93" y2="51" stroke="#455A64" stroke-width="1.2"/>
      <circle cx="50" cy="52" r="3.5" fill="#1565C0"/>
      <circle cx="73" cy="52" r="3.5" fill="#1565C0"/>
      <circle cx="51" cy="51" r="1.2" fill="white"/>
      <circle cx="74" cy="51" r="1.2" fill="white"/>
      <line x1="42" y1="43" x2="57" y2="44.5" stroke="#4E342E" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="65" y1="44.5" x2="80" y2="43" stroke="#4E342E" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 54 66 Q 65 73 76 66" stroke="#8D6E63" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    </svg>`,
  },
  stockpiler: {
    gradient: 'linear-gradient(155deg, #BF360C, #E65100, #FF8F00)',
    svg: `<svg viewBox="-30 -5 195 205" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="38" ry="6" fill="rgba(0,0,0,0.15)"/>
      <rect x="22" y="148" width="26" height="14" rx="6" fill="#4E342E"/>
      <rect x="82" y="148" width="26" height="14" rx="6" fill="#4E342E"/>
      <rect x="24" y="112" width="24" height="40" rx="4" fill="#795548"/>
      <rect x="82" y="112" width="24" height="40" rx="4" fill="#795548"/>
      <polygon points="14,80 116,80 110,116 20,116" fill="#E65100"/>
      <polygon points="14,80 36,80 32,116 20,116" fill="#BF360C"/>
      <polygon points="116,80 94,80 98,116 110,116" fill="#BF360C"/>
      <rect x="14" y="110" width="102" height="6" rx="3" fill="#5D4037"/>
      <rect x="58" y="109" width="14" height="8" rx="2" fill="#FFD54F"/>
      <polygon points="14,82 -4,88 -2,142 18,140" fill="#E65100"/>
      <rect x="-24" y="95" width="22" height="14" rx="3" fill="#AB47BC"/>
      <rect x="-24" y="80" width="22" height="14" rx="3" fill="#42A5F5"/>
      <rect x="-24" y="65" width="22" height="14" rx="3" fill="#66BB6A"/>
      <rect x="-24" y="50" width="22" height="14" rx="3" fill="#EF5350"/>
      <rect x="-24" y="95" width="22" height="3.5" rx="2" fill="rgba(255,255,255,0.28)"/>
      <rect x="-24" y="80" width="22" height="3.5" rx="2" fill="rgba(255,255,255,0.28)"/>
      <rect x="-24" y="65" width="22" height="3.5" rx="2" fill="rgba(255,255,255,0.28)"/>
      <rect x="-24" y="50" width="22" height="3.5" rx="2" fill="rgba(255,255,255,0.28)"/>
      <polygon points="116,82 134,88 136,142 114,140" fill="#E65100"/>
      <rect x="132" y="98" width="22" height="16" rx="3" fill="#90A4AE"/>
      <rect x="132" y="81" width="22" height="16" rx="3" fill="#FFB300"/>
      <rect x="132" y="64" width="22" height="16" rx="3" fill="#EF5350"/>
      <rect x="132" y="47" width="22" height="16" rx="3" fill="#26C6DA"/>
      <rect x="132" y="98" width="22" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="132" y="81" width="22" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="132" y="64" width="22" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="132" y="47" width="22" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="56" y="70" width="18" height="14" rx="2" fill="#FFCC80"/>
      <rect x="36" y="22" width="58" height="52" rx="9" fill="#FFCC80"/>
      <polygon points="36,22 94,22 94,46 36,46" fill="#FFD54F" opacity="0.18"/>
      <rect x="30" y="22" width="70" height="16" rx="8" fill="#4E342E"/>
      <rect x="24" y="30" width="82" height="10" rx="5" fill="#3E2723"/>
      <rect x="24" y="38" width="22" height="6" rx="3" fill="#3E2723"/>
      <ellipse cx="35" cy="50" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="95" cy="50" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="52" cy="52" rx="6" ry="6" fill="white"/>
      <ellipse cx="78" cy="52" rx="6" ry="6" fill="white"/>
      <circle cx="53" cy="53" r="3.5" fill="#BF360C"/>
      <circle cx="79" cy="53" r="3.5" fill="#BF360C"/>
      <circle cx="54.5" cy="51.5" r="1.3" fill="white"/>
      <circle cx="80.5" cy="51.5" r="1.3" fill="white"/>
      <line x1="44" y1="44" x2="60" y2="46" stroke="#3E2723" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="70" y1="46" x2="86" y2="44" stroke="#3E2723" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M 52 66 Q 65 76 78 66" stroke="#8D6E63" stroke-width="1.6" fill="#FFAB91" stroke-linecap="round"/>
    </svg>`,
  },
  'over-optimistic': {
    gradient: 'linear-gradient(155deg, #1B5E20, #388E3C, #81C784)',
    svg: `<svg viewBox="-20 -30 175 220" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="30" ry="6" fill="rgba(0,0,0,0.12)"/>
      <rect x="36" y="150" width="20" height="12" rx="6" fill="#2E7D32"/>
      <rect x="74" y="150" width="20" height="12" rx="6" fill="#2E7D32"/>
      <rect x="38" y="116" width="18" height="38" rx="4" fill="#4CAF50"/>
      <rect x="74" y="116" width="18" height="38" rx="4" fill="#4CAF50"/>
      <rect x="28" y="114" width="74" height="6" rx="3" fill="#A5D6A7"/>
      <polygon points="26,82 104,82 98,118 32,118" fill="#43A047"/>
      <polygon points="50,82 80,82 78,118 52,118" fill="#C8E6C9"/>
      <rect x="58" y="100" width="14" height="10" rx="3" fill="#A5D6A7"/>
      <polygon points="26,84 10,68 14,40 30,54 28,82" fill="#43A047"/>
      <line x1="14" y1="40" x2="14" y2="-20" stroke="#388E3C" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="4" cy="-4" rx="14" ry="10" fill="#66BB6A" transform="rotate(-25 4 -4)"/>
      <ellipse cx="16" cy="-14" rx="13" ry="9" fill="#4CAF50" transform="rotate(10 16 -14)"/>
      <ellipse cx="28" cy="-6" rx="14" ry="10" fill="#81C784" transform="rotate(35 28 -6)"/>
      <ellipse cx="8" cy="-22" rx="11" ry="7" fill="#A5D6A7" transform="rotate(-5 8 -22)"/>
      <ellipse cx="22" cy="-24" rx="10" ry="7" fill="#66BB6A" transform="rotate(20 22 -24)"/>
      <polygon points="104,84 118,88 120,130 102,128" fill="#43A047"/>
      <rect x="116" y="96" width="24" height="32" rx="3" fill="#F9A825"/>
      <rect x="118" y="98" width="20" height="28" rx="2" fill="#FFFDE7"/>
      <line x1="120" y1="104" x2="136" y2="104" stroke="#F9A825" stroke-width="1.2"/>
      <line x1="120" y1="109" x2="136" y2="109" stroke="#F9A825" stroke-width="1.2"/>
      <line x1="120" y1="114" x2="132" y2="114" stroke="#F9A825" stroke-width="1.2"/>
      <rect x="56" y="72" width="18" height="14" rx="2" fill="#FFCC80"/>
      <rect x="38" y="26" width="54" height="50" rx="9" fill="#FFCC80"/>
      <path d="M36,46 L38,26 L65,18 L92,26 L94,46 L90,34 L65,22 L40,34 Z" fill="#F9A825"/>
      <path d="M38,34 L24,66 L28,84 L36,74 L38,56 L38,46" fill="#F9A825"/>
      <path d="M92,34 L106,66 L102,84 L94,74 L92,56 L92,46" fill="#F9A825"/>
      <path d="M38,46 L28,92 L36,94 L40,74 L90,74 L94,94 L102,92 L92,46" fill="#F9C107" opacity="0.45"/>
      <ellipse cx="37" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="93" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="52" cy="49" rx="6.5" ry="7" fill="white"/>
      <ellipse cx="78" cy="49" rx="6.5" ry="7" fill="white"/>
      <circle cx="53" cy="50" r="4" fill="#388E3C"/>
      <circle cx="79" cy="50" r="4" fill="#388E3C"/>
      <circle cx="54.5" cy="48.5" r="1.5" fill="white"/>
      <circle cx="80.5" cy="48.5" r="1.5" fill="white"/>
      <line x1="47" y1="44" x2="44" y2="40" stroke="#2E7D32" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="52" y1="43" x2="51" y2="39" stroke="#2E7D32" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="57" y1="44" x2="58" y2="40" stroke="#2E7D32" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="73" y1="44" x2="71" y2="40" stroke="#2E7D32" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="78" y1="43" x2="77" y2="39" stroke="#2E7D32" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="83" y1="44" x2="84" y2="40" stroke="#2E7D32" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M44,41 Q52,37 60,41" stroke="#F57F17" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M70,41 Q78,37 86,41" stroke="#F57F17" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M 50 64 Q 65 77 80 64" stroke="#8D6E63" stroke-width="1.6" fill="#FFAB91" stroke-linecap="round"/>
      <ellipse cx="43" cy="61" rx="6" ry="4" fill="#FF8A80" opacity="0.28"/>
      <ellipse cx="87" cy="61" rx="6" ry="4" fill="#FF8A80" opacity="0.28"/>
    </svg>`,
  },
  impulse: {
    gradient: 'linear-gradient(155deg, #4A148C, #7B1FA2, #CE93D8)',
    svg: `<svg viewBox="-30 -25 200 215" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="42" ry="6" fill="rgba(0,0,0,0.15)"/>
      <rect x="24" y="149" width="22" height="13" rx="6" fill="#6A1B9A" transform="rotate(-4,35,155)"/>
      <rect x="76" y="149" width="22" height="13" rx="6" fill="#AD1457" transform="rotate(5,87,155)"/>
      <rect x="26" y="115" width="20" height="38" rx="4" fill="#7B1FA2" transform="rotate(-4,36,134)"/>
      <rect x="78" y="115" width="20" height="38" rx="4" fill="#7B1FA2" transform="rotate(5,88,134)"/>
      <polygon points="18,80 112,80 107,118 23,118" fill="#9C27B0"/>
      <circle cx="50" cy="94" r="4" fill="#E040FB" opacity="0.5"/>
      <circle cx="65" cy="90" r="3" fill="#FF4081" opacity="0.5"/>
      <circle cx="80" cy="96" r="4" fill="#E040FB" opacity="0.5"/>
      <polygon points="18,82 -6,64 -2,38 16,50 20,80" fill="#9C27B0"/>
      <rect x="-22" y="36" width="18" height="13" rx="3" fill="#FF7043"/>
      <circle cx="-4" cy="22" r="9" fill="#FFCA28"/>
      <rect x="-18" y="8" width="14" height="18" rx="3" fill="#29B6F6"/>
      <polygon points="112,82 132,64 136,40 116,50 110,80" fill="#9C27B0"/>
      <rect x="128" y="50" width="26" height="20" rx="4" fill="#FFA000"/>
      <line x1="128" y1="50" x2="141" y2="36" stroke="#FFA000" stroke-width="2.8"/>
      <line x1="154" y1="50" x2="141" y2="36" stroke="#FFA000" stroke-width="2.8"/>
      <rect x="124" y="34" width="12" height="10" rx="2" fill="#EF5350"/>
      <circle cx="146" cy="32" r="8" fill="#FFCA28"/>
      <rect x="150" y="42" width="12" height="10" rx="2" fill="#26A69A"/>
      <rect x="56" y="70" width="18" height="14" rx="2" fill="#FFCC80"/>
      <rect x="38" y="25" width="54" height="48" rx="9" fill="#FFCC80" transform="rotate(6,65,49)"/>
      <path d="M36,42 L38,24 L65,16 L92,24 L94,42 L88,30 L65,20 L42,30 Z" fill="#F06292"/>
      <path d="M38,30 L22,64 L26,82 L34,70 L38,54 L38,42" fill="#F06292"/>
      <path d="M92,30 L108,64 L104,82 L96,70 L92,54 L92,42" fill="#EC407A"/>
      <polygon points="38,28 28,-2 46,20" fill="#F06292"/>
      <polygon points="54,20 48,-6 64,14" fill="#EC407A"/>
      <polygon points="70,18 68,-8 80,12" fill="#F06292"/>
      <polygon points="86,26 94,-2 84,18" fill="#EC407A"/>
      <rect x="88" y="34" width="12" height="6" rx="2" fill="#FFEB3B"/>
      <ellipse cx="37" cy="50" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="93" cy="50" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="52" cy="47" rx="7" ry="8" fill="white"/>
      <ellipse cx="78" cy="47" rx="7" ry="8" fill="white"/>
      <circle cx="53" cy="48" r="4.5" fill="#7B1FA2"/>
      <circle cx="79" cy="48" r="4.5" fill="#7B1FA2"/>
      <circle cx="55" cy="46.5" r="1.7" fill="white"/>
      <circle cx="81" cy="46.5" r="1.7" fill="white"/>
      <line x1="46" y1="41" x2="43" y2="37" stroke="#AD1457" stroke-width="1.3" stroke-linecap="round"/>
      <line x1="52" y1="40" x2="51" y2="36" stroke="#AD1457" stroke-width="1.3" stroke-linecap="round"/>
      <line x1="58" y1="41" x2="59" y2="37" stroke="#AD1457" stroke-width="1.3" stroke-linecap="round"/>
      <line x1="72" y1="41" x2="70" y2="37" stroke="#AD1457" stroke-width="1.3" stroke-linecap="round"/>
      <line x1="78" y1="40" x2="77" y2="36" stroke="#AD1457" stroke-width="1.3" stroke-linecap="round"/>
      <line x1="84" y1="41" x2="85" y2="37" stroke="#AD1457" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M43,37 Q52,32 61,37" stroke="#AD1457" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M69,37 Q78,32 87,37" stroke="#AD1457" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M 51 61 Q 65 74 79 61" stroke="#C2185B" stroke-width="1" fill="#FF80AB"/>
      <path d="M 55 64 Q 65 70 75 64" fill="white"/>
    </svg>`,
  },
  'brand-loyalist': {
    gradient: 'linear-gradient(155deg, #0D0D2B, #1A237E, #5C6BC0)',
    svg: `<svg viewBox="-15 -5 165 195" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="30" ry="6" fill="rgba(0,0,0,0.15)"/>
      <rect x="36" y="148" width="22" height="14" rx="6" fill="#0D0D2B"/>
      <rect x="72" y="148" width="22" height="14" rx="6" fill="#0D0D2B"/>
      <ellipse cx="39" cy="150" rx="4" ry="2" fill="rgba(255,255,255,0.25)" transform="rotate(-20,39,150)"/>
      <ellipse cx="75" cy="150" rx="4" ry="2" fill="rgba(255,255,255,0.25)" transform="rotate(-20,75,150)"/>
      <rect x="38" y="114" width="20" height="38" rx="4" fill="#283593"/>
      <rect x="72" y="114" width="20" height="38" rx="4" fill="#283593"/>
      <line x1="48" y1="114" x2="48" y2="150" stroke="#3949AB" stroke-width="1.2" opacity="0.6"/>
      <line x1="82" y1="114" x2="82" y2="150" stroke="#3949AB" stroke-width="1.2" opacity="0.6"/>
      <polygon points="24,82 106,82 100,118 30,118" fill="#1A237E"/>
      <polygon points="24,82 44,82 40,118 30,118" fill="#283593"/>
      <polygon points="106,82 86,82 90,118 100,118" fill="#283593"/>
      <polygon points="65,82 52,82 56,106 65,100" fill="#E8EAF6"/>
      <polygon points="65,82 78,82 74,106 65,100" fill="#E8EAF6"/>
      <circle cx="74" cy="90" r="3.5" fill="#FFD54F"/>
      <circle cx="74" cy="90" r="1.8" fill="#FF8F00"/>
      <polygon points="24,84 10,88 12,130 28,128" fill="#1A237E"/>
      <polygon points="106,84 118,88 116,130 100,128" fill="#1A237E"/>
      <rect x="48" y="90" width="34" height="40" rx="8" fill="#5D4037"/>
      <rect x="50" y="92" width="30" height="36" rx="7" fill="#6D4C41"/>
      <rect x="46" y="84" width="38" height="10" rx="5" fill="#FF8F00"/>
      <rect x="53" y="100" width="24" height="20" rx="3" fill="#F5F5F5"/>
      <text x="55" y="112" font-size="6" fill="#5D4037" font-weight="bold">Nutella</text>
      <ellipse cx="65" cy="116" rx="9" ry="3" fill="#795548"/>
      <ellipse cx="59" cy="96" rx="5" ry="2.5" fill="rgba(255,255,255,0.3)" transform="rotate(-20,59,96)"/>
      <rect x="56" y="72" width="18" height="14" rx="2" fill="#FFCC80"/>
      <rect x="38" y="24" width="54" height="52" rx="9" fill="#FFCC80"/>
      <path d="M38,44 L38,24 L65,18 L92,24 L92,44 L86,32 L65,22 L44,32 Z" fill="#37474F"/>
      <path d="M38,32 L38,50 L44,48 L44,32" fill="#B0BEC5" opacity="0.8"/>
      <path d="M92,32 L92,50 L86,48 L86,32" fill="#B0BEC5" opacity="0.8"/>
      <ellipse cx="37" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="93" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="52" cy="50" rx="6" ry="6.5" fill="white"/>
      <ellipse cx="78" cy="50" rx="6" ry="6.5" fill="white"/>
      <circle cx="53" cy="51" r="3.5" fill="#1A237E"/>
      <circle cx="79" cy="51" r="3.5" fill="#1A237E"/>
      <circle cx="54.5" cy="49.5" r="1.3" fill="white"/>
      <circle cx="80.5" cy="49.5" r="1.3" fill="white"/>
      <line x1="44" y1="42" x2="59" y2="43.5" stroke="#37474F" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="71" y1="43.5" x2="86" y2="42" stroke="#37474F" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 52 64 Q 65 72 78 64" stroke="#8D6E63" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    </svg>`,
  },
  'ethical-curator': {
    gradient: 'linear-gradient(155deg, #1B5E20, #558B2F, #AED581)',
    svg: `<svg viewBox="-30 -5 195 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="32" ry="6" fill="rgba(0,0,0,0.12)"/>
      <rect x="34" y="150" width="20" height="12" rx="5" fill="#5D4037"/>
      <rect x="76" y="150" width="20" height="12" rx="5" fill="#5D4037"/>
      <line x1="34" y1="154" x2="54" y2="154" stroke="#8D6E63" stroke-width="1.5"/>
      <line x1="76" y1="154" x2="96" y2="154" stroke="#8D6E63" stroke-width="1.5"/>
      <rect x="36" y="118" width="20" height="36" rx="4" fill="#8D6E63"/>
      <rect x="74" y="118" width="20" height="36" rx="4" fill="#8D6E63"/>
      <polygon points="24,82 106,82 100,122 30,122" fill="#558B2F"/>
      <polygon points="24,82 44,82 40,122 30,122" fill="#33691E"/>
      <polygon points="106,82 86,82 90,122 100,122" fill="#33691E"/>
      <rect x="32" y="96" width="14" height="12" rx="3" fill="#33691E"/>
      <rect x="84" y="96" width="14" height="12" rx="3" fill="#33691E"/>
      <polygon points="24,84 10,88 12,132 28,130" fill="#558B2F"/>
      <rect x="-22" y="104" width="32" height="38" rx="5" fill="#6D4C41"/>
      <path d="M-18,104 Q-6,88 6,104" stroke="#5D4037" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <polygon points="106,84 120,78 124,118 106,122" fill="#558B2F"/>
      <rect x="122" y="60" width="28" height="40" rx="4" fill="#DCEDC8"/>
      <rect x="124" y="62" width="24" height="36" rx="3" fill="#F1F8E9"/>
      <text x="125" y="70" font-size="4.5" fill="#33691E" font-weight="bold">FAIR TRADE</text>
      <text x="125" y="78" font-size="4.2" fill="#1B5E20">Organic</text>
      <text x="125" y="85" font-size="4.2" fill="#33691E">Non-GMO</text>
      <text x="125" y="92" font-size="4.2" fill="#33691E">Local</text>
      <rect x="56" y="72" width="18" height="14" rx="2" fill="#FFCC80"/>
      <rect x="38" y="26" width="54" height="50" rx="9" fill="#FFCC80" transform="rotate(-4,65,51)"/>
      <path d="M36,46 L38,26 L65,18 L92,26 L94,46 L90,34 L65,22 L40,34 Z" fill="#6D4C41"/>
      <path d="M38,34 L22,70 L26,90 L34,80 L38,58 L38,46" fill="#6D4C41"/>
      <path d="M92,34 L108,70 L104,90 L96,80 L92,58 L92,46" fill="#6D4C41"/>
      <path d="M22,70 Q18,80 22,88 Q26,90 26,82" fill="#795548" opacity="0.55"/>
      <rect x="26" y="72" width="8" height="5" rx="2.5" fill="#4CAF50"/>
      <ellipse cx="37" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="93" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <rect x="41" y="46" width="16" height="11" rx="4" fill="none" stroke="#388E3C" stroke-width="2"/>
      <rect x="64" y="46" width="16" height="11" rx="4" fill="none" stroke="#388E3C" stroke-width="2"/>
      <line x1="57" y1="51.5" x2="64" y2="51.5" stroke="#388E3C" stroke-width="2"/>
      <line x1="35" y1="51.5" x2="41" y2="51.5" stroke="#388E3C" stroke-width="1.4"/>
      <line x1="80" y1="51.5" x2="93" y2="51.5" stroke="#388E3C" stroke-width="1.4"/>
      <circle cx="49" cy="51.5" r="3.5" fill="#558B2F"/>
      <circle cx="72" cy="51.5" r="3.5" fill="#558B2F"/>
      <circle cx="50" cy="50.5" r="1.2" fill="white"/>
      <circle cx="73" cy="50.5" r="1.2" fill="white"/>
      <line x1="41" y1="43" x2="56" y2="46" stroke="#5D4037" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="65" y1="46" x2="80" y2="43" stroke="#5D4037" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 52 63 Q 65 67 78 63" stroke="#A1887F" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`,
  },
  ninja: {
    gradient: 'linear-gradient(155deg, #0A0A0A, #263238, #607D8B)',
    svg: `<svg viewBox="-28 -5 186 195" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="28" ry="5" fill="rgba(0,0,0,0.2)"/>
      <rect x="38" y="149" width="20" height="13" rx="6" fill="#212121"/>
      <rect x="72" y="149" width="20" height="13" rx="6" fill="#212121"/>
      <ellipse cx="41" cy="151" rx="4" ry="2" fill="rgba(255,255,255,0.2)" transform="rotate(-15,41,151)"/>
      <rect x="40" y="115" width="18" height="38" rx="4" fill="#263238"/>
      <rect x="72" y="115" width="18" height="38" rx="4" fill="#263238"/>
      <polygon points="26,80 104,80 98,118 32,118" fill="#37474F"/>
      <polygon points="26,80 46,80 42,118 32,118" fill="#263238"/>
      <polygon points="104,80 84,80 88,118 98,118" fill="#263238"/>
      <polygon points="54,80 76,80 74,90 56,90" fill="#212121"/>
      <polygon points="26,82 10,78 8,122 28,124" fill="#37474F"/>
      <rect x="-18" y="94" width="22" height="18" rx="6" fill="#FFB74D"/>
      <path d="M-18,98 Q-7,92 4,98" stroke="#E65100" stroke-width="1.4" fill="none"/>
      <ellipse cx="-7" cy="94" rx="10" ry="5" fill="#FFCC80" opacity="0.65"/>
      <polygon points="104,82 118,78 120,118 102,120" fill="#37474F"/>
      <rect x="118" y="84" width="22" height="30" rx="3" fill="#E3F2FD"/>
      <polygon points="118,84 140,84 129,72" fill="#BBDEFB"/>
      <text x="119" y="100" font-size="5" fill="#1565C0" font-weight="bold">MILK</text>
      <rect x="120" y="103" width="16" height="8" rx="2" fill="#BBDEFB"/>
      <rect x="56" y="70" width="18" height="13" rx="2" fill="#37474F"/>
      <rect x="38" y="26" width="54" height="50" rx="9" fill="#FFCC80"/>
      <rect x="36" y="58" width="58" height="20" rx="5" fill="#263238"/>
      <rect x="38" y="62" width="54" height="3" rx="2" fill="#37474F" opacity="0.5"/>
      <path d="M38,42 L38,26 L65,18 L92,26 L92,42 L86,30 L65,22 L44,30 Z" fill="#212121"/>
      <circle cx="65" cy="18" r="11" fill="#212121"/>
      <ellipse cx="65" cy="18" rx="11" ry="7" fill="#2D2D2D"/>
      <rect x="61" y="25" width="8" height="5" rx="2.5" fill="#B71C1C"/>
      <path d="M38,30 L34,46 L38,52 L40,44 L38,30" fill="#212121"/>
      <path d="M92,30 L96,46 L92,52 L90,44 L92,30" fill="#212121"/>
      <ellipse cx="37" cy="50" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="93" cy="50" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="52" cy="48" rx="6" ry="6.5" fill="white"/>
      <ellipse cx="78" cy="48" rx="6" ry="6.5" fill="white"/>
      <circle cx="53" cy="49" r="3.8" fill="#B71C1C"/>
      <circle cx="79" cy="49" r="3.8" fill="#B71C1C"/>
      <circle cx="54.5" cy="47.5" r="1.4" fill="white"/>
      <circle cx="80.5" cy="47.5" r="1.4" fill="white"/>
      <line x1="44" y1="39" x2="58" y2="43" stroke="#212121" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="72" y1="43" x2="86" y2="39" stroke="#212121" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="-16" y1="88" x2="10" y2="88" stroke="#90A4AE" stroke-width="2" opacity="0.6"/>
      <line x1="-16" y1="95" x2="12" y2="95" stroke="#90A4AE" stroke-width="2" opacity="0.45"/>
      <line x1="-16" y1="102" x2="8" y2="102" stroke="#90A4AE" stroke-width="2" opacity="0.3"/>
    </svg>`,
  },
  delegate: {
    gradient: 'linear-gradient(155deg, #2C3E50, #546E7A, #90A4AE)',
    svg: `<svg viewBox="-30 -5 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="30" ry="6" fill="rgba(0,0,0,0.15)"/>
      <rect x="36" y="151" width="20" height="11" rx="5" fill="#546E7A" transform="rotate(3,46,156)"/>
      <rect x="74" y="151" width="20" height="11" rx="5" fill="#546E7A" transform="rotate(-2,84,156)"/>
      <rect x="38" y="118" width="18" height="37" rx="4" fill="#607D8B" transform="rotate(4,47,136)"/>
      <rect x="74" y="118" width="18" height="37" rx="4" fill="#607D8B" transform="rotate(-3,83,136)"/>
      <polygon points="24,86 106,86 102,124 28,124" fill="#78909C"/>
      <path d="M 42 110 Q 65 115 88 110 L 88 122 Q 65 127 42 122 Z" fill="#607D8B"/>
      <line x1="58" y1="86" x2="53" y2="112" stroke="#546E7A" stroke-width="1.8"/>
      <line x1="72" y1="86" x2="77" y2="112" stroke="#546E7A" stroke-width="1.8"/>
      <ellipse cx="65" cy="82" rx="22" ry="10" fill="#607D8B"/>
      <polygon points="24,88 10,92 10,134 26,132" fill="#78909C"/>
      <polygon points="106,88 120,74 122,108 104,112" fill="#78909C"/>
      <rect x="118" y="52" width="24" height="36" rx="4" fill="#212121"/>
      <rect x="120" y="54" width="20" height="30" rx="3" fill="#90CAF9"/>
      <rect x="121" y="56" width="18" height="24" rx="2" fill="#FFF9C4"/>
      <rect x="122" y="58" width="16" height="11" rx="1" fill="#FF8A65"/>
      <text x="123" y="76" font-size="4.2" fill="#5D4037">CEREAL</text>
      <circle cx="130" cy="52" r="2.5" fill="#37474F"/>
      <rect x="56" y="76" width="18" height="14" rx="2" fill="#FFCC80"/>
      <rect x="38" y="28" width="54" height="50" rx="9" fill="#FFCC80" transform="rotate(-6,65,53)"/>
      <path d="M36,46 L38,28 L65,20 L92,28 L94,46 L88,34 L65,24 L42,34 Z" fill="#546E7A"/>
      <polygon points="74,22 78,8 82,24" fill="#607D8B"/>
      <polygon points="56,22 52,8 60,20" fill="#546E7A"/>
      <ellipse cx="37" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="93" cy="52" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="51" cy="50" rx="6" ry="5.5" fill="white"/>
      <ellipse cx="78" cy="50" rx="6" ry="5.5" fill="white"/>
      <circle cx="52" cy="52" r="3" fill="#78909C"/>
      <circle cx="79" cy="52" r="3" fill="#78909C"/>
      <path d="M 45 48 Q 51 45 57 48" fill="#FFCC80" stroke="none"/>
      <path d="M 72 48 Q 78 45 84 48" fill="#FFCC80" stroke="none"/>
      <line x1="44" y1="43" x2="58" y2="43" stroke="#546E7A" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="72" y1="43" x2="86" y2="43" stroke="#546E7A" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="53" y1="64" x2="70" y2="64" stroke="#A1887F" stroke-width="1.6" stroke-linecap="round"/>
      <rect x="-24" y="56" width="38" height="16" rx="8" fill="#E3F2FD"/>
      <polygon points="-4,72 0,72 -2,78" fill="#E3F2FD"/>
      <text x="-20" y="67" font-size="5.5" fill="#1565C0">is this right?</text>
      <rect x="-24" y="38" width="34" height="15" rx="7" fill="#E8F5E9"/>
      <polygon points="-10,53 -6,53 -8,58" fill="#E8F5E9"/>
      <text x="-20" y="48" font-size="5.5" fill="#2E7D32">which one??</text>
    </svg>`,
  },
  chaos: {
    gradient: 'linear-gradient(145deg, #FF5722, #E91E63, #9C27B0, #2196F3)',
    svg: `<svg viewBox="-35 -28 210 220" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="163" rx="40" ry="7" fill="rgba(255,107,107,0.2)"/>
      <rect x="24" y="149" width="22" height="13" rx="6" fill="#E91E63" transform="rotate(-6,35,155)"/>
      <rect x="78" y="149" width="22" height="13" rx="6" fill="#2196F3" transform="rotate(8,89,155)"/>
      <rect x="24" y="113" width="22" height="40" rx="4" fill="#FF9800" transform="rotate(-8,35,133)"/>
      <rect x="78" y="113" width="22" height="40" rx="4" fill="#9C27B0" transform="rotate(10,89,133)"/>
      <polygon points="14,76 116,76 110,114 20,114" fill="#FF5722"/>
      <polygon points="34,86 58,80 56,110 30,112" fill="#4CAF50"/>
      <polygon points="60,78 90,84 92,112 58,110" fill="#FFEB3B"/>
      <polygon points="14,78 -6,60 -2,34 16,46 18,76" fill="#FF5722"/>
      <circle cx="-14" cy="18" r="16" fill="#FF4081"/>
      <line x1="-14" y1="34" x2="-12" y2="52" stroke="#FF80AB" stroke-width="2" stroke-dasharray="2,3"/>
      <ellipse cx="-18" cy="12" rx="7" ry="4" fill="rgba(255,255,255,0.35)" transform="rotate(-30,-18,12)"/>
      <polygon points="116,78 134,60 138,34 118,44 112,76" fill="#FF5722"/>
      <ellipse cx="146" cy="34" rx="20" ry="13" fill="#FF8F00"/>
      <ellipse cx="146" cy="34" rx="14" ry="9" fill="#FFA000"/>
      <ellipse cx="138" cy="28" rx="5" ry="3.5" fill="#E65100" opacity="0.5" transform="rotate(-20,138,28)"/>
      <ellipse cx="150" cy="38" rx="4" ry="2.5" fill="#E65100" opacity="0.5" transform="rotate(15,150,38)"/>
      <line x1="160" y1="42" x2="170" y2="56" stroke="#6D4C41" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="170" cy="58" rx="6" ry="5" fill="#5D4037"/>
      <path d="M138 16 Q140 8 138 0" stroke="#B0BEC5" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M146 14 Q148 6 146 -2" stroke="#B0BEC5" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M154 16 Q156 8 154 0" stroke="#B0BEC5" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
      <rect x="56" y="66" width="18" height="14" rx="2" fill="#FFCC80"/>
      <rect x="37" y="20" width="56" height="50" rx="10" fill="#FFCC80" transform="rotate(-3,65,45)"/>
      <polygon points="28,22 65,-22 102,22" fill="#FF4081"/>
      <polygon points="28,22 36,22 38,14 32,14" fill="#FF80AB"/>
      <polygon points="65,-22 61,-10 69,-10" fill="#FF80AB"/>
      <line x1="47" y1="9" x2="43" y2="20" stroke="#FFEB3B" stroke-width="2.5"/>
      <line x1="65" y1="-18" x2="63" y2="-4" stroke="#FFEB3B" stroke-width="2.5"/>
      <line x1="82" y1="9" x2="86" y2="20" stroke="#FFEB3B" stroke-width="2.5"/>
      <circle cx="65" cy="-24" r="8" fill="#FFEB3B"/>
      <path d="M37,36 L28,20 L36,14 L38,26 L37,36" fill="#FF9800"/>
      <path d="M93,36 L102,20 L94,14 L92,26 L93,36" fill="#FF9800"/>
      <path d="M56,22 L50,8 L62,6 L70,8 L64,22" fill="#FF9800"/>
      <ellipse cx="36" cy="48" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="94" cy="48" rx="5" ry="7" fill="#FFCC80"/>
      <ellipse cx="51" cy="42" rx="7.5" ry="8" fill="white"/>
      <ellipse cx="79" cy="42" rx="7.5" ry="8" fill="white"/>
      <circle cx="52" cy="43" r="5" fill="#FF5722"/>
      <circle cx="80" cy="43" r="5" fill="#FF5722"/>
      <circle cx="54" cy="41" r="1.8" fill="white"/>
      <circle cx="82" cy="41" r="1.8" fill="white"/>
      <path d="M42,33 Q51,28 60,33" stroke="#E64A19" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M70,33 Q79,28 88,33" stroke="#E64A19" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M 46 57 Q 65 74 84 57" stroke="#E64A19" stroke-width="1.2" fill="#FF8A65"/>
      <path d="M 50 62 Q 65 72 80 62" fill="white"/>
      <ellipse cx="41" cy="54" rx="7" ry="5" fill="#FF80AB" opacity="0.38"/>
      <ellipse cx="89" cy="54" rx="7" ry="5" fill="#FF80AB" opacity="0.38"/>
    </svg>`,
  },
};
