import path from "path";
import os from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const threads = os.cpus().length;
  const resultArray = [];
  for (let i = 0; i < threads; i++) {
    const promise = new Promise((resolve) => {
      const worker = new Worker(path.join(__dirname, "worker.js"), {
        workerData: 10 + i,
      });
      worker.on("message", resolve);
      worker.on("error", () =>
        resolve({
          status: "error",
          data: null,
        })
      );
    });
    resultArray.push(promise);
  }
  Promise.all(resultArray).then((data) => console.log(data));
};

performCalculations();
