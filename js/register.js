import { saveMember, getMember } from "../api-bridge.js";

let divisi;
let divisionData;

fetch('/js/data/divisions.json')
    .then(response => response.json())
    .then(data => {
        divisionData = data;
        divisi = divisionData.map(item => item.divisi);
        selecOption();
    });

function selecOption() {
    const select = document.querySelector('#divisi');

    for (let i=0; i<divisi.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', `${divisi[i]}`);
        option.textContent = `${divisi[i]}`;

        select.appendChild(option);
    }
}

async function addDataMember() {
    const inputNIM = document.getElementById('NIM');
    const inputNama = document.getElementById('nama');
    const inputProdi = document.getElementById('prodi');
    const inputEmail = document.getElementById('email');
    const inputNomorTelepon = document.getElementById('nomor-telepon');
    const inputDivisi = document.getElementById('divisi');

    const NIM = inputNIM.value.trim();
    const nama = inputNama.value.trim();
    const prodi = inputProdi.value.trim();
    const email = inputEmail.value.trim();
    const nomorTelepon = inputNomorTelepon.value.trim();
    const divisi = inputDivisi.value.trim();
    const isNew = "true";

    if (!nama || !NIM || !email || !prodi) {
        alert("Data harus diisi semua! :D");
        return;
    }

    let isMember = false;
    const members = await getMember();
    members.forEach((member) => {
        if(NIM == member.NIM) {
            isMember = true;
            return alert ("NIM sudah ada dalam anggota Core IT");
        }
    })

    if (!isMember) {
        const newMember = { NIM, nama, prodi, email, nomorTelepon, divisi, isNew };
        await saveMember(newMember);

        inputNIM.value = "";
        inputNama.value = "";
        inputProdi.value = "";
        inputNomorTelepon.value = "";
        inputEmail.value = "";

        alert("Data berhasil masuk");
    }
}

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    addDataMember();
});