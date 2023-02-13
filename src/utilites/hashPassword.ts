import * as argon2 from "argon2";

async function hashPassword(password) {
    const hash = await argon2.hash(password);
    return hash;
}

async function verifyPassword(password,hashedPassword) {
    const verified = await argon2.verify(hashedPassword, password);
    return verified;
}

export {hashPassword, verifyPassword};