class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    } 
}

describe('Tests Stack', () => {
    
    it('is created empty', () => {
        const stack = new Stack();
        
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
    
});