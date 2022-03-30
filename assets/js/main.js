const port = window.location.href.substring(17, 21);

$("#add_book").submit(function(event){
    event.preventDefault();

    const ativo = ($('input[name="status"]:checked').val() == 'Ativo') ? true : false;

    $.ajax({
        url: `http://localhost:${port}/cadastrar-livro`,
        type: `POST`,
        data: {
            titulo: $("input[name=titulo]").val(),
            autor: $("select[name=autor]").val(),
            editora: $("input[name=editora]").val(),
            numeroPaginas: $("input[name=numeroPaginas]").val(),
            status: ativo
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
    const ID = $("input[name=id]").val()
    const ativo = ($('input[name="status"]:checked').val() == 'Ativo') ? true : false;
    
    $.ajax({
        url: `http://localhost:${port}/atualizar-livro?id=${ID}`,
        type: `PUT`,
        data: {            
            titulo: $("input[name=titulo]").val(),
            autor: $("select[name=autor]").val(),
            editora: $("input[name=editora]").val(),
            numeroPaginas: $("input[name=numeroPaginas]").val(),
            status: ativo
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
        url: `http://localhost:${port}/excluir-livro/${ID}`,
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
        url: `http://localhost:${port}/atualizar-livro?id=${ID}`,
        type: `GET`,
        success:function(response){               
            if(response == 0)
                alert("Falha ao consultar dados do livro.")   
            else
                window.location.href = (`http://localhost:${port}/atualizar-livro?id=${ID}`)                  
        }
    })
})

$(".botao_cadastrar").click(function(){  

    console.log(`http://localhost:${port}/cadastrar-livro`)

    $.ajax({
        url: `http://localhost:${port}/cadastrar-livro`,
        type: `GET`,
        success:function(response){               
            if(response == 0)
                alert("Falha ao consultar dados do autor.")   
            else
                window.location.href = (`http://localhost:${port}/cadastrar-livro`)   
        }
    })
})