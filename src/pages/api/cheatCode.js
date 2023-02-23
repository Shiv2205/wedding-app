 const chatAdminCheck = (newWish) => {
    const code = process.env.NEXT_PUBLIC_ADMIN_CHAT_CODE;
    if(newWish.search(code) >= 0){ //Cheat code
        newWish = newWish.substring(newWish.indexOf(">") + 1);
        return {wish: newWish, isAdmin: true};
    }
    return {wish: newWish, isAdmin: false};
 }

 export { chatAdminCheck };