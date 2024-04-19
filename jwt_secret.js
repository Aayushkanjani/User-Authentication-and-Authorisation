function generateJWTSecretKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]};:,<.>?/';
    let secretKey = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      secretKey += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return secretKey;
  }
  
  // Generate a JWT secret key with a specified length (e.g., 64 characters)
  const jwtSecretKey = generateJWTSecretKey(64);
  console.log(jwtSecretKey);
  