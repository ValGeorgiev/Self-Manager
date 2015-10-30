(function(){

    var sammyApp = Sammy('#content', function(){

        this.get('#/', function(){
            this.redirect('#/home')
        });
        this.get('#/home', homeController.all);
        this.get('#/login', userController.login);
        this.get('#/register', userController.register);

        this.get('#/todos', todosController.all);

        this.get('#/todos/add', todosController.add );

    });


    $(function(){
        sammyApp.run('#/');


        $.ajax('api/categories', {
            method: 'GET',
            contentType: 'application/json',
            headers: {
                'x-auth-key': localStorage.getItem('SPECIAL-AUTHENTICATION-KEY')
            },
            success:function(categories){
                toastr.info(JSON.stringify(categories));
            }

        })
    })
}());