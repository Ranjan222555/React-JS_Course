

const ProductList= [
    {
        title: "Product 1",
        id : 1,
    },
    {
        title: "Product 2",
        id : 2,
    },
    {
        title: "Product 3",
        id : 3,
    },
    {
        title: "Product 4",
        id : 4,
    },
    {
        title: "Product 5",
        id : 5,
    },
   
]

export const fetchListofProducts =async() =>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));

    return ProductList;
}

export const newProduct = async(productName)=>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));

    const newlyCreatedProduct   ={
        id : ProductList.length +1 ,
        title: productName,
    };

    ProductList.push(newlyCreatedProduct);

    return newlyCreatedProduct;
}