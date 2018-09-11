// var fs = require('fs');
// fs.readFile('./challenge1/info.txt', 'utf-8', (err, data)=>{
//   if (err){
//     throw err;
//   };
//   console.log(data);
// })

// CHALLENGE 2

// var fs = require('fs');
// let names = fs.readFileSync('challenge2/info.txt', 'utf-8')
// names = 'Frank\n' + 'Chris\n' + 'Chelsea\n' + names
// fs.writeFileSync('challenge2/info.txt', names)

// CHALLENGE 3

// var fs = require('fs');
// fs.renameSync('challenge3/binfo.txt','challenge3/info.txt')

// CHALLENGE 4

// var fs = require('fs');
// fs.mkdirSync('challenge4/copyfolder')
// fs.copyFileSync('challenge4/info.txt','challenge4/copyfolder/info.txt')

// CHALLENGE 5

// var fs = require('fs');
// let myData = fs.readFileSync('challenge5/info.txt', 'utf-8')
// let newStr = myData.replace(/-/g, " ")
// fs.writeFileSync('challenge5/info.txt', newStr);

// CHALLENGE 6

var fs = require('fs');
fs.readdir('./challenge6', (err, files) => {
  if (err) {
    console.error(err)
  } else {
    console.log(files)
    let extension = '.txt';
    var filteredFiles = files.filter(function(x){
      return x.indexOf(extension)  !== -1;

    })
         console.log("filtered " +filteredFiles);


      }

  })
