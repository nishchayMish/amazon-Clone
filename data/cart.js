export let cart = 
[
    {
        productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity : 2,
    },
    {
        productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity : 1,
    }
];

export function addToCart(productId){
    let matchingItem;
  
    // chexk if the product is in the cart
    cart.forEach((CartItem) => {
        if(productId === CartItem.productId){
            matchingItem = CartItem;
        }
    })
  
    // if it is in the cart increase the quantity
    if(matchingItem){
        matchingItem.quantity += 1;
    }
  
    // if not in the cart then add to cart
    else{
        cart.push({
            productId : productId,
            quantity : 1
        })
    }
}

// removing a product from cart
export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })
    cart = newCart;
}