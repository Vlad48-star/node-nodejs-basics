import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, "files");
const oldFilePath = path.join(container, "wrongFilename.txt");
const newFilePath = path.join(container, "properFilename.md");

export const rename = (filePath, newFilePath) => {
  fs.access(filePath, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      fs.promises.rename(filePath, newFilePath, () => {
        if (error) throw new Error("FS operation failed");
      });
    }
  });
};

rename(oldFilePath, newFilePath);
