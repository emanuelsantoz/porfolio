import YAML from "yaml";

export type WebkitFormat = "json" | "yaml";

export function convertText(input: string, from: WebkitFormat, to: WebkitFormat) {
  const trimmed = input.trim();
  if (!trimmed) return "";

  if (from === to) return input;

  if (from === "json" && to === "yaml") {
    const parsed = JSON.parse(trimmed);
    return YAML.stringify(parsed).trimEnd();
  }

  if (from === "yaml" && to === "json") {
    const parsed = YAML.parse(trimmed);
    return JSON.stringify(parsed, null, 2);
  }

  return input;
}

