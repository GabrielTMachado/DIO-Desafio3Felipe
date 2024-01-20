class hero{
    constructor(name, age, type, attack){
        this.name = name;
        this.agr = age;
        this.type = type;
        this.attack = attack;
    }

    atacar(classe){
        switch(classe){
            case "guerreiro":
                console.log(`o ${this.type} atacou usando ${this.attack}`) 
                break;
            case "mago":
                console.log(`o ${this.type} atacou usando ${this.attack}`)
                break;
            case "monge":
                console.log(`o ${this.type} atacou usando ${this.attack}`)
                break;
            case "ninja":
                console.log(`o ${this.type} atacou usando ${this.attack}`)
                break;
        }
    }
}

const guerreiro = new hero("azazel", 26, "guerreiro", "espadada");
const mago = new hero("adnelson", 176, "mago", "feitiço");
const monge = new hero("megan", 92, "monge", "chute");
const ninja = new hero("abner", 38, "ninja", "shuriken");

let classe = "ninja";

switch(classe){
    case "guerreiro":
         guerreiro.atacar(classe);
        break;
    case "mago":
        mago.atacar(classe);
        break;
    case "monge":
        monge.atacar(classe);
        break;
    case "ninja":
        ninja.atacar(classe);
        break;
}