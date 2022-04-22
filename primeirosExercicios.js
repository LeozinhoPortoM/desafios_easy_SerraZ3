// Boleanos
// 1- Questão Boleanos
/* Declare uma variável chamada status onde ela receberá um valor booleano
qualquer. Após isso imprima Ativo caso o status verdadeiro e Desativado caso o
status seja falso. */
{
    let statos = true;
    console.log(statos === true ? 'Ativo' : `Desativado`); // If ternário
}

// 2- Questão Boleanos
/* Em um sistema de gerenciamento de clientes existem dois tipos de usuários, usuário
administrador e usuário comum. Para identificar qual o tipo de usuário está acessando
a plataforma uma variável chamada administrador foi criada. Seu valor é do tipo
booleano. Imprima na tela O usuário é administrador caso administrador seja
verdadeiro e O usuário é comum caso administrador seja falso. */
{
    let administrador = true;
    console.log(administrador ? `O usuário é administrador` : `O usuário é comum`); // If Ternario
}

// Numeros
// 1- Questão Numeros
/* Raul Seixas nasceu a 10.000 anos atrás e afirmou que não havia nada nesse mundo
que ele não saiba demais. Crie uma variável que receba a idade de um ser milenar e
imprima "Não tem nada nesse mundo que eu não saiba demais" caso sua idade seja
igual ou maior que 10.000 anos e imprima "Ainda existe muita coisa que eu não sei"
caso sua idade seja menor que 10.000 nos. */
{
    let idade = 10000;
    console.log(idade >= 10000 ? "Não tem nada nesse mundo que eu não saiba demais" : "Ainda existe muita coisa que eu não sei");
}

// 2- Questão Numeros
/* João foi comprar um rango no mercado e levou consigo R$30,00. Lá ele comprou
leite (R$ 4,50), pão (R$ 5,30) e mortadela (R$ 8,45). Crie uma variável que receberá o
valor total de João e outras 3 chamadas leite , pao e mortadela que receberá o seu
valor correspondente. Em seguida, subtraia o valor da compra do João do seu total e
imprima na tela o valor gasto para ele e em seguida o seu troco. */
{
    let total = 30.00;
    let pao = 4.50;
    let leite = 5.30;
    let mortadela = 8.45;
    let resultado = total - (pao + leite + mortadela);
    console.log(`Você gastou: ${resultado} 
Seu troco: ${total - resultado}`);
}

// 3- Questão Numeros
/* O IMC é reconhecido como padrão internacional para avaliar o grau sobrepeso e
obesidade. É cálculos dividindo o peso (em kg) pela altura (em metros) ao quadrado.
Luana deseja automatizar esse processo e pediu sua ajuda. Para isso deve criar duas
variáveis, uma para peso e outra altura. Em seguida, imprima na tela Seu IMC é:
X onde no lugar de X aparecerá o IMC da pessoa. */
{
    let peso = 74;
    let altura = 1.60;
    console.log(`Seu IMC é: ${peso / (altura * altura)}`);
}

// Fragmento
// 1- Questão Fragmento
/* Crie três variáveis (nome, sobrenome e profissão) e em seguida imprima a seguinte
frase Oi sou o NOME SOBRENOME e trabalho com PROFISSÃO ou valor das palavras em
maio pelo valor das variáveis. Para esse exercício deve usar como três formas de
declaração e concatenação de string (aspas simples, aspas duplas e template string) */
{
    let nome = "Léo ";
    let sobrenome = "Porto Maranhão";
    let profissao = "Programação";
    console.log("Oi sou o " + nome + sobrenome + ' e trabalho ' + `com ${profissao}`);
}
// 2- Questão Fragmento
/* Lucas queria saber qual de seus 15 irmãos tem o nome com a maior e menor
quantidade de letras. Para isso pediu ajuda para você criar um programa que inclua um
nome e imprima o tamanho do seu nome. */
{
    let nome = "Lucas";
    console.log(nome.length);
}

