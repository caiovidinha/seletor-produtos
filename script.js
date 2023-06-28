const btn1 = document.getElementById('1pote');
const btn2 = document.getElementById('2pote');
const btn3 = document.getElementById('3pote');
const img = document.getElementById('pote');
const preco = document.getElementById('preco');
const buy = document.getElementById('buy');

function mudarFrasco(frasco,href,price,parcelado,botao,vzs,frete){
    img.src = frasco;
    buy.href = href;
    preco.innerHTML = `
<p>Parcelado${frete} em</p>
<p>${vzs} de R$ ${parcelado}</p><br>
<p>Ou R$ ${price} à vista + frete</p>
`;
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    botao.classList.add('active');

};

preco.innerHTML += `
<p>Parcelado com frete em</p>
<p>10x de R$ 26,59</p><br>
<p>Ou R$ 197,00 à vista + frete</p>
`;

img.src = 'img/1 FRASCO-01.png';

