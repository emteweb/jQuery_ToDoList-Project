/* $("li").on("click", function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
        })
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
}); */

$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var toDoText = ($(this).val());
        $("ul").append("<li><span> X </span>" + toDoText + "</li>");
        $(this).val("");
    }
})