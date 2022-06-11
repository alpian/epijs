function rpn(str) {
    const tokens = str.split(",");
    const stack = [];
    tokens.forEach(t => {
        switch(t) {
            case "+":
                stack.push(stack.pop() + stack.pop());
                break;
            case "-":
                stack.push(stack.pop() - stack.pop());
                break;
            case "*":
                stack.push(stack.pop() * stack.pop());
                break;
            case "/":
                stack.push(stack.pop() / stack.pop());
                break;
            default:
                stack.push(parseInt(t));
        }
    });
    return stack.pop();
}

console.log(rpn("3,4,+,2,*,1,+"));