import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, "files");
const fileToReadPath = path.join(container, "fileToRead.txt");

export const read = async (filePath) => {
  fs.access(filePath, async (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      const readFile = await fs.promises.readFile(filePath, "utf8");
      console.log(readFile);
    }
  });
};

read(fileToReadPath);
