import { JsonWebTokenError } from "jsonwebtoken";
import { HttpError } from "../../helpers/index.js";

const { JWT_SECRET} = process.env; // Из файла .env

const signToken = (id) => jwt.sign({ id }, JWT_SECRET, { expireIn: '1h' });

const checkToken = (token) => {
    if (!token) throw new HttpError(401, 'Token is wrong');

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        return id;
    } catch (error) {
        throw new HttpError()
    }
}

export { signToken, checkToken };