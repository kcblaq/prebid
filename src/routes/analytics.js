const {Router} = require('express');
const path = require('path');
const fs = require('fs');

const analyticsRouter = Router();
let receivedAnalytics = []; 
analyticsRouter.post("/", (req, res) => {
    const analyticsData = req.body;
    receivedAnalytics.push(analyticsData);
    res.status(200).send("Analytic data saved");
});

analyticsRouter.get("/", (req, res) => {
    res.json(receivedAnalytics);
});


module.exports = analyticsRouter;