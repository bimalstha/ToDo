import * as argon2 from "argon2";

//function to hash password
async function hashPassword(password: string) {
    const hash = await argon2.hash(password);   
    return hash;
}

//function to verify password from user input
async function verifyPassword(password: string, hashedPassword: string) {
    const verified = await argon2.verify(hashedPassword, password);
    return verified;
}

export { hashPassword, verifyPassword };