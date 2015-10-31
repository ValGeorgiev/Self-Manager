var userController = function(){

    function login(context){
        templates.get('login')
            .then(function(template){
                context.$element().html(template());

                //attach events
                $('#btn-login').on('click',function(){
                    var user = {
                        username: $('#tb-username-login').val(),
                        password: $('#tb-pass-login').val()
                    };
                    data.users.login(user)
                        .then(function(){
                            toastr.success('User logged in');
                            context.redirect('#/todos');
                        });
                });
            });
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
                            toastr.success('User register');
                            context.redirect('#/todos');
                        });
                });
            });
    }

    return{
        login: login,
        register: register
    };
}();