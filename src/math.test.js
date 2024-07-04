// Importation des fonctions mathématiques
import { add, subtract, multiply, divide } from './math.js';

// Définition des tests
describe('Math functions', () => {

    // Test pour l'addition
    test('should add two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });

    // Test pour la soustraction
    test('should subtract two numbers correctly', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    // Test pour la multiplication
    test('should multiply two numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    // Test pour la division
    test('should divide two numbers correctly', () => {
        expect(divide(6, 3)).toBe(2);
    });

    // Test pour la division par zéro
    test('should throw an error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow('Division by zero');
    });
});
