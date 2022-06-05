export const parseArgs = () => {
  let arg = '';

  process.argv.forEach((val, i) => {
    if (i > 1) {
      if (i % 2 === 0) {
        arg = val;
      } else {
        console.log(`${arg} is ${val}`);
      }
    }
  });
};

parseArgs();
