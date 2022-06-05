import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createFile = path.join(__dirname, "files", "fresh.txt");

export const create = async () => {
  fs.access(createFile, function (error) {
    if (error) {
      fs.writeFile(createFile, "I am fresh and young", (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else throw new Error("FS operation failed");
  });
};

create();