// 3- Questão Fragmento
/* Ricardo tem uma plataforma de usuários e gostaria que seus usuários tenham foto
de perfil, mas nem todos os usuários tem foto de perfil. No lugar da foto, você, como
um gênio da elaboração, decidiu por como iniciais do nome e sobrenome de cada
usuário. Para chorar variávei (nome) e imprima a duas duras e isso primera letra de
cada uma. */
{
    let nome = "Léo ";
    let sobrenome = "Porto Maranhão";
    console.log(`${nome[0]}${sobrenome[0]}`); // template String
}

// 4- Questão Fragmento
/* Seu chefe é um cara muito calmo, mas as vezes ele fica estranhamente estressado e
começa a gritar. Para zoar um pouco ele você deve criar um programa que imprima a
frase estou muito puuuuuto toda em maiusculo (maiúsculas) e em seguida ESTOU MAIS
CALMO AGORAAAA em minusculo (minúsculas). */
{
    let frasePuto = "estou muito puuuuuuto";
    let fraseCalmo = "ESTOU MAIS CALMO AGORAAAAA";
    console.log(frasePuto.toUpperCase()); // Letras em caixa alta
    console.log(fraseCalmo.toLowerCase()); // Letras em caixa baixa
}

// 5- Questão Fragmento
/* O rato roeu a roupa do rei de roma é uma frase que irrita todos os estilistas do
mundo pois eles odeiam a ideia de sua criação sendo roida. Para solucionar esse
problema você deve pegar a frase O rato roeu a roupa do rei de roma remover a
parte a roupa do rei de roma e em seguida colocar a frase uma queijada de leve e
não a roupa do rei fazendo a frase final ficar assim O rato roeu uma queijada de leve
e não a roupa do rei . Diga: busque por slice() */
{
    let frase = "O rato roeu a roupa do rei de roma";
    console.log(`O rato roeu uma queijada de leve e não ${frase.slice(12, 34)}`);
    // Utilizando replace
    console.log(frase.replace('a roupa do rei de roma', 'uma queijada de leve e não ') + frase.slice(12, 34))
}

// 6- Questão Fragmento
/* Maria Júlia tem 5 anos e esta aprendendo a contar. Para isso ela está contando o
nome do seu pai ( Ricardo Antônio Lopes Lemos Silva Júnior ) e sua mãe ( Joaquina
Pereira Freitas Oliveira Silva ). Com preguiça de conferir esse resultado e prevendo
que sua filha iria contar nome de outras pessoas Joaquina pediu a você que criasse um
programa que recebe um nome e imprime quantas letras esse nome tem. Lembre-se
você deve retirar os espaços do nome. */
{
    let pai = "Ricardo Antônio Lopes Lemos Silva Júnior";
    let mae = "Joaquina Pereira Freitas Oliveira Silva";
    console.log(mae.replace(/ /g, "").length); // Remove os espaços
    console.log(pai.replace(/ /g, "").length);
}

// Array
// 1- Qestão Array
/* Professor Marcelo com preguiça de verificar a quantidade de alunos que ele possui
pediu pra você criar um código que receba um array com a lista de nome dos alunos e
imprima a quantidade de alunos nessa lista. Você que é "mais melhor de bom" que o
previsto irá imprimir a quantidade de alunos e o primeiro e último aluno. */
{
    let alunos = ["Pedro", "João", "Ricardo", "José"];
    console.log(`A quantidades de alunos são: ${alunos.length}
O primeiro aluno: ${alunos[0]}
O último aluno: ${alunos.pop()}`);// Remove o último e guarda
}

// 2- Qestão Array
/* Existe um ranking de melhores programadores do Brasil, é uma lista com 300
pessoas. Você deve criar um programa que receba um array com o nome de pessoas e
mostrar somente um array com as 3 primeiras posições. Usar splice. */
{
    let programadores = ["Matheus", "Caio", "Guilherme", "Darcio", "Guilherme", "Ruan", "Thiago"];
    console.log(programadores.splice(0, 3)); // Primeiro parâmetro indice, segundo quantidade de elementos
}

