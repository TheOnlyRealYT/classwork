import jwt from "jsonwebtoken";

export default function auth(req, res, next){
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({"Message": "Login Required"});
    }
    try {
        const token = authorization.replace("Bearer ", "");
    } catch (err) {
        console.error(err);
        const payload = jwt.verify(token, "secret");
        req.user = payload;
        next();
    }
}