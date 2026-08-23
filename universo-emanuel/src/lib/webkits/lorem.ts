const WORDS = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
];

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function generateSentence(wordCount: number) {
  const count = Math.max(4, wordCount);
  const words = Array.from({ length: count }, () => pickWord());
  return `${capitalize(words.join(" "))}.`;
}

export function generateParagraph(sentenceCount: number, wordsPerSentence: number) {
  const count = Math.max(2, sentenceCount);
  return Array.from({ length: count }, () => generateSentence(wordsPerSentence)).join(" ");
}

export function generateLorem(options: {
  paragraphs: number;
  sentencesPerParagraph: number;
  wordsPerSentence: number;
}) {
  const paragraphs = Math.max(1, options.paragraphs);
  return Array.from({ length: paragraphs }, () =>
    generateParagraph(options.sentencesPerParagraph, options.wordsPerSentence),
  ).join("\n\n");
}

