function FindSeatForm({ setFindSeat }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = (document.forms['findSeat']['firstName'].value.trim() + " "
   + document.forms['findSeat']['lastName'].value.trim());
    setFindSeat({guest: name, style: ''});
  }

  return (
    <div className="max-w-sm rounded bg-yellow-500 pl-5 overflow-hidden pr-5 shadow-2xl cursor-pointer grow">
      <form name="findSeat" onSubmit={(e) => handleSubmit(e)}>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="border-2 rounded-l-full rounded-r-full border-black mb-5 pl-1 w-full"
          required
        />
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="border-2 rounded-l-full rounded-r-full border-black mb-2 pl-1 w-full"
        />
        <br />

        {/** TODO: Implement arch function */}
        <div className="flex justify-center">
        <button type="submit" className="bg-base-100 rounded-md m-3 p-3">Find Seat</button>
        </div>
      </form>
    </div>
  );
}

export default FindSeatForm;
