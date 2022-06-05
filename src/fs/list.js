import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, "files");

export const list = async () => {
  fs.access(container, async (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      const items = await fs.promises.readdir(container, {
        withFileTypes: true,
      });
      for (let item of items) {
        console.log(item.name);
      }
    }
  });
};

list();
