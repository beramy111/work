const stocks=require("./controller/controller")
const {addNewproduct,display,findById,findByMany,update,updateByMany,removeProduct}=stocks
let newProduct={
    name:"cassava",
    amount:4,
    price:1000,
    
}

//update by many
const product1={
    name:"akandi",
    amount:98
}

addNewproduct(newProduct)
display()
findById(1)
findByMany(10000)
update(1,"name","orange",)
update(1,"price",3030)
updateByMany(1,)
removeProduct(1)
