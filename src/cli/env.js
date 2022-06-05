export const parseEnv = () => {
  let arg = '';

  process.argv.forEach((val, i) => {
    if (i > 1) {
      if (i % 2 === 0 && val.includes("RSS_")) {
        arg = val.slice(2);
      } else if (arg !== '') {
        console.log(`${arg}=${val}`);
        arg = "";
      }
    }
  });
};

parseEnv();
