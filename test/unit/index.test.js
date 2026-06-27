import { describe, it, expect } from '@jest/globals';
import Service from '../../src/services/exercicios.js';

describe("Testes para função somar", () => {

    it("CT01 - Deve somar dois numeros positivos  2 e 95, retornar 97", () => {
        const result = Service.Somar(2, 95);
        expect(result).toBe(97);
    })

    it("CT02 - Deve somar dois numeros -5 e 10, retornar 5", () => {
        const result = Service.Somar(-5, 10);
        expect(result).toBe(5);
    })

    it("CT03 - Deve somar dois numeros 10 e -5, retornar 5", () => {
        const result = Service.Somar(10, -5);
        expect(result).toBe(5);
    })

    it("CT04 - Deve somar dois numeros -5 e -10, retornar 5", () => {
        const result = Service.Somar(-5, -10);
        expect(result).toBe(-15);
    })

    it("CT05 - Deve somar dois numeros 0.5 e 1.7, retornar 2.2", () => {
        const result = Service.Somar(0.5, 1.7);
        expect(result).toBe(2.2);
    })

    it("CT06 - Deve somar uma letra 'a' e um número 1, retornar Throw", () => {
        const result = () => Service.Somar('a', 1);
        expect(result).toThrow("Informar apenas números");
    })

    it("CT07 - Deve somar um numero 1 e uma letra 'a', retornar Throw", () => {
        const result = () => Service.Somar(1, 'a');
        expect(result).toThrow("Informar apenas números");
    })

    it("CT08 - Deve somar dois numeros 0 e 1, retornar 1", () => {
        const result = Service.Somar(0, 1);
        expect(result).toBe(1);
    })

    it("CT09 - Deve somar dois numeros 1 e 0, retornar 1", () => {
        const result = Service.Somar(1, 0);
        expect(result).toBe(1);
    })

    it("CT10 - Deve somar enviando apenas o segundo número 1, retornar Throw", () => {
        const result = () => Service.Somar(null, 1);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT11 - Deve somar enviando apenas o primeiro número 1, retornar Throw", () => {
        const result = () => Service.Somar(1, null);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT12 - Deve somar sem enviar parametros, retornar Throw", () => {
        const result = () => Service.Somar(null, null);
        expect(result).toThrow("Envie todos os campos");
    })
 
})

describe("Testes para função de subtrair", () => {

    it("CT13 - Deve subtrair dois numeros 2 e 95, retornar -93", () => {
        const result = Service.Subtrair(2, 95);
        expect(result).toBe(-93);
    })

    it("CT14 - Deve subtrair dois numeros -5 e 10, retornar -15", () => {
        const result = Service.Subtrair(-5, 10);
        expect(result).toBe(-15);
    })

    it("CT15 - Deve subtrair dois numeros 10 e -5, retornar 15", () => {
        const result = Service.Subtrair(10, -5);
        expect(result).toBe(15);
    })

    it("CT16 - Deve subtrair dois numeros -5 e -10, retornar 5", () => {
        const result = Service.Subtrair(-5, -10);
        expect(result).toBe(5);
    })

    it("CT17 - Deve subtrair dois numeros 0.5 e 1.7, retornar -1.2", () => {
        const result = Service.Subtrair(0.5, 1.7);
        expect(result).toBe(-1.2);
    })

    it("CT18 - Deve subtrair dois numeros 'a' e 1, retornar Throw", () => {
        const result = () => Service.Subtrair('a', 1);
        expect(result).toThrow("Informar apenas números");
    })

    it("CT19 - Deve subtrair dois numeros 1 e 'a', retornar Throw", () => {
        const result = () => Service.Subtrair(1, 'a');
        expect(result).toThrow("Informar apenas números");
    })

    it("CT20 - Deve subtrair dois numeros 0 e 1, retornar -1", () => {
        const result = Service.Subtrair(0, 1);
        expect(result).toBe(-1);
    })

    it("CT21 - Deve subtrair dois numeros 1 e 0, retornar 1", () => {
        const result = Service.Subtrair(1, 0);
        expect(result).toBe(1);
    })

    it("CT22 - Deve subtrair enviando apenas o segundo número 1, retornar Throw", () => {
        const result = () => Service.Subtrair(null, 1);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT23 - Deve subtrair enviando apenas o primeiro número 1, retornar Throw", () => {
        const result = () => Service.Subtrair(1, null);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT24 - Deve somar sem enviar parametros, retornar Throw", () => {
        const result = () => Service.Subtrair(null, null);
        expect(result).toThrow("Envie todos os campos");
    })
})

