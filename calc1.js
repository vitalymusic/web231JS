let komnata = {
    dlinna:+prompt("введите длинну комнаты"),
    shirina:+prompt("введите ширину комнаты"),
    visota:+prompt("введите Высоту потолков")
}

// komnata.dlinna = ;
// komnata.shirina = ;
// komnata.visota = ;

let html  = `
<h1>Расчет плащади стен</h1>
<h2>Площадь всех стен равна: ${(komnata.dlinna + komnata.shirina)*2 * komnata.visota}
</h2>`;
document.write(html);