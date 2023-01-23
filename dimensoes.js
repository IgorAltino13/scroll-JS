
let botao = document.querySelector('.button');

botao.addEventListener('click',() =>{
    let elemento = document.querySelector('.teste');
    //uma opçao menos suave,mas mais simples
    //elemento.scrollTo(0,0);
    elemento.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

function verificaBotao(){
    if(window.scrollY === 0){
        document.querySelector('.button').style.display = 'none';
        
    }
    else{
        document.querySelector('.button').style.display = 'block';
    }
}


//soluçao que consome mais processamento
//setInterval(verificaBotao,100);

window.addEventListener('scroll',verificaBotao);