// 3- Qestão Array
/* Você foi designado como gerente do Super Mercado Paçoquinha, como primeiro
feito você deve criar um programa para o caixa. O programa deve imprimir uma lista
com os produtos, mas você deve simular como se fosse um caixa, ou seja, adicionar o
nome de cada um dos produtos um por um. Crie a variável caixa que será um array
vazio e em seguida adicione 5 produtos, um por um, o final do array. Dica: buscar
pesquisar por push. */
{
    let caixa = [];
    caixa.push("borracha");
    caixa.push("lápis");
    caixa.push("apontador");
    caixa.push("livro");
    caixa.push("caderno");
    console.log(caixa)
}

// 4- Qestão Array
/* O gerente do Super Mercado Paçoquinha adorou o programa que você fez acima,
porém dele deparou com um probleminha. Ele acabou atendendo um cliente que
queria alterar o primeiro produto por outro mas seu programa não conseguia fazer
isso. Então você como o melhor gerente do Brasil decidiu fazer essa alteração. Para isso
você deve retirar o primeiro elemento do array e depois por um novo elemento no
inicio do array. Retire do array a baixo o Pão e adicione Cuscuz . Dica: Busque por
shift e unshift. */
{
    let caixa = ["Pão", "Mortandela", "Leite", "Ovo", "Manteiga"];
    caixa.shift(); // retira o primeiro elemento do array
    caixa.unshift("Cuscuz"); // Acrescenta ao primeiro indice do array
    console.log(caixa);
}

// 5- Qestão Array
/* Você recebeu a proposta multimilionária de atualizar o sistema do Banco do Brasil.
Quando você estava atualizando as datas de movimentação de dinheiro percebeu que
as datas eram armazenadas da seguinte forma: let data = [10, 05, 2021] onde a
primeira posição era o dia, depois o mês e a ultima o ano. Então você deve alterar de
array para string e pondo no seguinte formato: let data = "10/05/2021" para
melhorar o banco e virar milhonário. Dica: Busque por join. */
{
    let data = [10, 05, 2021];
    console.log(data.join("/"));
}

// 6- Qestão Array
/* A escolinha do Professor Raimundo decidiu automatizar a entrada de alunos.
Sempre que um aluno entrar na escola ele deve digitar seu nome e aparecerá na tela o
número dele na lista. Para isso você recebeu a lista de alunos: 

let alunos = ["Pedro", "Felipe", "Ana Cláudia", "Luiza", "Mariana"];

Agora com a lista crie um código que verifique se o aluno existe na lista (caso o aluno
exista imprima "Aluno existe" se não "Aluno inexistente") e em seguida, caso exista,
deve imprimir a posição dele na lista. Dica: Buscar por includes , indexOf e
lastIndexOf. */
{
    let alunos = ["Pedro", "Felipe", "Ana Cláudia", "Luiza", "Mariana"];
    if (alunos.indexOf("Luiza") != -1) {
        console.log(`Aluno existe e seu indice é : ${alunos.indexOf("Luiza")}`)
        console.log()
    } else {
        console.log("Aluno inexistente")
    }
}

// 7- Qestão Array
/* O Super Mercado Paçoquinha decidiu melhorar novamente seu sistema de caixa.
Dessa vez ele quer substitui qualquer elemento do caixa em qualquer posição. Na lista
abaixo você deve buscar por "Leite" e substituir ele por "Cuscuz" e depois substituir
"Ovo" por "Biscoito". Para isso você deve criar uma variável chamada buscarPor que
irá receber "Cuscuz" e em seguida pesquisar se a variável buscarPor existe no array. Se
existir pegue a posição dela e altere essa posição pelo valor de buscarPor , se não
imprima "Esse produto não existe na lista". Em seguida repita o processo trocando
"Ovo" por "Biscoito". Dica: Buscar por includes , indexOf e lastIndexOf. */
{
    let caixa = ["Pão", "Mortandela", "Leite", "Ovo", "Manteiga"];
    let buscarPor = "Cuscuz";
    if (caixa.indexOf(buscarPor) != -1) {
        caixa[caixa.indexOf("Leite")] = "Cuscuz"
    } else {
        console.log("Esse produto não existe na lista");
    }
    caixa[caixa.indexOf("Ovo")] = "Biscoito";
    console.log(caixa);
}

