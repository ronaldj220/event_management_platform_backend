import { Request, Response } from "express";
import db from "../config/db";
import { QueryError } from "mysql2";

export const checkEmail = (req: Request, res: Response) => {
  const email = req.query;
  console.log(email);
  const checkEmail = `SELECT email FROM users WHERE email='${req.query.email}'`;

  console.log(checkEmail);

  // Periksa apakah email sudah terdaftar
  db.query(checkEmail, (err: QueryError, resultEmail: any) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(resultEmail);
  });
};
