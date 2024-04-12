import { useState, useEffect } from 'react';

export default function usePost() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, data) => {
        setLoading(true);
        console.log(data)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const responseData = await response.json();
            setResponse(responseData);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    return { postData, response, loading, error };
}