// Objeto Literal
// 1- Qestão Objeto Literal
/* Luiz estava estudando programação. Ele criou um array onde armazenava,
respectivamente em cada posição, o nome, sobrenome, idade, altura e profissão de
uma pessoa. Um tempo depois ele aprendeu que existem objetos literais no JS e
decidiu passar o array para um sintaxe de objeto. Passe o array abaixo para a sintaxe de
objeto. */
{
    let pessoa = {
        nome: "Roberto Carlos",
        sobrenome: "Braga",
        idade: 134,
        altura: 1.70,
        profussao: "Cantor"
    };
}

// 2- Qestão Objeto Literal
/* O Super Mercado Paçoquinha pediu por uma nova melhoria no seu projetinho.
Dessa vez você tem que além de armazenar em uma lista o nome do produto deve
armazenar o preço e a data de compra dele. Crie uma lista com 4 produtos, onde cada
um deles deve ter o nome, data de compra e o preço. */
{
    let produto = [
        {
            nome: "Borracha",
            dataDeCompra: "10/10/2022",
            preco: 2.90
        },
        {
            nome: "Lápis",
            dataDeCompra: "05/10/2022",
            preco: 1.90
        },
        {
            nome: "Caderno",
            dataDeCompra: "09/10/2022",
            preco: 10.90
        },
        {
            nome: "Livro",
            dataDeCompra: "11/10/2022",
            preco: 22.90
        }
    ]
}

// 3- Qestão Objeto Literal
/* No seu trabalho na Google foi lhe dado a missão de alterar o dado do usuário de
CEO da empresa. Atualmente os dados dele está como no código abaixo. Você deve
alterar o endereço e cadastrar a altura do CEO na variável abaixo. Altere a rua para Rua
dos Bobos e o número para 0 e adicione a altura de 1.56 . */
{
    let ceoGoogle = {
        nome: "Sundar",
        sobrenome: "Pichai",
        cargo: "CEO",
        rua: "Rua Microsoft",
        bairro: "Google",
        numero: 123
    }
    ceoGoogle.rua = "Rua dos Bobos número 0";
    ceoGoogle.altura = 1.56;
    console.log(ceoGoogle);
}

// 4- Qestão Objeto Literal
/* Você deseja conhecer novas formas de acessa objetos. Tente acessa o objeto acima
de uma forma diferente. Para isso você deve criar uma variável que receberá uma string
que será o valor de uma das chaves. Em seguida use essa variável para acessar um valor
do objeto acima. Depois altere o valor da variável para outra chave e rode seu código
novamente! */
{
    let ceoGoogle = {
        nome: "Sundar",
        sobrenome: "Pichai",
        cargo: "CEO",
        rua: "Rua Microsoft",
        bairro: "Google",
        numero: 123
    }
    let teste = "sobrenome"
    console.log(ceoGoogle[teste]);
}

// 5- Qestão Objeto Literal
/* Baseado no exercíco acima, reescreva o código abaixo para acessar o valor
imprimesso através de variável, ou seja, não use o artifício do . , acesse tudo através
de variáveis. */
{
    const produto = {
        info: {
            nome: "Camisa",
            descricao: "Camisa mó da hora",
            valor: 3.99
        },
        categoria: {
            nome: "Roupa",
            descricao: "Aqui tem todo tipo de roupa"
        },
        quantidade: 5,
        criado_em: "10/10/2013"
    }
    let teste = "descricao"
    console.log(produto.categoria);
    console.log(produto.info[teste]);
    console.log(produto.info.nome);
}

