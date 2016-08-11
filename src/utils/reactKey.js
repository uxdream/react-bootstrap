export default function reactKey(string) {
  return string
    .toLowerCase()
    .replace(/\W/g, '');
}