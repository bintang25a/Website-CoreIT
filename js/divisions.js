let divisionData;
let divisi;
let codeDivisi;

fetch('../js/data/divisions.json')
    .then(response => response.json())
    .then(data => {
        divisionData = data;
        divisi = divisionData.map(item => item.divisi);
        codeDivisi = divisionData.map(item => item.kode_divisi);
        displayDivision();
    });

function displayDivision() {
    const divisiContainer = document.querySelector('.divisi-container');
    divisiContainer.innerHTML = "";

    for (let i=0; i<divisionData.length; i++) {
        const card = document.createElement('a');
        card.classList.add('card');
        card.setAttribute('href', '/views/division.html')

        card.innerHTML = `
            <h5>${divisi[i]}</h5>
            <div class="divisi-img"><img src="../img/logoDivisi/${codeDivisi[i]}.png" alt="${divisi[i]}"></div>
        `;

        card.addEventListener('click', (e) => {
            localStorage.setItem('divisi', divisi[i]);
        });

        divisiContainer.appendChild(card);
    }

    localStorage.removeItem('divisi');
}