// 6- Qestão Objeto Literal
/* Na empresa onde você trabalha existe um sistema que gerencia os funcionários.
Todo funcionário possui os dados pessoais (nome, sobrenome, idade), endereço (rua,
numero, bairro) e cargo. Você deve criar um array chamado funcionarios com 3
funcionários, cada posição do array será um funcionário, e cada um deles deve ser um
objeto. Em cada um dos funcionários deve contendo a chave dadosPessoais (com os
valores dos dados pessoais acima), endereco (com os valores do endereço acima) e o
cargo. Imprima a variável funcionários e depois imprima o valor da posição 2. */
{
    const funcionarios = [
        {
            chave: 0001,
            nome: "José",
            sobrenome: "Carlos",
            idade: 23,
            endereco:
            {
                rua: "Rua dos bobos",
                numero: 18,
                bairro: "Vale Quem Tem"
            },
            cargo: "eletricista"
        },
        {
            chave: 0002,
            nome: "Léo",
            sobrenome: "Porto",
            idade: 23,
            endereco:
            {
                rua: "Rua Francisco Mendes",
                numero: 666,
                bairro: "Cabral"
            },
            cargo: "programador"
        },
        {
            chave: 0003,
            nome: "Emanoel",
            sobrenome: "Carvalho",
            idade: 23,
            endereco:
            {
                rua: "Rua das Orquídeas",
                numero: 305,
                bairro: "Porenquanto"
            }
            ,
            cargo: "Médico"
        }
    ]
    console.log(funcionarios);
    console.log(funcionarios[1]);
}

// Condicionais
// 1- Questão Condicionais
/* Você possui uma casa de festa para maiores de 18 anos. Crie uma variável chamada
idade e imprima para maiores de 18 Pode entrar! e para menores Pode entrar não,
seu de menor! */
{
    let idade = 19;
    console.log(idade > 18 ? "Pode entrar!" : "Pode entrar não, seu de menor!");
}

// 2- Questão Condicionais
/* Seu chefe possui um coração bom e decidiu dar aumento no salário de todos os
funcionário. Ele pediu para você adicionar R$200,00 aos funcionários que possuem
mais de 18 anos e R$500,00 para que tem mais de 45 anos. Adicione esse valor no
salários dos dois funcionários a baixo usando a estrutura fornecida. */
{
    let funcionario1 = {
        nome: "Maria Silva",
        idade: 54,
        salario: 1700.50
    }
    let funcionario2 = {
        nome: "Roberto Carlos",
        idade: 23,
        salario: 1400.70
    }
    if (funcionario1.idade > 18 && funcionario1.idade < 45) {
        console.log(funcionario1.salario = funcionario1.salario + 200);
    } else {
        console.log(funcionario1.salario = funcionario1.salario + 500);
    }
    if (funcionario2.idade > 18 && funcionario2.idade < 45) {
        console.log(funcionario2.salario = funcionario2.salario + 200);
    } else {
        console.log(funcionario1.salario = funcionario1.salario + 500);
    }
}

