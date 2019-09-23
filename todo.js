$("ul").on("click", "li", function(){
    $(this).toggleClass("completed"); 
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    
});

 $("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'> </i></span> " + todoText + "</li>");
        $(this).val("");
    }
 });

 $(".border").on("click", function(){
    $(this).toggleClass("border");
 });

 $(".fa-clipboard-list").click(function(){
    $("input[type='text']").fadeToggle();
 });

 