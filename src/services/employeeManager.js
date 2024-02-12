const loginEmployee = async (email, password) => {
    const url = 'https://127.0.0.1:8000/login';
    const data = {
      email: email,
      password: password,
    };

    try {
        const response = await fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
    
        const responseData = await response.json(); 
        return responseData;
      } catch (error) {
        console.error('Error on login:', error);
      }
  }

  export default loginEmployee; 
