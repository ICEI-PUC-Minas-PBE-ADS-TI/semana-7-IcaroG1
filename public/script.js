// 1. Dados iniciais
let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal:"));
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido! Digite sua renda novamente:"));
}

let qtdDespesas = Number(prompt("Quantas despesas você deseja informar (1 a 5)?"));

// limitar entre 1 e 5
if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// validação
while (isNaN(qtdDespesas)) {
    qtdDespesas = Number(prompt("Digite um número válido de despesas (1 a 5):"));
}

// 2. Soma das despesas
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = Number(prompt(`Digite o valor da despesa ${i}:`));

    while (isNaN(despesa)) {
        despesa = Number(prompt(`Valor inválido! Digite novamente a despesa ${i}:`));
    }

    totalDespesas += despesa;
}

// 3. Análise
let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou!";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "Ótimo: boa margem de sobra!";
    } else {
        mensagem = "Ok: dá para melhorar a sobra.";
    }
}

// 4. Saída
let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Situação: ${mensagem}
`;

alert(resultado);
console.log(resultado);