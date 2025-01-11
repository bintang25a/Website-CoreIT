export async function getToken() {
    const response = await fetch('https://coreit-database.vercel.app/data/get-token.js');
    const data = await response.json();
    const token = data.token;
    localStorage.setItem('token', token);
    return token;
}

export async function getMember() {
    let token = localStorage.getItem('token');

    if (!token) {
        token = await getToken();
    }

    const response = await fetch('https://coreit-database.vercel.app/data/members.js', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
    
    if (!response.ok) {
        token = await getToken();
        throw new Error('Failed to fetch members');
    }
    
    return await response.json();
}
