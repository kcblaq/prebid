const {Router} = require('express');
const path = require('path');

const router = Router();

router.post("/", (req, res) => {
    const bidRequest = req.body;
    
    res.send("Bid route");
}   );


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../..", 'public', 'index.html'));
}   );
module.exports = router;