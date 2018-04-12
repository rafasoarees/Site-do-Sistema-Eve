var Image_Title = document.getElementById('Image_Title');
var dataInicio = document.getElementById('dataInicio');
var dataFim = document.getElementById('dataFim');
var end = document.getElementById('end');
var estado = document.getElementById('estado');
var cidade = document.getElementById('cidade');
var telefone = document.getElementById('telefone');
var site = document.getElementById('site');
var email = document.getElementById('email');
var Image_Description = document.getElementById('Image_Description');
var btnCadastrar = document.getElementById('cadastrar');

function validate (){
	if (Image_Title.value === "") { return false; }
	if (dataInicio.value === "") { return false; }
	if (dataFim.value === "") { return false; }
	if (end.value === "") { return false; }
	if (estado.value === "") { return false; }
	if (cidade.value === "") { return false; }
	if (telefone.value === "") { return false; }
	if (site.value === "") { return false; }
	if (email.value === "") { return false; }
	if (Image_Description.value === "") { return false; }
	
	return true;
}

function reset() {
	Image_Title.value = "";
	dataInicio.value = "";
	dataFim.value = "";
	end.value = "";
	estado.value = "";
	cidade.value = "";
	telefone.value = "";
	site.value = "";
	email.value = "";
	Image_Description.value = "";
}

var selectedFile = null;

$("#file").on("change", function(event){
  selectedFile = event.target.files[0];
	$("#cadastrar").show();
  window.console.log(selectedFile);
});

function uploadFile(postKey){
  	window.console.log('uploadFile');
	var filename = selectedFile.name;
	var storageRef = firebase.storage().ref('/EventImages/' + filename);
	var uploadTask = storageRef.put(selectedFile);

	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on('state_changed', function (snapshot) {
	
	}, function (error) {
		// Handle unsuccessful uploads
		window.console.log(error);
	}, function () {
		// Handle successful uploads on complete
		// For instance, get the download URL: https://firebasestorage.googleapis.com/...

		var downloadURL = uploadTask.snapshot.downloadURL;
		var up = {
			Image_URL: downloadURL
		}
		firebase.database().ref().child('/evento/' + postKey).update(up);
    	var downloadURL = uploadTask.snapshot.downloadURL;
		console.log(downloadURL);
	});
}

function createEvento(Image_Title, dataInicio, dataFim, end, estado, cidade, telefone, site, email, Image_Description, idUser) {
	if (validate()){
		var data = {
			Image_Title: Image_Title,
			dataInicio: dataInicio,
			dataFim: dataFim,
			end: end,
			estado: estado, 
			cidade: cidade,
			telefone: telefone,
			site: site,
			email: email,
			Image_Description: Image_Description,
			idUser: idUser
	};

	var postKey = firebase.database().ref().child('evento').push(data).key;
	uploadFile(postKey);
	alert('Evento cadastrado com sucesso!');
	reset();
	} else {
		alert('Há campos em branco, por favor revise !');
	}
}

	btnCadastrar.addEventListener('click', function() {
		var teste = localStorage.getItem('firebase:authUser:AIzaSyAg1yJLHXnHFrI7pBWneBps-9Xkis_b_X4:[DEFAULT]');

		if (teste) {
			var convert = JSON.parse(teste);
			createEvento(Image_Title.value, dataInicio.value, dataFim.value, end.value, estado.value, cidade.value, telefone.value, site.value, email.value,Image_Description.value, Object.values(convert)[0]);
		}
	});