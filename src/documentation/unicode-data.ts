type UnicodeEntry = {
  label: string;
  type?: string;
  info: string;
  apply: string;
};

const unicodeEntries: UnicodeEntry[] = [
  {
    label: "registered",
    type: "variable",
    info: "Registered Sign / Registered Trade Mark Sign",
    apply: "®",
  },
  { label: "degree", type: "variable", info: "Degree Sign", apply: "°" },
  {
    label: "pm",
    type: "variable",
    info: "Plus-Minus Sign / Plus-Or-Minus Sign",
    apply: "±",
  },
  {
    label: "\\^2",
    info: "Superscript Two / Superscript Digit Two",
    apply: "²",
  },
  {
    label: "\\^3",
    info: "Superscript Three / Superscript Digit Three",
    apply: "³",
  },
  {
    label: "\\^1",
    info: "Superscript One / Superscript Digit One",
    apply: "¹",
  },
  {
    label: "\\1/4",
    type: "variable",
    info: "Vulgar Fraction One Quarter / Fraction One Quarter",
    apply: "¼",
  },
  {
    label: "\\1/2",
    type: "variable",
    info: "Vulgar Fraction One Half / Fraction One Half",
    apply: "½",
  },
  {
    label: "\\3/4",
    type: "variable",
    info: "Vulgar Fraction Three Quarters / Fraction Three Quarters",
    apply: "¾",
  },
  {
    label: "\\questiondown",
    type: "variable",
    info: "Inverted Question Mark",
    apply: "¿",
  },
  {
    label: "\\times",
    type: "variable",
    info: "Multiplication Sign",
    apply: "×",
  },
  { label: "\\div", type: "variable", info: "Division Sign", apply: "÷" },
  {
    label: "\\Alpha",
    type: "variable",
    info: "Greek Capital Letter Alpha",
    apply: "Α",
  },
  {
    label: "\\Beta",
    type: "variable",
    info: "Greek Capital Letter Beta",
    apply: "Β",
  },
  {
    label: "\\Gamma",
    type: "variable",
    info: "Greek Capital Letter Gamma",
    apply: "Γ",
  },
  {
    label: "\\Delta",
    type: "variable",
    info: "Greek Capital Letter Delta",
    apply: "Δ",
  },
  {
    label: "\\Epsilon",
    type: "variable",
    info: "Greek Capital Letter Epsilon",
    apply: "Ε",
  },
  {
    label: "\\Zeta",
    type: "variable",
    info: "Greek Capital Letter Zeta",
    apply: "Ζ",
  },
  {
    label: "\\Eta",
    type: "variable",
    info: "Greek Capital Letter Eta",
    apply: "Η",
  },
  {
    label: "\\Theta",
    type: "variable",
    info: "Greek Capital Letter Theta",
    apply: "Θ",
  },
  {
    label: "\\Iota",
    type: "variable",
    info: "Greek Capital Letter Iota",
    apply: "Ι",
  },
  {
    label: "\\Kappa",
    type: "variable",
    info: "Greek Capital Letter Kappa",
    apply: "Κ",
  },
  {
    label: "\\Lambda",
    type: "variable",
    info: "Greek Capital Letter Lamda / Greek Capital Letter Lambda",
    apply: "Λ",
  },
  {
    label: "\\upMu",
    type: "variable",
    info: "Greek Capital Letter Mu",
    apply: "Μ",
  },
  {
    label: "\\upNu",
    type: "variable",
    info: "Greek Capital Letter Nu",
    apply: "Ν",
  },
  {
    label: "\\Xi",
    type: "variable",
    info: "Greek Capital Letter Xi",
    apply: "Ξ",
  },
  {
    label: "\\upOmicron",
    type: "variable",
    info: "Greek Capital Letter Omicron",
    apply: "Ο",
  },
  {
    label: "\\Pi",
    type: "variable",
    info: "Greek Capital Letter Pi",
    apply: "Π",
  },
  {
    label: "\\Rho",
    type: "variable",
    info: "Greek Capital Letter Rho",
    apply: "Ρ",
  },
  {
    label: "\\Sigma",
    type: "variable",
    info: "Greek Capital Letter Sigma",
    apply: "Σ",
  },
  {
    label: "\\Tau",
    type: "variable",
    info: "Greek Capital Letter Tau",
    apply: "Τ",
  },
  {
    label: "\\Upsilon",
    type: "variable",
    info: "Greek Capital Letter Upsilon",
    apply: "Υ",
  },
  {
    label: "\\Phi",
    type: "variable",
    info: "Greek Capital Letter Phi",
    apply: "Φ",
  },
  {
    label: "\\Chi",
    type: "variable",
    info: "Greek Capital Letter Chi",
    apply: "Χ",
  },
  {
    label: "\\Psi",
    type: "variable",
    info: "Greek Capital Letter Psi",
    apply: "Ψ",
  },
  {
    label: "\\Omega",
    type: "variable",
    info: "Greek Capital Letter Omega",
    apply: "Ω",
  },
  {
    label: "\\alpha",
    type: "variable",
    info: "Greek Small Letter Alpha",
    apply: "α",
  },
  {
    label: "\\beta",
    type: "variable",
    info: "Greek Small Letter Beta",
    apply: "β",
  },
  {
    label: "\\gamma",
    type: "variable",
    info: "Greek Small Letter Gamma",
    apply: "γ",
  },
  {
    label: "\\delta",
    type: "variable",
    info: "Greek Small Letter Delta",
    apply: "δ",
  },
  {
    label: "\\varepsilon",
    type: "variable",
    info: "Greek Small Letter Epsilon",
    apply: "ε",
  },
  {
    label: "\\zeta",
    type: "variable",
    info: "Greek Small Letter Zeta",
    apply: "ζ",
  },
  {
    label: "\\eta",
    type: "variable",
    info: "Greek Small Letter Eta",
    apply: "η",
  },
  {
    label: "\\theta",
    type: "variable",
    info: "Greek Small Letter Theta",
    apply: "θ",
  },
  {
    label: "\\iota",
    type: "variable",
    info: "Greek Small Letter Iota",
    apply: "ι",
  },
  {
    label: "\\kappa",
    type: "variable",
    info: "Greek Small Letter Kappa",
    apply: "κ",
  },
  {
    label: "\\lambda",
    type: "variable",
    info: "Greek Small Letter Lamda / Greek Small Letter Lambda",
    apply: "λ",
  },
  {
    label: "\\mu",
    type: "variable",
    info: "Greek Small Letter Mu",
    apply: "μ",
  },
  {
    label: "\\nu",
    type: "variable",
    info: "Greek Small Letter Nu",
    apply: "ν",
  },
  {
    label: "\\xi",
    type: "variable",
    info: "Greek Small Letter Xi",
    apply: "ξ",
  },
  {
    label: "\\upomicron",
    type: "variable",
    info: "Greek Small Letter Omicron",
    apply: "ο",
  },
  {
    label: "\\pi",
    type: "variable",
    info: "Greek Small Letter Pi",
    apply: "π",
  },
  {
    label: "\\rho",
    type: "variable",
    info: "Greek Small Letter Rho",
    apply: "ρ",
  },
  {
    label: "\\varsigma",
    type: "variable",
    info: "Greek Small Letter Final Sigma",
    apply: "ς",
  },
  {
    label: "\\sigma",
    type: "variable",
    info: "Greek Small Letter Sigma",
    apply: "σ",
  },
  {
    label: "\\tau",
    type: "variable",
    info: "Greek Small Letter Tau",
    apply: "τ",
  },
  {
    label: "\\upsilon",
    type: "variable",
    info: "Greek Small Letter Upsilon",
    apply: "υ",
  },
  {
    label: "\\varphi",
    type: "variable",
    info: "Greek Small Letter Phi",
    apply: "φ",
  },
  {
    label: "\\chi",
    type: "variable",
    info: "Greek Small Letter Chi",
    apply: "χ",
  },
  {
    label: "\\psi",
    type: "variable",
    info: "Greek Small Letter Psi",
    apply: "ψ",
  },
  {
    label: "\\omega",
    type: "variable",
    info: "Greek Small Letter Omega",
    apply: "ω",
  },
  {
    label: "\\upvarbeta",
    type: "variable",
    info: "Greek Beta Symbol / Greek Small Letter Curled Beta",
    apply: "ϐ",
  },
  {
    label: "\\vartheta",
    type: "variable",
    info: "Greek Theta Symbol / Greek Small Letter Script Theta",
    apply: "ϑ",
  },
  {
    label: "\\phi",
    type: "variable",
    info: "Greek Phi Symbol / Greek Small Letter Script Phi",
    apply: "ϕ",
  },
  {
    label: "\\varpi",
    type: "variable",
    info: "Greek Pi Symbol / Greek Small Letter Omega Pi",
    apply: "ϖ",
  },
  {
    label: "\\upoldKoppa",
    type: "variable",
    info: "Greek Letter Archaic Koppa",
    apply: "Ϙ",
  },
  {
    label: "\\upoldkoppa",
    type: "variable",
    info: "Greek Small Letter Archaic Koppa",
    apply: "ϙ",
  },
  {
    label: "\\Stigma",
    type: "variable",
    info: "Greek Letter Stigma / Greek Capital Letter Stigma",
    apply: "Ϛ",
  },
  {
    label: "\\upstigma",
    type: "variable",
    info: "Greek Small Letter Stigma",
    apply: "ϛ",
  },
  {
    label: "\\Digamma",
    type: "variable",
    info: "Greek Letter Digamma / Greek Capital Letter Digamma",
    apply: "Ϝ",
  },
  {
    label: "\\digamma",
    type: "variable",
    info: "Greek Small Letter Digamma",
    apply: "ϝ",
  },
  {
    label: "\\Koppa",
    type: "variable",
    info: "Greek Letter Koppa / Greek Capital Letter Koppa",
    apply: "Ϟ",
  },
  {
    label: "\\upkoppa",
    type: "variable",
    info: "Greek Small Letter Koppa",
    apply: "ϟ",
  },
  {
    label: "\\Sampi",
    type: "variable",
    info: "Greek Letter Sampi / Greek Capital Letter Sampi",
    apply: "Ϡ",
  },
  {
    label: "\\upsampi",
    type: "variable",
    info: "Greek Small Letter Sampi",
    apply: "ϡ",
  },
  {
    label: "\\varkappa",
    type: "variable",
    info: "Greek Kappa Symbol / Greek Small Letter Script Kappa",
    apply: "ϰ",
  },
  {
    label: "\\varrho",
    type: "variable",
    info: "Greek Rho Symbol / Greek Small Letter Tailed Rho",
    apply: "ϱ",
  },
  {
    label: "\\varTheta",
    type: "variable",
    info: "Greek Capital Theta Symbol",
    apply: "ϴ",
  },
  {
    label: "\\epsilon",
    type: "variable",
    info: "Greek Lunate Epsilon Symbol",
    apply: "ϵ",
  },
  {
    label: "\\backepsilon",
    type: "variable",
    info: "Greek Reversed Lunate Epsilon Symbol",
    apply: "϶",
  },
  {
    label: "\\^0",
    info: "Superscript Zero / Superscript Digit Zero",
    apply: "⁰",
  },
  { label: "\\^i", info: "Superscript Latin Small Letter I", apply: "ⁱ" },
  {
    label: "\\^4",
    info: "Superscript Four / Superscript Digit Four",
    apply: "⁴",
  },
  {
    label: "\\^5",
    info: "Superscript Five / Superscript Digit Five",
    apply: "⁵",
  },
  {
    label: "\\^6",
    info: "Superscript Six / Superscript Digit Six",
    apply: "⁶",
  },
  {
    label: "\\^7",
    info: "Superscript Seven / Superscript Digit Seven",
    apply: "⁷",
  },
  {
    label: "\\^8",
    info: "Superscript Eight / Superscript Digit Eight",
    apply: "⁸",
  },
  {
    label: "\\^9",
    info: "Superscript Nine / Superscript Digit Nine",
    apply: "⁹",
  },
  { label: "\\^+", info: "Superscript Plus Sign", apply: "⁺" },
  {
    label: "\\^-",
    info: "Superscript Minus / Superscript Hyphen-Minus",
    apply: "⁻",
  },
  { label: "\\^=", info: "Superscript Equals Sign", apply: "⁼" },
  {
    label: "\\^(",
    info: "Superscript Left Parenthesis / Superscript Opening Parenthesis",
    apply: "⁽",
  },
  {
    label: "\\^)",
    info: "Superscript Right Parenthesis / Superscript Closing Parenthesis",
    apply: "⁾",
  },
  { label: "\\^n", info: "Superscript Latin Small Letter N", apply: "ⁿ" },
  {
    label: "\\_0",
    type: "variable",
    info: "Subscript Zero / Subscript Digit Zero",
    apply: "₀",
  },
  {
    label: "\\_1",
    type: "variable",
    info: "Subscript One / Subscript Digit One",
    apply: "₁",
  },
  {
    label: "\\_2",
    type: "variable",
    info: "Subscript Two / Subscript Digit Two",
    apply: "₂",
  },
  {
    label: "\\_3",
    type: "variable",
    info: "Subscript Three / Subscript Digit Three",
    apply: "₃",
  },
  {
    label: "\\_4",
    type: "variable",
    info: "Subscript Four / Subscript Digit Four",
    apply: "₄",
  },
  {
    label: "\\_5",
    type: "variable",
    info: "Subscript Five / Subscript Digit Five",
    apply: "₅",
  },
  {
    label: "\\_6",
    type: "variable",
    info: "Subscript Six / Subscript Digit Six",
    apply: "₆",
  },
  {
    label: "\\_7",
    type: "variable",
    info: "Subscript Seven / Subscript Digit Seven",
    apply: "₇",
  },
  {
    label: "\\_8",
    type: "variable",
    info: "Subscript Eight / Subscript Digit Eight",
    apply: "₈",
  },
  {
    label: "\\_9",
    type: "variable",
    info: "Subscript Nine / Subscript Digit Nine",
    apply: "₉",
  },
  { label: "\\forall", type: "variable", info: "For All", apply: "∀" },
  { label: "\\complement", type: "variable", info: "Complement", apply: "∁" },
  {
    label: "\\partial",
    type: "variable",
    info: "Partial Differential",
    apply: "∂",
  },
  { label: "\\exists", type: "variable", info: "There Exists", apply: "∃" },
  {
    label: "\\nexists",
    type: "variable",
    info: "There Does Not Exist",
    apply: "∄",
  },
  { label: "\\emptyset", type: "variable", info: "Empty Set", apply: "∅" },
  { label: "\\increment", type: "variable", info: "Increment", apply: "∆" },
  { label: "\\nabla", type: "variable", info: "Nabla", apply: "∇" },
  { label: "\\in", type: "variable", info: "Element Of", apply: "∈" },
  { label: "\\notin", type: "variable", info: "Not An Element Of", apply: "∉" },
  { label: "\\sqrt", type: "variable", info: "Square Root", apply: "√" },
  { label: "\\cbrt", type: "variable", info: "Cube Root", apply: "∛" },
  { label: "\\fourthroot", type: "variable", info: "Fourth Root", apply: "∜" },
  { label: "\\propto", type: "variable", info: "Proportional To", apply: "∝" },
  { label: "\\infty", type: "variable", info: "Infinity", apply: "∞" },
  { label: "\\cap", type: "variable", info: "Intersection", apply: "∩" },
  { label: "\\cup", type: "variable", info: "Union", apply: "∪" },
  { label: "\\therefore", type: "variable", info: "Therefore", apply: "∴" },
  { label: "\\because", type: "variable", info: "Because", apply: "∵" },
  {
    label: "\\leq",
    type: "variable",
    info: "Less-Than Or Equal To / Less Than Or Equal To",
    apply: "≤",
  },
  {
    label: "\\geq",
    type: "variable",
    info: "Greater-Than Or Equal To / Greater Than Or Equal To",
    apply: "≥",
  },
  { label: "\\subset", type: "variable", info: "Subset Of", apply: "⊂" },
  { label: "\\supset", type: "variable", info: "Superset Of", apply: "⊃" },
  { label: "\\nsubset", type: "variable", info: "Not A Subset Of", apply: "⊄" },
  {
    label: "\\nsupset",
    type: "variable",
    info: "Not A Superset Of",
    apply: "⊅",
  },
  {
    label: "\\subseteq",
    type: "variable",
    info: "Subset Of Or Equal To",
    apply: "⊆",
  },
  {
    label: "\\supseteq",
    type: "variable",
    info: "Superset Of Or Equal To",
    apply: "⊇",
  },
  {
    label: "\\nsubseteq",
    type: "variable",
    info: "Neither A Subset Of Nor Equal To",
    apply: "⊈",
  },
  {
    label: "\\nsupseteq",
    type: "variable",
    info: "Neither A Superset Of Nor Equal To",
    apply: "⊉",
  },
  { label: "\\bowtie", type: "variable", info: "Bowtie", apply: "⋈" },
  {
    label: "\\ltimes",
    type: "variable",
    info: "Left Normal Factor Semidirect Product",
    apply: "⋉",
  },
  {
    label: "\\rtimes",
    type: "variable",
    info: "Right Normal Factor Semidirect Product",
    apply: "⋊",
  },
  { label: "\\vdots", type: "variable", info: "Vertical Ellipsis", apply: "⋮" },
  {
    label: "\\cdots",
    type: "variable",
    info: "Midline Horizontal Ellipsis",
    apply: "⋯",
  },
  {
    label: "\\adots",
    type: "variable",
    info: "Up Right Diagonal Ellipsis",
    apply: "⋰",
  },
  {
    label: "\\ddots",
    type: "variable",
    info: "Down Right Diagonal Ellipsis",
    apply: "⋱",
  },
];

export const getUnicodeMap = () => {
  const map = new Map<string, UnicodeEntry>();
  for (const entry of unicodeEntries) {
    map.set(entry.label, entry);
  }
  return map;
};

export default unicodeEntries;
