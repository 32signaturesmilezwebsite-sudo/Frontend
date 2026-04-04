const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the string ending in overflow: hidden; }
  if (content.includes('overflow: hidden; }')) {
    content = content.replace(/padding:\s*140px\s*20px\s*100px;\s*background-color:\s*#fcfbf9;\s*border-bottom:\s*1px\s*solid\s*rgba\(0,0,0,0\.05\);\s*overflow:\s*hidden;/g, 
    'padding: 140px 20px 100px; background-color: #fcfbf9; border-bottom: 1px solid rgba(0,0,0,0.05); overflow: hidden; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated inline hero for: ${file}`);
    updatedCount++;
  } else if (content.includes('overflow: hidden;')) {
     content = content.replace(/border-bottom:\s*1px\s*solid\s*rgba\(0,0,0,0\.05\);\s*overflow:\s*hidden;/g,
     'border-bottom: 1px solid rgba(0,0,0,0.05);\n  overflow: hidden;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;');
     
     fs.writeFileSync(filePath, content);
     console.log(`Updated multiline hero for: ${file}`);
     updatedCount++;
  }
}

console.log(`Total CSS files updated: ${updatedCount}`);
