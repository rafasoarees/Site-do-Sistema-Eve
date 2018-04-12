var nomeM = document.getElementById('nomeM');
var periodoMI = document.getElementById('periodoMI');
var periodoMF = document.getElementById('periodoMF');
var horaMI = document.getElementById('horaMI');
var horaMF = document.getElementById('horaMF');
var instrutorM = document.getElementById('instrutorM');
var localM = document.getElementById('localM');
var button = document.getElementById('button');


function validate (){
	if (nomeM.value === "") { return false; }
	if (periodoMI.value === "") { return false; }
	if (periodoMF.value === "") { return false; }
	if (horaMI.value === "") { return false; }
	if (horaMF.value === "") { return false; }
	if (instrutorM.value === "") { return false; }
	if (localM.value === "") { return false; }
	
	return true;
}

function reset() {
	nomeM.value = "";
	periodoMI.value = "";
	periodoMF.value = "";
	horaMI.value = "";
	horaMF.value = "";
	instrutorM.value = "";
	localM.value="";
}

function createMinicurso(nomeM, periodoMI,periodoMF, horaMI, horaMF, instrutorM, localM, idUser) {

	if (validate()) {
		var data = {
			nomeM: nomeM,
			periodoMI: periodoMI,
			periodoMF: periodoMF,
			horaMI: horaMI,
			horaMF: horaMF,
			instrutorM: instrutorM,
			localM: localM,
			idUser: idUser
		};

		firebase.database().ref().child('minicurso').push(data);
		alert('Minicurso cadastrada com sucesso!');
		reset();
	} else {
		alert('Há campos em branco, por favor revise !');
	}
}

button.addEventListener('click', function() {
	var teste = localStorage.getItem('firebase:authUser:AIzaSyAg1yJLHXnHFrI7pBWneBps-9Xkis_b_X4:[DEFAULT]');

	if(teste){
		var convert = JSON.parse(teste);
		createMinicurso(nomeM.value, periodoMI.value,periodoMF.value, horaMI.value,horaMF.value, instrutorM.value, localM.value, Object.values(convert)[0]);
	}
});