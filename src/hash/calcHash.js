import * as path from "path";
import * as fs from "fs";
import * as crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToReadPath = path.join(
  __dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

export const calculateHash = async () => {
  const fileToRead = await fs.promises.readFile(fileToReadPath, "utf8");
  const hash = crypto.createHash("sha256");
  hash.update(fileToRead);
  const fileHash = hash.digest("hex");
  console.log(fileHash);
};

calculateHash();
