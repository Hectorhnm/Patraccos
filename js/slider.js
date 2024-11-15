//script dinamico//

const sliders = [...document.querySelectorAll('.clientes_body')];
const buttonNext = document.querySelector('#next');
const buttonBefore = document.querySelector('#before');
let value;

buttonNext.addEventListener('click', ()=>{
    changePosition(1);
});

buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
});

const changePosition = (add)=>{
    const currentCliente = document.querySelector('.clientes_body--show').dataset.id;
    value = Number(currentCliente);
    value+= add;

    sliders[Number(currentCliente)-1].classList.remove('clientes_body--show');
    if(value == sliders.length+1 || value == 0){
        value = value == 0 ? sliders.length : 1;
    }
    sliders[value-1].classList.add('clientes_body--show');
}