// 3- Questão Condicionais
/* Seu gerente de projetos deu para você os objetos abaixo com o modelos de
funcionário e pediu para você imprimir O funcionário é veterano caso o funcionário
possua idade entre 35 e 50 anos e receba mais de R$ 2000,00 ou tenha 10 anos de
experiencia e imprima O funcionário é novato caso o funcionário tenha entre 18 e 35
anos e receba menos de R$ 1700,00 ou tenha menos de 5 anos de experiência. */
{
    // Saída esperada: O funcionário é veterano
    const funcionario1 = {
        nome: "Luana Souza",
        idade: 40,
        anosDeXP: 14,
        salario: 3050.20
    }
    // Saída esperada: O funcionário é novato
    const funcionario2 = {
        nome: "Bruce Wayne",
        idade: 36,
        anosDeXP: 4, // Aqui tinha 6 anos
        salario: 1900.50
    }
    // Saída esperada: O funcionário é novato
    const funcionario3 = {
        nome: "Luan Santana",
        idade: 29,
        anosDeXP: 10,
        salario: 3000.50
    }
    // Saída esperada: O funcionário é novato
    const funcionario4 = {
        nome: "Peter Parker",
        idade: 25,
        anosDeXP: 5,
        salario: 2100
    }
    // Saída esperada: O funcionário é veterano
    const funcionario5 = {
        nome: "Steve Rogers",
        idade: 25,
        anosDeXP: 10,
        salario: 3050.20
    }
    // Funcionario 1
    if ((funcionario1.idade > 35 && funcionario1.idade < 50 && funcionario1.salario > 2000) || funcionario1.anosDeXP >= 10) {
        console.log(`O funcionario 1 é veterano / ${funcionario1.idade} / ${funcionario1.salario} / ${funcionario1.anosDeXP}`)
    } else if ((funcionario1.idade > 18 && funcionario1.idade < 35 && funcionario1.salario < 1700) || funcionario1.anosDeXP <= 5) {
        console.log(`O funcionario 1 é novato / ${funcionario1.idade} / ${funcionario1.salario} / ${funcionario1.anosDeXP}`)
    }

    // Funcionario 2
    if ((funcionario2.idade > 35 && funcionario2.idade < 50 && funcionario2.salario > 2000) || funcionario2.anosDeXP >= 10) {
        console.log(`O funcionario 2 é veterano / ${funcionario2.idade} / ${funcionario2.salario} / ${funcionario2.anosDeXP}`)
    } else if ((funcionario2.idade > 18 && funcionario2.idade < 35 && funcionario2.salario < 1700) || funcionario2.anosDeXP <= 5) {
        console.log(`O funcionario 2 é novato / ${funcionario2.idade} / ${funcionario2.salario} / ${funcionario2.anosDeXP}`)
    }

    // Funcionario 3
    if ((funcionario3.idade > 35 && funcionario3.idade < 50 && funcionario3.salario > 2000) || funcionario3.anosDeXP >= 10) {
        console.log(`O funcionario 3 é veterano / ${funcionario3.idade} / ${funcionario3.salario} / ${funcionario3.anosDeXP}`)
    } else if ((funcionario3.idade > 18 && funcionario3.idade < 35 && funcionario3.salario < 1700) || funcionario3.anosDeXP <= 5) {
        console.log(`O funcionario 3 é novato / ${funcionario3.idade} / ${funcionario3.salario} / ${funcionario3.anosDeXP}`)
    }

    // Funcionario 4
    if ((funcionario4.idade > 35 && funcionario4.idade < 50 && funcionario4.salario > 2000) || funcionario4.anosDeXP >= 10) {
        console.log(`O funcionario 4 é veterano / ${funcionario4.idade} / ${funcionario4.salario} / ${funcionario4.anosDeXP}`)
    } else if ((funcionario4.idade > 18 && funcionario4.idade < 35 && funcionario4.salario < 1700) || funcionario4.anosDeXP <= 5) {
        console.log(`O funcionario 4 é novato / ${funcionario4.idade} / ${funcionario4.salario} / ${funcionario4.anosDeXP}`)
    }

    // Funcionario 5
    if ((funcionario5.idade > 35 && funcionario5.idade < 50 && funcionario5.salario > 2000) || funcionario5.anosDeXP >= 10) {
        console.log(`O funcionario 5 é veterano / ${funcionario5.idade} / ${funcionario5.salario} / ${funcionario5.anosDeXP}`)
    } else if ((funcionario5.idade > 18 && funcionario5.idade < 35 && funcionario5.salario < 1700) || funcionario5.anosDeXP <= 5) {
        console.log(`O funcionario 5 é novato / ${funcionario5.idade} / ${funcionario5.salario} / ${funcionario5.anosDeXP}`)
    }
}

// 4- Questão Condicionais
/* Crie uma variável chamada hora onde ela receberá o valor da hora atual (inteiro) e
diga se ela está no período da manha (0h a 11h), tarde (12h a 17h) ou noite (18h a 23h). */
{
    const horas = new Date();

    if (horas.getHours() >= 0 && horas.getHours() <= 11) {
        console.log(`Você está no período da manhã`);
    } else if (horas.getHours() >= 12 && horas.getHours() <= 17) {
        console.log(`Você está no período da tarde`);
    } else if (horas.getHours() >= 18 && horas.getHours() <= 23) {
        console.log(`Você está no período da noite`)
    }
}

