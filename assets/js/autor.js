const port = window.location.href.substring(17, 21);

$('.formulario__cadastrar').submit(function(event){
    event.preventDefault();

    $.ajax({
        url: `http://localhost:${port}/autor-cadastro`,
        type: 'POST',
        data: {
            nome: $('input[name=nome]').val(),
            nacionalidade: $('input[name=nacionalidade]').val(),
        },
        success:function(response){            
            if(response == 0)
                alert('Falha ao cadastrar o autor.');
            else{
                alert('Autor cadastrado com sucesso.');
                location.reload();  
            }         
        }
    })    
})

$('.formulario__atualizar').submit(function(event){
    event.preventDefault();
    const ID = $('input[name=id]').val();
    
    $.ajax({
        url: `http://localhost:${port}/autor-atualizacao?id=${ID}`,
        type: 'PUT',
        data: {            
            nome: $('input[name=nome]').val(),
            nacionalidade: $('input[name=nacionalidade]').val(),
        },
        success:function(response){
            if(response == 0)
                alert('Falha ao atualizar o autor.');
            else{                
                alert('Autor atualizado com sucesso.');
                window.location = ('/autor-listagem');
            }         
        }
    })    
})

$('.botao__excluir').click(function(){
    const ID = $(this).attr('data-id');
    
    $.ajax({
        url: `http://localhost:${port}/autor-exclusao/${ID}`,
        type: 'DELETE',
        success:function(response){
            switch (response) {
            case 0:
                alert('Falha ao excluir o autor. Não foi possível consultar os livros dependentes dele.');
                break;
            case 1:
                alert('Falha ao excluir o autor.');
                break;
            case 2:
                alert('Autor excluido com sucesso.');
                location.reload(); 
                break;
            case 3:
                alert('Falha ao excluir o autor. Há livros dependentes desse registro.'); 
                break;
            }
        }
    })
})

