 function deslogar() {
            //Some code
                var teste = localStorage.getItem('firebase:authUser:AIzaSyAg1yJLHXnHFrI7pBWneBps-9Xkis_b_X4:[DEFAULT]');
                if(teste){
                    firebase
                    .auth()
                    .signOut()
                    .then(function () {
                        // displayname.innerText = 'Você não esta autentidado!';
                        alert('Você se deslogou');
                        window.location.replace("usuario.html");
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
                }else{
                    alert('Ninguem esta logado');
                }
}

var teste = localStorage.getItem('firebase:authUser:AIzaSyAg1yJLHXnHFrI7pBWneBps-9Xkis_b_X4:[DEFAULT]');
if(teste){
    var convert = JSON.parse(teste);
    var ref = firebase.database().ref("usuarios");
                    // ref.orderByChild("idUser").equalTo(25).on("child_added", function(snapshot) {
                      // console.log(snapshot.key);
                    // });
}else{
    window.location.replace("login.html");
}