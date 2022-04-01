import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const apiKey = process.env.API_KEY;

router.get("/weather/:zipcode", async (req, res) => {
  const zipcode = req.params.zipcode
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;
