const port = window.location.href.substring(17, 21);

function verificarNumerico(event){
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


$('.formulario__cadastrar').submit(function(event){
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

$('.formulario__atualizar').submit(function(event){
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

$('.botao__excluir').click(function(){
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


