//https://viacep.com.br/ws/04859090/json/
var pessoa = {
    nome: "Alex Silva",
    cpf: "123456",
    dt_nascimento: "4564",
    sexo: "5446564",
    num_carteira_hab: "121323223",
    dt_habita:"45456465465",
    num_cartao: "564565556"
}

function gerarIDdepagamentoSimplificado(){
    pessoa.nome = document.getElementById('inputnome').valor;
    pessoa.cpf = document.getElementById('inputcpf').valor;
    pessoa.dt_nascimento = document.getElementById('inputdtnascimento').valor;
    pessoa.sexo = document.getElementById('inputsexo').valor;
    pessoa.num_cartao = document.getElementById('inputCartao').valor;
    pessoa.num_carteira_hab = document.getElementById('inputHabilitacao').valor;    
    pessoa.dt_habita = document.getElementById('inputdthabilitaco').valor;

    const clienteNovo = new Cliente(pessoa)
}

class Cliente{
    constructor(pessoa){
        this.nome = pessoa.nome;
        this.cpf = pessoa.cpf;
        this.dt_nascimento = pessoa.dt_nascimento;
        this.sexo = pessoa.sexo;
        this.num_carteira_hab = pessoa.num_carteira_hab;
        this.dt_habita = pessoa.dt_habita;
        this.num_cartao = pessoa.num_cartao;
    }

    taxaSobreGenero(){
    alert(pessoa.sexo)

    }
    taxaSobreDTnascimento(){
    alert(pessoa.dt_nascimento)

    }
    taxaSobreDThabilitacao(){
    alert(pessoa.dt_habita)

    }
    
}
