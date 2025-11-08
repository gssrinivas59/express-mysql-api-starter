const fs = require('fs');
const path = require('path');

let output = '';

function buildStructure(dirPath, prefix = '') {
  const files = fs.readdirSync(dirPath);

  files.forEach((file, index) => {
    if (file === 'node_modules' || file === '.bin') return;

    const filePath = path.join(dirPath, file);
    const isDir = fs.statSync(filePath).isDirectory();
    const isLast = index === files.length - 1;

    output += prefix + (isLast ? '└── ' : '├── ') + file + '\n';

    if (isDir) {
      buildStructure(filePath, prefix + (isLast ? '    ' : '│   '));
    }
  });
}

// Build structure
buildStructure(__dirname+`/..`);

// Save to file
fs.writeFileSync('structure.txt', output);
console.log('Folder structure saved to structure.txt');
