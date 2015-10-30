var todosController = function(){

    function all(context){
        var todos;
        data.todos.get()
            .then(function(resTodos){
               todos = resTodos;
                console.log(todos);
            //    return templates.get('todos');
            //})
            //.then(function(template){
            //   context.$element().html(template(todos));
            });
    }
    function add(context){

    }

    return{
        all: all,
        add: add
    };
}();