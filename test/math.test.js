describe('Math functions', () => {
    let expect;
    let add, subtract, multiply, divide;

    before(async () => {
        // Utilisation d'importations dynamiques pour chai et les fonctions mathématiques
        ({ expect } = await import('chai'));
        ({ add, subtract, multiply, divide } = await import('../math.js'));
    });

    it('should add two numbers correctly', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should subtract two numbers correctly', () => {
        expect(subtract(5, 3)).to.equal(2);
    });

    it('should multiply two numbers correctly', () => {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('should divide two numbers correctly', () => {
        expect(divide(6, 3)).to.equal(2);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(6, 0)).to.throw('Division by zero');
    });
});
