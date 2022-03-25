
$("#add_book").submit(function(event){
    alert("Registro inserido com sucesso!");
})
$("#update_book").submit(function(event){
    alert("Registro atualizado com sucesso!");
})

function deletar(elemento) {
    try{
        const Http = new XMLHttpRequest();
        const url=`http://localhost:3000/excluir-livro/${elemento.dataset.id}`;
        Http.open("DELETE", url);
        Http.send();
        alert("Registro excluído com sucesso!");
        location.reload();
    } catch(err){        
        alert(err + " - Erro ao excluir.");
    }
}