describe("Teste para função multiplicar", () => {
    
    it("CT25 - Deve multiplicar dois numeros 2 e 95, retornar 190", () => {
        const result = Service.Multiplicar(2, 95);
        expect(result).toBe(190);
    })

    it("CT26 - Deve multiplicar dois numeros -5 e 10, retornar -50", () => {
        const result = Service.Multiplicar(-5, 10);
        expect(result).toBe(-50);
    })

    it("CT27 - Deve multiplicar dois numeros 10 e -5, retornar -50", () => {
        const result = Service.Multiplicar(10, -5);
        expect(result).toBe(-50);
    })

    it("CT28 - Deve multiplicar dois numeros -5 e -10, retornar 50", () => {
        const result = Service.Multiplicar(-5, -10);
        expect(result).toBe(50);
    })

    it("CT29 - Deve multiplicar dois numeros 0.5 e 1.7, retornar 0.85", () => {
        const result = Service.Multiplicar(0.5, 1.7);
        expect(result).toBe(0.85);
    })

    it("CT30 - Deve multiplicar dois numeros 'a' e 1, retornar Throw", () => {
        const result = () => Service.Multiplicar('a', 1);
        expect(result).toThrow("Informar apenas números");
    })

    it("CT31 - Deve multiplicar dois numeros 1 e 'a', retornar Throw", () => {
        const result = () => Service.Multiplicar(1, 'a');
        expect(result).toThrow("Informar apenas números");
    })

    it("CT32 - Deve multiplicar dois numeros 0 e 1, retornar 0", () => {
        const result = Service.Multiplicar(0, 1);
        expect(result).toBe(0);
    })

    it("CT33 - Deve multiplicar dois numeros 1 e 0, retornar 0", () => {
        const result = Service.Multiplicar(1, 0);
        expect(result).toBe(0);
    })

    it("CT34 - Deve multiplicar enviando apenas o segundo número 1, retornar Throw", () => {
        const result = () => Service.Multiplicar(null, 1);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT35 - Deve multiplicar enviando apenas o primeiro número 1, retornar Throw", () => {
        const result = () => Service.Multiplicar(1, null);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT36 - Deve multiplicar sem enviar os parametros, retornar Throw", () => {
        const result = () => Service.Multiplicar(null, null);
        expect(result).toThrow("Envie todos os campos");
    })
})

describe("Teste para função divisão", () => {
    
    it("CT37 - Deve dividir dois numeros 2 e 95, retornar 0.021052631578947368", () => {
        const result = Service.Dividir(2, 95);
        expect(result).toBe(0.021052631578947368);
    })

    it("CT38 - Deve Dividir dois numeros -5 e 10, retornar -0.5", () => {
        const result = Service.Dividir(-5, 10);
        expect(result).toBe(-0.5);
    })

    it("CT39 - Deve Dividir dois numeros 10 e -5, retornar -2", () => {
        const result = Service.Dividir(10, -5);
        expect(result).toBe(-2);
    })

    it("CT40 - Deve Dividir dois numeros -5 e -10, retornar 0.5", () => {
        const result = Service.Dividir(-5, -10);
        expect(result).toBe(0.5);
    })

    it("CT41 - Deve Dividir dois numeros 0.5 e 1.7, retornar 0.29411764705882354", () => {
        const result = Service.Dividir(0.5, 1.7);
        expect(result).toBe(0.29411764705882354);
    })

    it("CT42 - Deve Dividir dois numeros 'a' e 1, retornar Throw", () => {
        const result = () => Service.Dividir('a', 1);
        expect(result).toThrow("Informar apenas números");
    })

    it("CT43 - Deve Dividir dois numeros 1 e 'a', retornar Throw", () => {
        const result = () => Service.Dividir(1, 'a');
        expect(result).toThrow("Informar apenas números");
    })

    it("CT44 - Deve Dividir dois numeros 0 e 1, retornar 0", () => {
        const result = Service.Dividir(0, 1);
        expect(result).toBe(0);
    })

    it("CT45 - Deve Dividir dois numeros 1 e 0, retornar infinity", () => {
        const result = Service.Dividir(1, 0);
        expect(result).toBe(Infinity);
    })

    it("CT46 - Deve Dividir enviando apenas o segundo número 1, retornar Throw", () => {
        const result = () => Service.Dividir(null, 1);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT47 - Deve Dividir enviando apenas o primeiro número 1, retornar Throw", () => {
        const result = () => Service.Dividir(1, null);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT48 - Deve Dividir sem enviar os parametros, retornar Throw", () => {
        const result = () => Service.Dividir(null, null);
        expect(result).toThrow("Envie todos os campos");
    })
})

