import localFont from "next/font/local";

export const toSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]+/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
};
export const finalFantasyFont = localFont({
  src: "./final-fantasy.otf",
});
