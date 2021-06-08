const DIGIT = /[0-9]/;

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


function minilang(commands) {
  let register = 0;
  let stack = [];
  let commandsArray = commands.split(' ');
  commandsArray.forEach((command, index) => {
    if (DIGIT.test(command)) {
      register = Number(command);
    } else {
      switch(command) {
        case "PRINT":
          console.log(register);
          break;
        case "PUSH":
          stack.push(register);
          break;
        case "MULT":
          register = register * stack.pop();
          break;
        case "ADD":
          register = register + stack.pop();
          break;
        case "SUB":
          register = register - stack.pop();
          break;
        case "POP":
          register = stack.pop();
          break;
        case "DIV":
          register = Math.floor(register / stack.pop());
          break;
        case "REMAINDER":
          register = Math.floor(register % stack.pop());
          break;
      }
    }
  });
}