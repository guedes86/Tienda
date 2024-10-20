let conteo = 0
let resultado = 0
let id = 0

function agregarCoisas(nome, descricao, preco, imagem){

    id++

    document.getElementById('agregados').innerHTML +=`
    <div id="principal-${id}">
        <div onclick="mostrar('${nome}','${descricao}','${preco}','${imagem}')" class="produtosagregados">
        <img src="${imagem}" alt="">
        <h2>${nome}</h2>
        <h3>${descricao}</h3>
        <p> R$ ${preco} Reais</p>
        </div>
        <div>
            <button id="eliminar" onclick="excluirproduto(${id},'${nome}','${descricao}','${preco}','${imagem}')">Eliminar</button>
        </div>
    </div>
    `

    conteo++
    
    resultado = parseFloat(resultado)+parseFloat(preco)

    document.getElementById('quantidade').textContent = conteo
    document.getElementById('total').textContent = resultado
    
}

function esvaziar(){
    document.getElementById('agregados').innerHTML = ``
    document.getElementById('quantidade').textContent = ""
    document.getElementById('total').textContent = ""

    conteo = 0
    resultado = 0

}

function mostrar(nome, descricao, preco, imagem){
    document.querySelector('.modal-content').innerHTML =`
    <p id="cerrar" onclick="closemodal()">&times;</p>
    <img src="${imagem}" alt="">
    <h2>${nome}</h2>
    <h3>${descricao}</h3>
    <p> R$ ${preco} Reais</p>
    </div>
    `
    document.querySelector('.modal').style.display = "flex"
}

function closemodal(){
    document.querySelector('.modal').style.display = "none"
}

function excluirproduto(produtoId,nome, descricao, preco, imagem){

    var remover = document.getElementById(`principal-${produtoId}`)

    if (remover) {
        remover.remove();
    }

    conteo--
    resultado=resultado-preco

    document.getElementById('quantidade').textContent = conteo  
    document.getElementById('total').textContent = resultado
    
}






