import { Transform } from "stream";

const reverseTransform = () => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
      process.exit();
    },
  });
};

export const transform = async () => {
  process.stdin.pipe(reverseTransform()).pipe(process.stdout);
};

transform();
