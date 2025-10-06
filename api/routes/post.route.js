import express from "express"

const router = express.Router();


router.get('/', (req, res) => {
    res.send("it is working");
});

router.get('/test', (req, res) => {
    res.send("Post route works!!!!!!")
});

export default router;