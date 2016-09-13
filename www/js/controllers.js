angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {

	/*LOGEO*/
	$scope.usrActual;
	if(!$scope.usrActual){
		//Direccionar loguin
		location.href = "#/login";
	}

}])

.controller('loginCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
	$scope.submitLogin = function(usr){
		//Datos del usuario
	}
}])
   
.controller('registroCtrl',function ($scope, $stateParams, $http) {

	//Verificar que el usuario ingresado no existe aun
	$scope.usuarioExiste = function(usrIngresado){
		$("#usr-existe").src = "img/bien.png";
		firebase.database().ref().once('value').then(function(snapshot) { //Conexion con firebase
			listaUsuarios = snapshot.val();
  			$.each(listaUsuarios, function(i){ //Recorremos la lista de usuarios
				if(listaUsuarios[i].usuario == usrIngresado){ //Si coincide alguno con el ingresado
					console.log(usrIngresado);
					$("#usr-existe").src = "img/bien.png";
					return;
				}
			})
			$("#usr-existe").src = "img/bien.png";
		});		
	}

	//Cargar el nuevo usuario
	$scope.submitReg = function(usr){
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
 