(function(){

    var sammyApp = Sammy('#content', function(){

        this.get('#/', homeController.all);

        //this.get('#/todos', todosController.all);
        //
        //this.get('#/todos/add', todosController.add );

    });


    $(function(){
        sammyApp.run('#/');
    })
}());