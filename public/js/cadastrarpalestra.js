
var tituloP = document.getElementById('tituloP');
var nomeP = document.getElementById('nomeP');
var horaP = document.getElementById('horaP');
var dataP = document.getElementById('dataP');
var localP = document.getElementById('localP');
var button = document.getElementById('button');

function validate (){
	if (tituloP.value === "") { return false; }
	if (nomeP.value === "") { return false; }
	if (horaP.value === "") { return false; }
	if (dataP.value === "") { return false; }
	if (localP.value === "") { return false; }

	return true;
}

function reset() {
	tituloP.value = "";
	nomeP.value = "";
	horaP.value = "";
	dataP.value = "";
	localP.value = "";
}

function createPalestra(tituloP, nomeP, horaP, dataP, localP, idUser) {
	
	if (validate()) {
		var data = {
			tituloP: tituloP,
			nomeP: nomeP,
			horaP: horaP,
			dataP: dataP,
			localP: localP,
			idUser: idUser
		};

		firebase.database().ref().child('palestra').push(data);
		alert('Palestra cadastrada com sucesso!');
		reset();
	} else {
		alert('Há campos em branco, por favor revise !');
	}
}

button.addEventListener('click', function() {
	var teste = localStorage.getItem('firebase:authUser:AIzaSyAg1yJLHXnHFrI7pBWneBps-9Xkis_b_X4:[DEFAULT]');

	if(teste){
		var convert = JSON.parse(teste);
		createPalestra(tituloP.value, nomeP.value, horaP.value, dataP.value, localP.value, Object.values(convert)[0]);
	}
});