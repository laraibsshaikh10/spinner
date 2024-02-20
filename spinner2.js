//Refactor the logic to remove the repeated setTimeout statements.


function printSymbolsAnimation (symbols, index, interval) {
  //to move through the symbols array
  if (index < symbols.length) {
    setTimeout(() => {
      //print out symbol's each index
      process.stdout.write(`\r${symbols[index]} `); 
    }, interval);
    //increase the index by 1 and the interval by 200ms
    printSymbolsAnimation(symbols, index + 1, interval += 200); 
    //to move the prompt line to the next line
  } else {
    setTimeout(() => {
      process.stdout.write('\n');
    }, interval);
  }

}

const symbols = ['|', '/', '-', '\\', '@', '#', '$', '%', '^', '&', '*'];
let interval = 100;
const index = 0;
//calling the function to start from index 0
printSymbolsAnimation(symbols, index, interval);
