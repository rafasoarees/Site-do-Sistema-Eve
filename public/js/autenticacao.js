var authEmailPassButton = document.getElementById('btnLogin');
var createUserButton = document.getElementById('cadastrar');

// Inputs
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('senha');

var c_matricula = document.getElementById('c_matricula');
var c_email = document.getElementById('c_email');
var c_c_email = document.getElementById('c_c_email');
var c_password = document.getElementById('c_password');
var c_confirm_password = document.getElementById('c_confirm_password');
var c_username = document.getElementById('c_username');
var c_telefone = document.getElementById('c_telefone');


function createUsuario(c_matricula, c_email, c_password, c_username, c_telefone, idUser) {
	var data = {
		c_matricula: c_matricula,
		c_email: c_email,
		c_password: c_password,
		c_username: c_username,
		c_telefone: c_telefone,
		idUser: idUser
	};

	firebase.database().ref().child('usuarios').push(data);var user = firebase.auth().currentUser;

		user.updateProfile({

 		 displayName: ''+c_username,
 		//displayName: 'emerson'

		}).then(function() {
  		// Update successful.
		}).catch(function(error) {
  		// An error happened.
		});

	alert('Usuário cadastrado com sucesso ');
}


createUserButton.addEventListener('click', function () {
	if ((c_email.value == c_c_email.value) && (c_password.value == c_confirm_password.value)) {
		firebase
			.auth()
			.createUserWithEmailAndPassword(c_email.value, c_password.value)
			.then(function () {

				// var teste = localStorage.getItem(JSON.parse('firebase:authUser:AIzaSyC_i4gYrqvKS-MbuSGKnduI4k4i_--rJd0:[DEFAULT]'));
				var teste = localStorage.getItem('firebase:authUser:AIzaSyAg1yJLHXnHFrI7pBWneBps-9Xkis_b_X4:[DEFAULT]');
				if (teste) {
					var convert = JSON.parse(teste);
					createUsuario(c_matricula.value, c_email.value, c_password.value, c_username.value, c_telefone.value, Object.values(convert)[0]);
				}

			})
			.catch(function (error) {
				console.error(error.code);
				console.error(error.message);
				console.error(error);
				alert('Falha ao cadastrar, verifique o erro no console. ' + c_email.value);
			});
	} else {
		alert('Os dados não conferem ' + c_c_email.value);
	}
});

// Autenticar com E-mail e Senha
authEmailPassButton.addEventListener('click', function () {
	firebase
		.auth()
		.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
		.then(function (result) {
			var user = firebase.auth().currentUser;

			user.updateProfile({
				displayName: ''+c_username.value
			}).then(function () {
				// Update successful.
			}).catch(function (error) {
				// An error happened.
			});
			//console.log(result);
			//console.log(displayName);
			window.location.replace("usuario.html");
		})
		.catch(function (error) {
			console.error(error.code);
			console.error(error.message);
			alert('Falha ao autenticar, verifique o erro no console.');
		});
});
