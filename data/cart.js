export const cart = [];

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