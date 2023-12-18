export const get_fact = async() => {
    try {
        const response = await fetch(
            'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en', 
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        if (!response.ok) {
            throw new Error('Response was not ok.');
        }

        const data = await response.json();

        return data.text;
        
    } catch (error) {        
        throw new Error(`Error when get facts. Trace: ${error.message}`);
    }
};