$(document).ready(function(){
    const contactForm = $("#messageForm");

    contactForm.on("submit", function(event){
        event.preventDefault();

        const newMessage = {
            name: $("#name").val().trim(),
            message: $("#messagebox").val().trim()
        };

        if(!newMessage.name || !newMessage.message){
            return;
        }

        submitMessage(newMessage.name, newMessage.message);
    });

    function submitMessage(name, message){
        $.post("/api/posts", {
            name:name,
            message:message
        }).then(function(){
            window.location.replace("/");
        })
    }

    $("#delete").on("click", function(){
        const id = $(this).attr("data-id")
        $.ajax("/api/messages/" + id,{
            type: "DELETE"
        }).then(function(){
            window.location.reload();
        })
    })
})