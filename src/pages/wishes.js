import Navbar from "@/components/Navbar";
import WishForm from "@/components/WishForm";

const test = [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1];

const Wishes = () => {
  return (
    <>
    <div>
      <Navbar references={{}} />
      <div className="divider text-white mt-10 text-5xl">Wishes</div>
      <div className="chat chat-start mt-5 mb-40">
        {test.map((item, index) => {
         return <div key={index} className="chat-bubble mb-5">
            This is an example of a wish.
            <br />
            &quotBest wishes to the newly weds 💕🎉&quot
            <br />
            <p>
              From <i>Your</i> <i>Name</i>
            </p>
          </div>;
        })}
      </div>
      <WishForm />
    </div>
    </>
  );
};

export default Wishes;
