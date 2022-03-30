const port = window.location.href.substring(17, 21);

$("#add_autor").submit(function(event){
    event.preventDefault();

    $.ajax({
        url: `http://localhost:${port}/cadastrar-autor`,
        type: `POST`,
        data: {
            nome: $("input[name=nome]").val(),
            nacionalidade: $("input[name=nacionalidade]").val(),
        },
        success:function(response){            
            if(response == 0)
                alert("Falha ao cadastrar o autor.")
            else{
                alert("Autor cadastrado com sucesso.");
                location.reload();  
            }         
        }
    })    
})

$("#update_autor").submit(function(event){
    event.preventDefault();
    const ID = $("input[name=id]").val()
    
    $.ajax({
        url: `http://localhost:${port}/atualizar-autor?id=${ID}`,
        type: `PUT`,
        data: {            
            nome: $("input[name=nome]").val(),
            nacionalidade: $("input[name=nacionalidade]").val(),
        },
        success:function(response){
            if(response == 0)
                alert("Falha ao atualizar o autor.")
            else{                
                alert("Autor atualizado com sucesso.");
                window.location = ('/lista-autor') 
            }         
        }
    })    
})

$(".botao_autor").click(function(){
    $.ajax({
        url: `http://localhost:${port}/lista-autor`,
        type: `GET`,
        success:function(response){
            if(response == 0)
                alert("Falha ao carregar autores.")
            else{                
                window.location.href = (`http://localhost:${port}/lista-autor`)   
            }         
        }
    })
})

$(".botao_deletar_autor").click(function(){
    var ID = $(this).attr("data-id")
    $.ajax({
        url: `http://localhost:${port}/excluir-autor/${ID}`,
        type: `DELETE`,
        success:function(response){
            switch (response) {
            case 0:
                alert('Falha ao excluir o autor. Não foi possível consultar os livros dependentes dele.');
                break;
            case 1:
                alert('Falha ao excluir o autor.');
                break;
            case 2:
                alert("Autor excluido com sucesso.");
                location.reload(); 
                break;
            case 3:
                alert("Falha ao excluir o autor. Há livros dependentes desse registro."); 
                break;
            }
        }
    })
})

$(".botao_editar_autor").click(function(){
    var ID = $(this).attr("data-id")
    
    $.ajax({
        url: `http://localhost:${port}/atualizar-autor?id=${ID}`,
        type: `GET`,
        success:function(response){               
            if(response == 0)
                alert("Falha ao consultar dados do autor.")   
            else
                window.location.href = (`http://localhost:${port}/atualizar-autor?id=${ID}`)                  
        }
    })
})

$(".botao_cadastrar_autor").click(function(){  
    window.location.href = (`http://localhost:${port}/cadastrar-autor`)   
})
