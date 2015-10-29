var userController = function(){

    function login(context){

    }
    function register(context){
        templates.get('register')
            .then(function(template){
                context.$element().html(template());

                //attach events
                $('#btn-register').on('click',function(){
                    var user = {
                        username: $('#tb-username').val(),
                        password: $('#tb-pass').val()
                    };
                    data.users.register(user)
                        .then(function(){
                            console.log("User register");
                        });
                });
            });


    }

    return{
        login: login,
        register: register
    };
}();