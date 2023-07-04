class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            raise Exception("Stack is empty")

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            raise Exception("Stack is empty")

    def is_empty(self):
        return len(self.stack) == 0

    def size(self):
        return len(self.stack)
    
    # EXPECTED INSTANCE OF THE STACK

    stack = Stack()

# Push elements into the stack
stack.push(10source myenv/bin/activate
)
stack.push(20)
stack.push(30)
print("Size:", stack.size())  # Output: 3

# Peek the top element
top_element = stack.peek()
print("Top element:", top_element)  # Output: 30

# Pop an element from the stack
popped_element = stack.pop()
print("Popped element:", popped_element)  # Output: 30

# Check if the stack is empty
print("Is empty?", stack.is_empty())  # Output: False

# Pop remaining elements
stack.pop()
stack.pop()
print("Is empty?", stack.is_empty())  # Output: True