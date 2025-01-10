import { getMember } from './private/api-bridge.js';

function convertDivisiID() {
    const divisiID = document.querySelector('main').id.trim().toLowerCase();

    if (divisiID === "ui-ux") return "UI / UX";
    else if (divisiID === "game-development") return "Game Development";
    else if (divisiID === "programming") return "Programming";
    else if (divisiID === "cyber-security") return "Cyber Security";
    else if (divisiID === "software-engineering") return "Software Engineering";
    else if (divisiID === "data-mining") return "Data Mining";
}

async function displayMembers() {
    const divisiID = convertDivisiID();
    const tableBody = document.getElementById('tabel-member');
    tableBody.innerHTML = "";

    const members = await getMember();
    members.forEach((member) => {
        const divisi = member.divisi.trim();

        if (divisi === divisiID) {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${member.NIM}</td>
            <td>${member.nama}</td>
            <td>${member.prodi}</td>
            `;

            tableBody.appendChild(row);
        }
    });
}

window.onload = displayMembers;