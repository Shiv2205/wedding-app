const WishForm = () => {
    return ( 
        <footer className="footer z-10 fixed left-0 bottom-0 p-10 bg-neutral text-neutral-content">
            <form className="w-full">
            <textarea className="textarea textarea-bordered w-full" placeholder="Enter your wish here..."/>
            <button type="submit" className="btn bg-yellow-500 text-white ">SEND</button>
            </form>
        </footer>
     );
}
 
export default WishForm;