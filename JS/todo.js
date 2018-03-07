$(function () {
    var $aux;


    //funcao delete
    function deleteTarefa() {
        $(this).parent('.tarefa-item').unbind('click').hide('slow', function () {
            $(this).remove();
        });
    }


    //funcao add tarefa
    function addTarefa(text) {
        var $tarefa = $("<div />")
            .addClass("tarefa-item")
            .append($("<div />")
                .addClass("tarefa-texto")
                .text(text))
            .append($("<div />")
                .addClass("tarefa-delete"))
            .append($("<div />")
                .addClass("clear"));

        $("#tarefa-list").append($tarefa);
        $(".tarefa-delete").click(deleteTarefa);
        $(".tarefa-item").click(editarTarefa);
    }


    function ontarefa(event) {
        if (event.which === 13) {
            addTarefa($("#tarefa").val());
            $("#tarefa").val("");
        }

    }

    function keydownTarefa(event) {
        if (event.which === 13) {
            salvarTarefa($aux);
            $aux = undefined;
        }
    }



    //funcao editar
    function editarTarefa() {

        if (!$(this).is($aux)) {

            if ($aux !== undefined) {
                salvarTarefa($aux);
            }
            $aux = $(this);



            var text = $aux.children('.tarefa-texto').text();
            var html = "<input type='text' class='tarefa-edit' value='" + text + "'>";

            $aux.html(html);
            $(".tarefa-edit").keydown(keydownTarefa);
        }
    }



    function salvarTarefa($tarefa) {
        var text = $tarefa.children('.tarefa-edit').val();

        $tarefa.empty();

        $tarefa.append("<div class='tarefa-texto'>" + text + "</div>").append("<div class='tarefa-delete'></div>").append("<div class='clear'></div>");

        $('.tarefa-delete').click(deleteTarefa);
        $tarefa.click(editarTarefa);
    }





    $('.tarefa-delete').click(deleteTarefa);
    $('.tarefa-item').click(editarTarefa);
    $("#tarefa").keydown(ontarefa);

});
