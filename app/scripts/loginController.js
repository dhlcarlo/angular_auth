(function(){
    'use strict';
    angular.module('zem')
    .controller('loginController', loginController);



   function loginController($auth, $location) {  
    var vm = this;
    
       
        vm.login = function () {
           
           $auth.login({"name": vm.name, "password": vm.password})
           .then(function (data) {
                console.log(data.data);
                if(data.data.success === true){
                $location.path('home');
                } else {
                    $location.path("/")
                }
  
           }).catch(function(response){
                console.log(response.data);
           });
        }

        
   }
})();