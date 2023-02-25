import Navbar from "./Navbar";
import cn from "@/util/cn";
import FindSeatForm from "./FindSeatForm";

const WishChatScreen = ({ wishes }) => {
  return (
    <div className="mb-40">
      <Navbar references={{}} />
      <div className="divider text-white mt-10 text-5xl">Wishes</div>
      <WishExample/>
      {wishes
        ? wishes.map((item) => (
            <div
              key={item.id}
              className={cn("chat ", item.isAdmin ? "chat-start" : "chat-end")}
            >
              <div className="chat-bubble mb-5">{item.wish}</div>
            </div>
          ))
        : <FindSeatForm/>}
    </div>
  );
};

export default WishChatScreen;

const WishExample = () => {
  return (
    <div className="chat chat-start mt-5">
      <div className="chat-bubble mb-5">
        This is an example of a wish.
        <br />
        <p>&quot;Best wishes to the newly weds 💕🎉&quot;</p>
        <br />
        <p>
          From <i>Your</i> <i>Name</i>
        </p>
      </div>
    </div>
  );
};
