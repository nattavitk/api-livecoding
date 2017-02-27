const stream = require('stream');
const {dockerLang} = require('./config');

let repl;

const input = (scripts, callback) => {
   let output = '';
   const stdinStream = new stream.Readable();
   scripts.map((script) => {
      stdinStream.push(script);
      stdinStream.push('\n');   // Signals the end of the line
   });
   stdinStream.push(null);   // Signals the end of the stream (EOF)
   stdinStream.pipe(repl.stdin);

   // repl.stdout.pipe(process.stdout);
   repl.stderr.pipe(process.stderr);

   repl.stdout.on('data', (data) => {
      output += data.toString();
   });
   repl.on('close', function(code) {
        return callback(output);
    });
};

const executeDocker = (lang, command) => {
   return new Promise((resolve, reject) => {
      repl = dockerLang(lang);
      input(command, (data) => {
         console.log(data);
         resolve(JSON.stringify(data));
      });
   });
};

module.exports = {executeDocker};