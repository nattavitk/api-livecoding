const child = require('child_process');

const dockerLang = (lang) => {
   if (lang === 'r') 
      return child.spawn('docker', ['run', '-a', 'stdin', '-a', 'stdout', '-i', 'rocker/r-base', 'R', '--quiet', '--no-save']);
};

module.exports = {dockerLang}