class Atleta {
  constructor(nome,idade,peso,altura,notas) {
    this.nome = nome;  
    this.idade = idade;  
    this.peso = peso;  
    this.altura = altura;  
    this.notas = notas;  
  }



calculaCategoria() {
  let categoria = '';
  if(this.idade >= 9 && this.idade <= 11) {
    return categoria = `Infantil`;
  } else if (this.idade >= 12 && this.idade <= 13) {
    return categoria = `Juvenil`;
  } else if (this.idade >= 14 && this.idade <= 15) {
    return categoria = `Intermediário`;
  } else if (this.idade >= 16 && this.idade <= 30) {
    return categoria = `Adulto`;
  } else {
    return categoria = `Sem categoria`;
  }
};

calculaIMC() {
  let imc = 0;
  imc = this.peso / (this.altura * this.altura);
  return imc.toFixed(2);
};

calculaMediaValida() {
  let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
        soma = soma + this.notas[i];
    }
    return soma / this.notas.length;
};

obtemNomeAtleta() {
  return this.nome;
};

obtemIdadeAtleta() {
  return this.idade;
};

obtemPesoAtleta() {
  return this.peso;
};

obtemNotasAtleta() {
  return this.notas;
};

obtemCategoria() {
  return this.calculaCategoria();
};

obtemIMC() {
  return this.calculaIMC();
};

obtemMediaValida() {
  return this.calculaMediaValida();
};

retornaDados() {
  console.log("------------------------------------");
  console.log(`Nome: ${this.obtemNomeAtleta()}`);
  console.log(`Idade: ${this.obtemIdadeAtleta()}`);
  console.log(`Peso: ${this.obtemPesoAtleta()}`);
  console.log(`Altura: ${this.altura}`);
  console.log(`Notas: ${this.obtemNotasAtleta()}`);
  console.log(`Categoria: ${this.obtemCategoria()}`);
  console.log(`IMC: ${this.obtemIMC()}`);
  console.log(`Média válida: ${this.obtemMediaValida()}`);
  console.log("------------------------------------");
};
}

const atleta = new Atleta("Cesar Abascal",
  30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]);

atleta.retornaDados();

