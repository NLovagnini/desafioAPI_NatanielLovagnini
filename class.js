const fs = require('fs')

module.exports = class Container {
    constructor (){
    }

    read = async (file) =>{
        let productsArray= []
        try{
            productsArray = JSON.parse( await fs.promises.readFile(file, 'utf-8'));
        }catch(err){
            console.log(err)
        }
        return productsArray
    }

    write = async (file, input) =>{
        try{
            await fs.promises.writeFile(file, JSON.stringify(input, null, 2))
        }catch(err){
        console.log(err)
        }
    }

    save = async (file, newObj) =>{
        try{

            let lastId
            const products = await this.read();
            const startingId = products.at(-1).id

            if(startingId < lastId){
                newObj.id = lastId
            } else {
                newObj.id = startingId
            }
            lastId = newObj.id

            products.push({...newObj})

            await this.write(JSON.stringify(file, products, null, 2))

            return newObj.id
            
        } catch (err){
            console.log(err)
        }
    }
}
   
