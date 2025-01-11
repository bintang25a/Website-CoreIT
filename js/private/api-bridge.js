export async function getToken() {
    const response = await fetch('http://localhost:3000/get-token');
    const data = await response.json();
    const token = data.token;
    localStorage.setItem('token', token);
    return token;
}

export async function getMember() {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3000/members', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
    
    if (!response.ok || !token) {
        getToken();
        location.reload(true);
    }
    else {
        getToken();
    }

    return await response.json();
}
