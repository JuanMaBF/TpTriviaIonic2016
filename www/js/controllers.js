angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
	$scope.usrActual;
}])

.controller('loginCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {

	$scope.submitLogin = function(usr){

		firebase.database().ref().once('value').then(function(snapshot) { //Conexion con firebase
			listaUsuarios = snapshot.val();
  			$.each(listaUsuarios, function(i){ //Recorremos la lista de usuarios
				if(listaUsuarios[i].usuario == usr.usuario && listaUsuarios[i].contra == usr.pass){ 
				//Si coinciden los datos...
					$scope.$apply(function() {
        				$scope.usrActual = usr.usuario; 
    				});
    				alert("Bienvenidx " + usr.usuario);
    				return;
				}
			})
			alert("Usuario y/o contraseña incorrectos");
		});
	}
}])
   
.controller('registroCtrl',function ($scope, $stateParams) {

	$scope.pathImagen = "img/bien.png";
	//Verificar que el usuario ingresado no existe aun
	$scope.usuarioExiste = function(usrIngresado){
		firebase.database().ref().once('value').then(function(snapshot) { //Conexion con firebase
			listaUsuarios = snapshot.val();
			var pathImagen = "img/bien.png";
  			$.each(listaUsuarios, function(i){ //Recorremos la lista de usuarios
				if(listaUsuarios[i].usuario == usrIngresado){ //Si coincide alguno con el ingresado
					pathImagen = "img/mal.png"; //Se cambia a mal
				}
			})
			$scope.$apply(function() {
        		$scope.pathImagen = pathImagen; 
    		});
		});		
	}

	//Cargar el nuevo usuario
	$scope.submitReg = function(usr){
		//Verificar
		if(usr.pass1 != usr.pass2){
			alert("contras error");
			return;
		}
		$scope.usuarioExiste(usr.usuario);
		if($scope.pathImagen == "img/mal.png"){
			alert("path error");
			return;
		}
		//Cargar datos a firebase
		firebase.database().ref().push({
    		usuario: usr.usuario,
    		contra: usr.pass1
  		});
  		//Cargar usuarioActual
  		$scope.$apply(function() {
        	$scope.usrActual = usr.usuario; 
    	});
  		//Saludar
  		alert("Bienvenidx " + usr.usuario);
  		location.href = "#/trivia-menu/inicio";	
	}

})
  
.controller('triviaUTNCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {

}])
   
.controller('presentacionCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])
   
.controller('miGithubCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {


}])
   
.controller('juegoCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {


}])
 