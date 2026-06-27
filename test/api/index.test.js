import app from '../../src/index.js';
import request from 'supertest';
import { describe, it, expect, afterAll } from '@jest/globals';

describe("Teste da API - Endpoint somar", () => {
    it("CT01 - POST /api/somar - dois numeros positivos", async () => {
        const body = { num1: 1, num2: 2 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(3)
    })
    
    it("CT02 - POST /api/somar - um numero negativo e um numero positivo", async () => {
        const body = { num1: -5, num2: 10 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(5)
    })
    
    it("CT03 - POST /api/somar - um numero positivo e um numero negativo", async () => {
        const body = { num1: 10, num2: -5 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(5)
    })

    it("CT04 - POST /api/somar - dois numeros com virgula", async () => {
        const body = { num1: 0.5, num2: 1.7 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(2.2)
    })

    it("CT05 - POST /api/somar - com uma letra e um numero", async () => {
        const body = { num1: 'a', num2: 1.7 };
        const response = await request(app).post("/api/somar").send(body);

        expect(response.statusCode).toBe(500)
        expect(response.body.err).toThrow("Informar apenas números")
    })
})



