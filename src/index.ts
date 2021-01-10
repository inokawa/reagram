// @ts-expect-error
import parseDot from "dotparser";

export const parse = (text: string) => {
  const ast = parseDot(text);
  if (ast.length > 1) {
    throw new Error("Dot file contains multiple graphs.");
  }
  return parseDot(text);
};
