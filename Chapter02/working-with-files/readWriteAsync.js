const fs = require('fs');
const path = require('path')

const filepath = path.join(process.cwd(), 'hello.txt');

fs.readFile(filepath, 'utf8', function (err, contents) {
    if (err) {
        return console.log(err);
    }
    console.log("File Contents:", contents);
    contents = contents.toUpperCase();
    fs.writeFile(filepath, contents, function (err) {
        if (err) throw err;
        console.log("File updated.")
    });
});
