import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, "files");
const fileToReadPath = path.join(container, "fileToRead.txt");

export const read = async () => {
  const readStream = fs.createReadStream(fileToReadPath, "utf8");
  readStream.on("data", (data) => {
    process.stdout.write(data);
  });
};

read();
