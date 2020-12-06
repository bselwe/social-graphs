export function truncate(text: string, limit: number = 200) {
  const regex = new RegExp(`(.{${limit}})..+`);
  return text.replace(regex, "$1...");
}
