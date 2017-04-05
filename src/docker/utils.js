const splitCommand = (command) => {
   const commands = command.split('\\n');
   return commands;
};

module.exports = {splitCommand};