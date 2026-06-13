class Service {
    Somar(num1, num2) {

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar apenas números");
        }

        if(num1 == null || num2 == null){
            throw new Error("Envie todos os campos")
        }

        return num1 + num2;
    }

    Subtrair(num1, num2) {

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar apenas números");
        }

        if(num1 == null || num2 == null){
            throw new Error("Envie todos os campos")
        }

        return num1 - num2;
    }

    Multiplicar(num1, num2) {

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar apenas números");
        }

        if(num1 == null || num2 == null){
            throw new Error("Envie todos os campos")
        }

        return num1 * num2;
    }

    Dividir(num1, num2) {

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Informar apenas números");
        }

        if(num1 == null || num2 == null){
            throw new Error("Envie todos os campos")
        }

        return num1 / num2;
    }
}

export default new Service()