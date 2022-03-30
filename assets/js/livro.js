const port = window.location.href.substring(17, 21);

$('#add_book').submit(function(event){
    event.preventDefault();
    const ativo = ($('input[name=status]:checked').val() == 'Ativo') ? true : false;

    $.ajax({
        url: `http://localhost:${port}/livro-cadastro`,
        type: 'POST',
        data: {
            titulo: $('input[name=titulo]').val(),
            autor: $('select[name=autor]').val(),
            editora: $('input[name=editora]').val(),
            numeroPaginas: $('input[name=numero-paginas]').val(),
            status: ativo,
        },
        success:function(response){            
            if(response == 0)
                alert('Falha ao cadastrar o livro.');
            else{
                alert('Livro cadastrado com sucesso.');
                location.reload();  
            }         
        }
    })    
})

$('#update_book').submit(function(event){
    event.preventDefault();
    const ID = $('input[name=id]').val();
    const ativo = ($('input[name=status]:checked').val() == 'Ativo') ? true : false;
  
    $.ajax({
        url: `http://localhost:${port}/livro-atualizacao?id=${ID}`,
        type: 'PUT',
        data: {            
            titulo: $('input[name=titulo]').val(),
            autor: $('select[name=autor]').val(),
            editora: $('input[name=editora]').val(),
            numeroPaginas: $('input[name=numero-paginas]').val(),
            status: ativo,
        },
        success:function(response){
            if(response == 0)
                alert('Falha ao atualizar o livro.');
            else{                
                alert('Livro atualizado com sucesso.');
                window.location = ('/livro-listagem');
            }         
        }
    })    
})

$('.botao_livro').click(function(){
    $.ajax({
        url: `http://localhost:${port}/livro-listagem`,
        type: 'GET',
        success:function(response){
            if(response == 0)
                alert('Falha ao carregar livros.');
            else{                
                window.location.href = (`http://localhost:${port}/livro-listagem`);   
            }         
        }
    })
})

$('.botao_deletar').click(function(){
    const ID = $(this).attr('data-id')
    $.ajax({
        url: `http://localhost:${port}/livro-exclusao/${ID}`,
        type: 'DELETE',
        success:function(response){
            if(response == 0)
                alert('Falha ao excluir o livro.');
            else{                
                alert('Livro excluido com sucesso.');
                location.reload(); 
            }         
        }
    })
})

$('.botao_editar').click(function(){
    const ID = $(this).attr('data-id');

    $.ajax({
        url: `http://localhost:${port}/livro-atualizacao?id=${ID}`,
        type: 'GET',
        success:function(response){               
            if(response == 0)
                alert('Falha ao consultar dados do livro.');   
            else
                window.location.href = (`http://localhost:${port}/livro-atualizacao?id=${ID}`);                  
        }
    })
})

$('.botao_cadastrar').click(function(){  

    $.ajax({
        url: `http://localhost:${port}/livro-cadastro`,
        type: 'GET',
        success:function(response){               
            if(response == 0)
                alert('Falha ao consultar dados do autor.');
            else
                window.location.href = (`http://localhost:${port}/livro-cadastro`);   
        }
    })
})
