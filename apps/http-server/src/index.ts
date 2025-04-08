import express from "express";
import { prismaClient } from "@repo/db/prismaClient";

const app = express();
app.use(express.json());



app.get("/ping", (req, res) => {
    res.send("pong from express server");
});

app.post("/signup", async (req, res) => {
    try {
        const newUser = await prismaClient.user.create({
            data: {
                email: req.body.email,
                password: req.body.password
            }
        });

        if (!newUser) {
            res.status(400).json({
                message: "error in creating new user!"
            });
        }

        res.status(200).json({
            message: "user created successfully!"
        });
    } catch (error) {
        console.log("signup error : ", error);
        
        res.status(500).json({
            message: "internal server error!"
        })
    }
});

app.post("/signin", async (req, res) => {
    try {
        const isUserExists = await prismaClient.user.findUnique({where: {email: req.body.email}});

        if (!isUserExists) {
            res.status(400).json({
                message: "user not found with this email!"
            });
        }

        res.status(200).json({
            message: "signin successfully!"
        });
    } catch (error) {
        res.status(500).json({
            message: "internal server error!"
        })
    }
});

app.listen(8000, (err) => {
    if (err) {
        console.error("error in running express server", err);
    }

    console.log("express server is runnning on port 8000");
    
});