describe("Teste para função potencia", () => {
    
    it("CT49 - Deve Potenciar dois numeros 2 e 5, retornar 32", () => {
        const result = Service.Potencia(2, 5);
        expect(result).toBe(32);
    })

    it("CT50 - Deve Potenciar dois numeros -5 e 5, retornar -3125", () => {
        const result = Service.Potencia(-5, 5);
        expect(result).toBe(-3125);
    })

    it("CT51 - Deve Potenciar dois numeros 10 e -2, retornar 0.01", () => {
        const result = Service.Potencia(10, -2);
        expect(result).toBe(0.01);
    })

    it("CT52 - Deve Potenciar dois numeros -5 e -2, retornar 0.04", () => {
        const result = Service.Potencia(-5, -2);
        expect(result).toBe(0.04);
    })

    it("CT53 - Deve Potenciar dois numeros 0.5 e 2, retornar 0.25", () => {
        const result = Service.Potencia(0.5, 2);
        expect(result).toBe(0.25);
    })

    it("CT54 - Deve Potenciar dois numeros 'a' e 1, retornar Throw", () => {
        const result = () => Service.Potencia('a', 1);
        expect(result).toThrow("Informar apenas números");
    })

    it("CT55 - Deve Potenciar dois numeros 1 e 'a', retornar Throw", () => {
        const result = () => Service.Potencia(1, 'a');
        expect(result).toThrow("Informar apenas números");
    })

    it("CT56 - Deve Potenciar dois numeros 0 e 1, retornar 0", () => {
        const result = Service.Potencia(0, 1);
        expect(result).toBe(0);
    })

    it("CT57 - Deve Potenciar dois numeros 1 e 0, retornar 1", () => {
        const result = Service.Potencia(1, 0);
        expect(result).toBe(1);
    })

    it("CT58 - Deve Potenciar enviando apenas o segundo número 1, retornar Throw", () => {
        const result = () => Service.Potencia(null, 1);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT59 - Deve Potenciar enviando apenas o primeiro número 1, retornar Throw", () => {
        const result = () => Service.Potencia(1, null);
        expect(result).toThrow("Envie todos os campos");
    })

    it("CT60 - Deve Potenciar sem enviar os parametros, retornar Throw", () => {
        const result = () => Service.Potencia(null, null);
        expect(result).toThrow("Envie todos os campos");
    })
})

describe("Teste para função raiz", () => {
    
    it("CT61 - Deve fazer a raiz quadrada de 4, retornar 2", () => {
        const result = Service.Raiz(4);
        expect(result).toBe(2);
    })

    it("CT62 - Deve fazer a raiz quadrada de -9, retornar Throw", () => {
        const result = () => Service.Raiz(-9);
        expect(result).toThrow("Não é possível calcular a raiz de um número negativo");
    })

    it("CT63 - Deve fazer a raiz de 8.5, retornar 1.3416407864998738", () => {
        const result = Service.Raiz(1.8);
        expect(result).toBe(1.3416407864998738);
    })

    it("CT64 - Deve fazer a raiz quadrada de 'a', retornar Throw", () => {
        const result = () => Service.Raiz('a');
        expect(result).toThrow("Informar apenas números");
    })

    it("CT65 - Deve fazer a raiz quadrada de 0, retornar 0", () => {
        const result = Service.Raiz(0);
        expect(result).toBe(0);
    })

    it("CT66 - Deve fazer a raiz de enviando apenas o segundo número 1, retornar Throw", () => {
        const result = () => Service.Raiz(null);
        expect(result).toThrow("Envie todos os campos");
    })
})