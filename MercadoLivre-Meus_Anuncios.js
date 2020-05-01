// ==UserScript==
// @name        ML Meus Anuncios 
// @namespace   Violentmonkey Scripts
// @match       https://www.mercadolivre.com.br/anuncios/lista*
// @grant       none
// @version     1.0
// @author      -
// @description 01/05/2020 13:45:49
// ==/UserScript==

priceTags = document.querySelectorAll('.sc-list-grid .sc-list-item-row-price .sc-list-item-row-price__prices p');
itemAmounts = document.querySelectorAll('.sc-list-grid .sc-list-item-row-quantity');


prices = [];
amts = [];
for (i = 0; i < priceTags.length; i++) {
    ptag = priceTags[i]
    p = ptag.innerText
    pnum = pnum = p.split(' ')[1].replace(',', '.')
    price = parseFloat(pnum)
    prices[i] = price
}

for (i = 0; i < itemAmounts.length; i++) {
    amttag = itemAmounts[i]
    p = amttag.innerText
    pnum = pnum = p.replace('u.', '')
    amt = parseInt(pnum)
    amts[i] = amt
}

tot = 0;

for (i = 0; i < priceTags.length; i++) {
    tot += prices[i] * amts[i]
}

panel = document.querySelector('.sc-list-navbar-right .sc-list-items-length')

totalTag = document.createElement("span");
totalTag.innerHTML = '<strong>Total:</strong> R$ ' + tot + ' (R$ ' + (tot * 0.89).toFixed(2) + ')';
totalTag.style.marginLeft = '10px'
setTimeout(() => { panel.appendChild(totalTag); }, 1000)
