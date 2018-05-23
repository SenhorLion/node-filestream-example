/**
 * Convert a tabbed text file of data into a JSON formatted one
 * - read data.txt
 * - write to output.json
 * */
const fs = require('fs');

// convert data to a useable object
const output = fs
  .readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      qty: line[3],
    });
    return customers;
  }, {});

// write output to file
fs.writeFile('./output.json', JSON.stringify(output, null, 2), function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('file was saved!');
});
