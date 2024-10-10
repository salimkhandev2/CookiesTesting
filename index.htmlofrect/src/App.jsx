import React from 'react';

const CookieButton = () => {
    const handleSetCookie = async () => {
        try {
            // Replace 'Your Value Here' with the actual value you want to store
            const response = await fetch('http://localhost:3000/set-cookie', {
                method: 'POST',
                credentials: 'include',
               
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value: 'Your Value Here' }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Successfully set cookie
            } else {
                console.error('Failed to set cookie');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <button onClick={handleSetCookie}>
            Set Cookie
        </button>
    );
};

export default CookieButton;