// 5- Questão Condicionais
/* No seu sistema ecommerce existem 3 tipos de usuários, silver , gold e diamond .
Crie uma variável e atribua um dos 3 valores e verifique qual o tipo de usuário e
imprima, respectivamente, Usuário simples: Silver , Usuário intermediário: Gold ou
Usuário avançado: Diamond . Faça esse exercício com ifelse e depois transcreva para
switch. */
{
    const usuarios = "gold";
    if (usuarios === "silver") {
        console.log("Usuário simples: Silver");
    } else if (usuarios === "gold") {
        console.log("Usuário intermediário: Gold");
    } else if (usuarios === "diamond") {
        console.log("Usuário avançado: Diamond");
    }

    switch (usuarios) {
        case "silver":
            console.log("Usuário simples: Silver");
            break;
        case "gold":
            console.log("Usuário intermediário: Gold");
            break;
        case "diamond":
            console.log("Usuário avançado: Diamond");
            break;
    }
}

// 6- Questão Condicionais
/* Reescreve o códio a seguir usando if ternário. */
{
    const usuario = {
        status: true,
        idade: 18
    }
    if (usuario.status) {
        console.log("Usuário ativo")
    } else {
        console.log("Usuário desativo")
    }
    if (usuario.idade < 18) {
        console.log("Usuário menor de idade")
    } else if (usuario.idade > 18 && usuario.idade < 60) {
        console.log("Usuário adulto")
    } else {
        console.log("Usuário idoso")
    }

    usuario.status ? console.log("Usuário ativo") : console.log("Usuário desativo");

    usuario.idade < 18 ? console.log("Usuário menor de idade") : "";

    usuario.idade > 18 && usuario.idade < 60 ? console.log("Usuário adulto") : console.log("Usuário idoso");

}

// Loops
// 1- Questão Loops
/* Crie um programa que imprima 1000 números em sequência, um após o outro. */

/* {
    for (let i = 1; i <= 1000; i++) {
        console.log(i);
    }
} */

// 2- Questão Loops
/* O calculo de potência é basicamente a multiplicação de um número x por eles
mesmo y vezes. Um exemplo seria 2³ (dois elevado a três) que é a mesma coisa de
2x2x2 , o número 3 seria o expoente, o resultado seria 2x2x2=8 . Crie variaveis
chamadas numero , expoente e resultado , que receberão valores numéricos. Em
seguida, crie um loop que calcule o numero elevado ao expoente e atribua esse valor a
resultado . */
{
    let numero = 2;
    let expoente = 4;
    let resultado = 1;
    //console.log(resultado = numero ** expoente); Utiçlizando o operador de exponenciação
    //console.log(Math.pow(numero, expoente)); Utilizando função Math
    for (let i = 0; i < expoente; i++) {
        resultado = resultado * numero;
    }
    console.log(resultado)
}

// 3- Questão Loops
/* Pegue a frase hasta la vista baby e imprima cada uma das letras um após a outra
no terminal. Use o for. */
{
    let frase = "hasta la vista baby";
    for (let letra of frase) {
        console.log(letra);
    }
}

// 4- Questão Loops
/* Você pegou a lista de todos os usuários do banco de dados e decidiu verificar que
era do século XX e quem era o século XXI. Percorra o array abaixo com ForOf e
imprima Século XX para quem nasceu de 2000 para baixo e Século XXI que nasceu
depois de 2000. */
{
    const usuarios = [
        {
            nome: "Luan Santos",
            ano: 1999,
        },
        {
            nome: "Roberta",
            ano: 2002,
        },
        {
            nome: "Pedro",
            ano: 2000,
        },
        {
            nome: "Claudisney",
            ano: 1987,
        },
        {
            nome: "Renato",
            ano: 2005,
        },
        {
            nome: "Maria Juana",
            ano: 1995,
        },
        {
            nome: "Robertina",
            ano: 1976,
        },
    ];
    for (let seculo of usuarios) {
        seculo.ano <= 2000 ? console.log(`${seculo.nome} é do século XX`) : console.log(`${seculo.nome} é do século XXI`);
    }
}