export function formatOutput(string) {
    const trimmed = string.replace(/^[0,]+/, '');
    if (!trimmed) return '0';
    const firstComma = trimmed.indexOf(',');
    const newString = trimmed.replace(/,/g, '');
    return ~firstComma ? `${newString.slice(0, firstComma)},${newString.slice(firstComma)}` : newString;
}

export function toNumber(string) {
    return +(string.replace(',', '.'));
}

export function toString(number) {
    return `${number}`.replace('.', ',');
}