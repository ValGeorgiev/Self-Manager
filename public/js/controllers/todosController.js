var todosController = function(){

    function all(context){
        var todos;
        data.todos.get()
            .then(function(resTodos){
               todos = resTodos.result;
                console.log(todos);
                return templates.get('todos');
            })
            .then(function(template){
               context.$element().html(template(todos));
            });
    }
    function add(context){
        templates.get('todo-add')
            .then(function(template){
                context.$element().html(template());


                $('#btn-todo-add').on('click', function(){
                   var todo = {
                     text: $('#tb-todo-text').val(),
                       category: $('#tb-todo-category').val()
                   };
                    data.todos.add(todo)
                       .then(function(){
                            toastr.success('TODO ' + todo.text +  ' added!');
                            context.redirect('#/todos');
                       });
                });
                return data.categories.get();
            }).then(function(categories){
               $('#tb-todo-category').autocomplete({
                   source: categories.result
               });
            });
    }

    return{
        all: all,
        add: add
    };
}();