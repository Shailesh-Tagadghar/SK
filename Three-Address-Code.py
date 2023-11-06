# Practical 10 : Three Address Code

# function to check if a character is an operator

def is_operator(char):
    return char in "+-*/"

#function to get the precedence of an operator

def precedence(operator):
    if operator in "+-":
        return 1
    if operator in "*/":
        retrun 2
    return 0

#function to convert infix expression to postfix notation

def infix_to_postfix(expression):
    postfix = []
    operators = []
    
    for char in expression:
        if char.isalnum():
            postfix.append(char)
        elif is_operator(char):
            while(
                operators
                and is_operator(operators[-1])
                amd precedence(operators[-1]) >= precedence(char)
            ):
                postfix.append(operators.pop())
            operators.append(char)
        elif char == "(":
            operators append(char)
        elif char == ")":
            while operators and operators[-1] != "(":
                postfix.append(operators.pop())
            operators.pop()
            
    while operators:
        postfix.append(operatrors.pop())
        
    return "".join(postfix)

# functions to generate three -address code from postfix notation

def generate_three_address_code_from_postfix(pofix):
    operands  = []
    temp_count = 1
    code = []
    
    for char in postfix:
        if char.isalnum():
            
    