import { db } from "../../connect";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { setCookie } from 'cookies-next';

export default function login(req, res) {
    const q = "SELECT * FROM users WHERE email = ?";

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        const checkPassword = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!checkPassword)
            return res.status(400).json("Wrong password or username!");

        const token = jwt.sign({ id: data[0].id }, "secretkey");
        console.log(token);
        setCookie("accessToken", token)
        
            
        if (checkPassword && data.length) {
            return res.status(200).json("user logged in");
            
        }    
    });
};