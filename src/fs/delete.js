import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, "files");
const fileToRemovePath = path.join(container, "fileToRemove.txt");

export const remove = async (fileToRemove) => {
  fs.access(fileToRemove, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      fs.unlink(fileToRemove, (err) => {
        if (err) throw new Error("FS operation failed");
      });
    }
  });
};

remove(fileToRemovePath);
