//tire un trait sur un todo
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function () {
    $(this).parent().fadeOut(500, function () {
       var IdGetter = $(this).attr('id');
        $(this).remove();
        todos.splice(IdGetter.slice(-1), 1);
        localStorage.setItem("todos", todos);
    });
    event.stopPropagation;
});

let todos = localStorage.getItem("todos") || [];
if(typeof todos == "string") 
    todos = todos.split(',');

updateList(todos);

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        if(todoText.length < 1) return;
        todos.push(todoText);
        localStorage.setItem("todos", todos);
        $(this).val("");
        updateList(todos);
    }
});
$("#plus").click(function () {
    $("input[type='text']").fadeToggle();
});

function updateList(arr){
    $("ul").html("");
    for(i = 0; i < arr.length; i++){
        $("ul").append("<li id='todo"+i+"'><span><i class='fas fa-trash'></i></span> " + arr[i] + "</li>")
    };
}
