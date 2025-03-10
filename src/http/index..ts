import { env } from "@/config";
import axios from "axios";

const http = axios.create({
    baseURL: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.API_KEY}`,
    headers : {
        "Content-Type": "application/json"
    }
});

export { http };