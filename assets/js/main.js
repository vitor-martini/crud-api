$("#add_book").submit(function(event){
    event.preventDefault();

    $.ajax({
        url: `http://localhost:3000/cadastrar-livro`,
        type: `POST`,
        data: {
            titulo: $("input[name=titulo]").val(),
            autor: $("input[name=autor]").val(),
            editora: $("input[name=editora]").val(),
            numeroPaginas: $("input[name=numeroPaginas]").val(),
        },
        success:function(response){
            if(response == 0)
                alert("Falha ao cadastrar o livro.")
            else{
                alert("Livro cadastrado com sucesso.");
                location.reload();  
            }         
        }
    })    
})

$("#update_book").submit(function(event){
    event.preventDefault();
    var ID = $("input[name=id]").val()

    $.ajax({
        url: `http://localhost:3000/atualizar-livro?id=${ID}`,
        type: `PUT`,
        data: {            
            titulo: $("input[name=titulo]").val(),
            autor: $("input[name=autor]").val(),
            editora: $("input[name=editora]").val(),
            numeroPaginas: $("input[name=numeroPaginas]").val(),
        },
        success:function(response){
            if(response == 0)
                alert("Falha ao atualizar o livro.")
            else{                
                alert("Livro atualizado com sucesso.");
                window.location = ('/') 
            }         
        }
    })    
})

$(".botao_deletar").click(function(){
    var ID = $(this).attr("data-id")
    $.ajax({
        url: `http://localhost:3000/excluir-livro/${ID}`,
        type: `DELETE`,
        success:function(response){
            if(response == 0)
                alert("Falha ao excluir o livro.")
            else{                
                alert("Livro excluido com sucesso.");
                location.reload(); 
            }         
        }
    })
})

$(".botao_editar").click(function(){
    var ID = $(this).attr("data-id")

    $.ajax({
        url: `http://localhost:3000/atualizar-livro?id=${ID}`,
        type: `GET`,
        success:function(response){               
            if(response == 0)
                alert("Falha ao consultar dados do livro.")   
            else
                window.location.href = (`http://localhost:3000/atualizar-livro?id=${ID}`)                  
        }
    })
})
