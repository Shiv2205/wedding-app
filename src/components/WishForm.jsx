import { makeWish } from "@/pages/api/firebase/databaseOps";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { useRouter } from "next/router";

const WishForm = ({ newWish }) => {

    const [wish, setWish] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const wishId = uuidv1();
        await makeWish(wishId, wish);
        setWish("");
        document.getElementById("textArea").value = "";
        router.push("/wishes", "/wishes", {scroll: false});
        newWish(true);
    }

    return ( 
        <footer className="footer z-10 -mb-10 fixed left-0 bottom-0 p-10 bg-neutral text-neutral-content">
            <form className="w-full" onSubmit={async (event) => await handleSubmit(event)}>
            <textarea id="textArea" name="textArea" className="textarea textarea-bordered w-full" placeholder="Enter your wish here..."
             onChange={(event) => setWish(event.target.value)} required/>
            <button type="submit" className="btn bg-yellow-500 text-white ">SEND</button>
            </form>
        </footer>
     );
}
 
export default WishForm;