function randomDigits(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10));
}

function calcCpfDigit(digits: number[]) {
  const weightStart = digits.length + 1;
  const sum = digits.reduce((acc, d, idx) => acc + d * (weightStart - idx), 0);
  const mod = (sum * 10) % 11;
  return mod === 10 ? 0 : mod;
}

export function formatCpf(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const a = digits.slice(0, 3);
  const b = digits.slice(3, 6);
  const c = digits.slice(6, 9);
  const d = digits.slice(9, 11);
  if (digits.length <= 3) return a;
  if (digits.length <= 6) return `${a}.${b}`;
  if (digits.length <= 9) return `${a}.${b}.${c}`;
  return `${a}.${b}.${c}-${d}`;
}

export function generateCpf(masked = true) {
  const base = randomDigits(9);
  const d1 = calcCpfDigit(base);
  const d2 = calcCpfDigit([...base, d1]);
  const cpf = [...base, d1, d2].join("");
  return masked ? formatCpf(cpf) : cpf;
}

function calcCnpjDigit(digits: number[]) {
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights = digits.length === 12 ? weights1 : weights2;
  const sum = digits.reduce((acc, d, idx) => acc + d * weights[idx], 0);
  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
}

export function formatCnpj(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  const a = digits.slice(0, 2);
  const b = digits.slice(2, 5);
  const c = digits.slice(5, 8);
  const d = digits.slice(8, 12);
  const e = digits.slice(12, 14);
  if (digits.length <= 2) return a;
  if (digits.length <= 5) return `${a}.${b}`;
  if (digits.length <= 8) return `${a}.${b}.${c}`;
  if (digits.length <= 12) return `${a}.${b}.${c}/${d}`;
  return `${a}.${b}.${c}/${d}-${e}`;
}

export function generateCnpj(masked = true) {
  const base = randomDigits(12);
  const d1 = calcCnpjDigit(base);
  const d2 = calcCnpjDigit([...base, d1]);
  const cnpj = [...base, d1, d2].join("");
  return masked ? formatCnpj(cnpj) : cnpj;
}

