const {stock}=require("../database/database")
const addNewproduct=(newProduct)=>{ 
    newProduct.id=(stock.length)+1
    newProduct.totalPrice = (newProduct.amount * newProduct.price); 

    
    stock.push(newProduct)
    console.log(stock);

}
//display
 const display=()=>{
    console.log("---------------- display ---------");
    console.log(stock);
 }
 //find  by id

 const findById=(id)=>{
    var foundedProduct={}
    foundedProduct=stock.find(foundedProduct=> foundedProduct.id===id)
    if (!foundedProduct) {
        console.log("product doesn't exist");
        
    }
    else{
        console.log("--------- product founded ----");
        console.log(foundedProduct);
    }

 }
 //find by many
 const findByMany=(price)=>{ 
 var foundedProduct = {}
 foundedProduct = stock.filter(foundedProduct=>foundedProduct.price===price)
 if(!foundedProduct){
     console.log("product doesn't exist")
 }
 else{
     console.log("-------founded product--------")
     console.log(foundedProduct)
 }
}
//update 

const update=(id,key,value)=>{
    var productExist={}
    productExist=stock.find(productExist=>productExist.id ===id)
    if (!productExist) {
        console.log("product doesn't exist");
        
    }
    else{
        productExist[key]=value
        console.log("product updated");
        console.log(productExist);
    }

}
//update by many

const updateByMany=(id,object)=>{
    var productExist={}
    productExist=stock.find(productExist => productExist.id ===id)
    console.log("-----update by many---");
    if(!productExist){
        console.log(" product doesn't exist")

    }
    else{
        for(key in object){
            productExist[key]=object[key]
        }
        console.log(" product update")
        console.log(productExist)
    }


}

//remove 

const removeProduct=(id)=>{ 
    var productExist={}
    productExist=stock.find(productExist => productExist.id ===id)
    console.log("-----remove product---");
    if(!productExist){
        console.log("product you want to delete doesn't exist")

    }
    else{
        var remainingProduct=[]
        remainingProduct=stock.filter(remainingProduct=>remainingProduct.id!==id)
        console.log("product removed")
        console.log(remainingProduct)
    }
}
module.exports={
    addNewproduct,
    display,
    findById,
    findByMany,
    update,
    updateByMany,
    removeProduct,

    

}