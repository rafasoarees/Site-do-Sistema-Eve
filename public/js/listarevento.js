
var table = document.getElementById("minhaTabela");
var textoTeste = document.getElementById('textoTeste');
var teste = localStorage.getItem('firebase:authUser:AIzaSyAg1yJLHXnHFrI7pBWneBps-9Xkis_b_X4:[DEFAULT]');
var convert = JSON.parse(teste);
var ref = firebase.database().ref("/evento/");
ref.orderByChild("idUser").equalTo(Object.values(convert)[0]).on("child_added", function(snapshot) {
	// console.log(snapshot.val().nome);
	// textoTeste.innerText = 'Bem Vindo(a), ' + snapshot.val().name + "!";
	// snapshot.forEach(function (item) {
		  var numOfRows = table.rows.length;
		  var numOfCols = table.rows[numOfRows-1].cells.length;
		  var newRow = table.insertRow(numOfRows);
		  // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(0);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().Image_Title;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(1);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().dataInicio;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(2);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().dataFim;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(3);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().end;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(4);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().estado;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(5);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().cidade;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(6);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().telefone;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(7);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().site;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(8);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().email;
          // Insere uma coluna na nova linha 
          newCell = newRow.insertCell(9);
          // Insere um conteúdo na coluna
          newCell.innerHTML = snapshot.val().Image_Description;
    

	// });
});

