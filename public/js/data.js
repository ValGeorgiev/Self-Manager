var data = function(){

    function register(user){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/users';
            $.ajax(url,{
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(user),
                success: function(res){
                    resolve(res);
                }
            });
        });
        return promise;
    }

    function login(user){

    }


    return{
        users: {
            register: register,
            login : login
        }
    };

}();