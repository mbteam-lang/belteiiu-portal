export const parseCount = (value) => {
    if (value === undefined || value === null) return { number: 0, suffix: "" };
    const str = String(value);
    const number = parseInt(str.replace(/\D/g, ""), 10) || 0;
    const suffix = str.replace(/[0-9]/g, "");
    return { number, suffix };
};