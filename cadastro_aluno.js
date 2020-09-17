var nome = document.getElementById("nome").value;
var nasc = document.getElementById("nasc").value;
var ano = document.getElementById("ano").value;
var mat = document.getElementById("materia").value;

function realizarcadastro () {
	if (nome == "" || nasc == "" || ano == "" || materia == ""){
		alert("Todos os campos sao obrigatorios");
	} else {
		alert("Cadastro realizado com sucesso!");
	}
}