const {Router} = require('express');
const path = require('path');
const fs = require('fs');

const router = Router();

router.post("/", (req, res) => {
    const bidRequest = req.body;
    
    res.send("Bid route");
}   );


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../..", 'public', 'index.html'));
}   );

router.post("/", (req, res) => {
    const analyticsData = req.body;
    console.log('Received analytics data:', analyticsData);
    
    res.send("Bid route");
}
);
module.exports = router;