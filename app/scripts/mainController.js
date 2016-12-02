(function(){
    'use strict';
    angular.module('zem')
    .controller('mainController', mainController);

   function mainController($http,$auth, $location) {  
       var vm = this;
      $http.get('http://localhost:8080').then(function(response){
                vm.info = response.data;
                console.log(vm.info);
      });

      this.Logout = function() {  
        $auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $location.path("/ruta")
        });
}

}
})();