var data = function(){

    function register(user){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/users';

            var reqUser = {
                username: user.username,
                passhash: CryptoJS.SHA1(user.password).toString()
            };

            $.ajax(url,{
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
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