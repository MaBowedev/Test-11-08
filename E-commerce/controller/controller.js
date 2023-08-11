import axios from "axios"

class Controller {
    static async renderPage(req, resp) {
        const obj = await axios.get('http://localhost:3050/products')
        resp.render('pages/home', { products: obj.data })
    }

    static async updatePage(req, resp) {
        const category = req.body.scegli
        console.log(category)
        const obj = await axios.get('http://localhost:3050/products')
        const result = obj.data.filter((el) => el.category === category)
        resp.render('pages/category', { result })

    }
    static async filterProduct(req, resp) {
        const id = req.id
        console.log(id)
        const obj = await axios.get('http://localhost:3050/products')
        const result2 = obj.data.filter((el) => el.id === id)
        resp.render('pages/product', { result2 })

    }
    
}


export default Controller