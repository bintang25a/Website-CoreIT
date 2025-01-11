export async function getToken() {
    const response = await fetch('https://coreit-database.vercel.app/data/get-token.js');
    const data = await response.json();
    const token = data.token;
    localStorage.setItem('token', token);
    return token;
}

export async function getMember() {
    const token = localStorage.getItem('token');

    if (!token) {
        getToken();
    }

    const response = await fetch('https://coreit-database.vercel.app/data/members.js', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
    
    if (!response.ok) {
        getToken();
        throw new Error('Failed to fetch members');
        // location.reload(true);
    }
    else {
        getToken();
    }

    return await response.json();
}
