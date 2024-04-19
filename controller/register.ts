import { Request, Response } from "express";
import db from "../config/db";
import { QueryError } from "mysql2";

export const register = (req: Request, res: Response) => {
  // task 1: insert data into users
  const { name, email, password, role, referralCode } = req.body;
  console.log(name);
  console.log(email);
  console.log(role);

  let insertQuery = `INSERT INTO users(name, email, password, referral_code, role, isActive) VALUES (${db.escape(
    name
  )}, ${db.escape(email)}, MD5(${db.escape(password)}), ${db.escape(
    referralCode
  )}, ${db.escape(role)}, 'inactive')`;
  console.log(insertQuery);

  db.query(insertQuery, (err: QueryError, insertResult: any) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Failed to register user", error: err });
    }
  });

  // task 2: insert referral code if users insert referral code
};
