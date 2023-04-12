const baseUrl = process.env.REACT_APP_API_URL;

export const fetchContact = (data) => {
    const url = `${baseUrl}/send`;
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}