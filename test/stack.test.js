class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
    
    get peek() {
        return this.items[this.top];
    }
    
    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }
}

describe('.env reading test', () => {
    require('dotenv').config({ path: 'conf/.test.env' });
    
    it('can read .env TOKEN', () => {
        // Arrange
        
        // Act
        let expected = process.env.TOKEN;
        
        // Assert
        expect(expected).toBe('[YOUR_BOT_TOKEN_HERE]');
    });
});

describe('Tests Stack', () => {
    
    let stack;
    
    beforeEach(() => {
        stack = new Stack();
    });
    
    it('is created empty', () => {
        // Arrange
        
        // Act
        
        // Assert
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
    
    it('can push to the top', () => {
        // Arrange
        
        // Act
        stack.push('a');
                
        // Assert
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('a');
        expect(stack.items).toEqual({ '0': 'a' });
    });
    
});