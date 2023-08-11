import  express  from "express";
import Controller from "../controller/controller.js";

const router = express.Router()


router.get('/home', (req, resp)=> Controller.renderPage(req, resp))
router.post('/category', (req, resp) =>Controller.updatePage(req, resp))
router.post('/product', (req, resp) =>Controller.filterProduct(req, resp))
/* router.post('/send', Controller.sendMessage)
router.post('/edit', Controller.updateMessage) */


export default router
