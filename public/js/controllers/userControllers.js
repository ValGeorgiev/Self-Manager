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
                $('#btn-login').on('click',function(){
                    var user = {
                        username: $('#tb-username').val(),
                        password: $('#tb-pass').val()
                    };
                    data.users.login(user)
                        .then(function(){
                            toastr.success('User logged in');
                            context.redirect('#/');
                        });
                });
            });


    }

    return{
        login: login,
        register: register
    };
}();