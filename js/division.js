import { getMember } from '/js/private/api-bridge.js';

let divisi;
let deskripsi;
let kodeDivisi;
let divisionData;

fetch('/js/data/divisions.json')
    .then(response => response.json())
    .then(data => {
        divisionData = data;
        divisi = divisionData.map(item => item.divisi);
        kodeDivisi = divisionData.map(item => item.kode_divisi);
        deskripsi = divisionData.map(item => item.deskripsi);
        displayMain();
    });

function getDeskripsi() {
    const localDivisi = localStorage.getItem('divisi');
    for (let i=0; i<divisi.length; i++) {
        if (localDivisi === divisi[i]) {
            return deskripsi[i];
        }
    }
}

function getKodeDivisi() {
    const localDivisi = localStorage.getItem('divisi');
    for (let i=0; i<divisi.length; i++) {
        if (localDivisi === divisi[i]) {
            return kodeDivisi[i];
        }
    }
}

function displayMain() {
    const title = localStorage.getItem('divisi');
    const desc = getDeskripsi();
    const code = getKodeDivisi();

    const header = document.querySelector('.header');
    header.innerHTML = `
        <h5>${title}</h5>
        <div class="divisi-img"><img src="/img/logoDivisi/${code}.png" alt="${title}"></div>
    `;

    const about = document.querySelector('.about');
    about.innerHTML = `
        <h2>What You'll Learn</h2>
        <p>${desc}</p>
    `;

    const learning = document.querySelector('.learning-container');
    for (let i=0; i<6; i++) {
        const div = document.createElement('div');
        div.classList.add('bab');
        div.innerHTML = 'Coming Soon';
        learning.appendChild(div);
    }

    const member = document.querySelector('.member');
    member.innerHTML = `
    <h2>${title} Member</h2>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Prodi</th>
                    </tr>
                </thead>
                <tbody id="tabel-member"></tbody>
            </table>
        </div>
    `;

    displayMembers();
}

async function displayMembers() {
    const divisiID = localStorage.getItem('divisi');
    const tableBody = document.getElementById('tabel-member');
    tableBody.innerHTML = "";

    const members = await getMember();
    members.filter(member => member.divisi === divisiID && !member.isNew).forEach((member) => {

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${member.NIM}</td>
        <td>${member.nama}</td>
        <td>${member.prodi}</td>
        `;

        tableBody.appendChild(row);
    });
}
