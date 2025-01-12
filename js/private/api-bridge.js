export async function getToken() {
    const response = await fetch('https://coreit-database.vercel.app/data/get-token.js');
    const data = await response.json();
    const token = data.token;
    localStorage.setItem('token', token);
    return token;
}

export async function getMember() {
    const token = await getToken();

    const response = await fetch('https://coreit-database.vercel.app/data/members.js', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch members');
    }
    
    return await response.json();
}

export async function saveMember(newMember) {
    const token = await getToken();

    const response = await fetch('https://coreit-database.vercel.app/data/save-member.js', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMember)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log('Response text:', text);

    try {
        return JSON.parse(text)
    } catch (error) {
        throw new Error('Failed to parse JSON response');
    }
}

// export async function saveMember(newMember) {
//     const token = await getToken();

//     const response = await fetch('https://coreit-database.vercel.app/data/save-member.js', {
//         method: 'POST',
//         headers: {
//             'authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newMember)
//     });
    
//     const responseBody = await response.text();
//     console.log('Response body:', responseBody);

//     try {
//         return JSON.parse(responseBody);
//     } 
//     catch (error) {
//         throw new Error('Failed to parse JSON from response');
//     }

//     return await response.json();
// }
