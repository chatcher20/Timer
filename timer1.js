const input = process.argv.splice(2);

for (let number of input) {
  if (typeof +number === "number" && number > 0) {
    setTimeout( () => {
      process.stdout.write(`${number} second beep!\n`);
      process.stdout.write('\x07');
    }, number * 1000);
  }
};