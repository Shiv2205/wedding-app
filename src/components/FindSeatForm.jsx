function FindSeatForm() {
  return (
    <div className="max-w-sm rounded bg-yellow-500 ml-5 pl-5 overflow-hidden shadow-2xl cursor-pointer">

      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        className="border-2 border-black mb-5 pl-1 w-5/6"
      />
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        className="border-2 border-black mb-2 pl-1 w-5/6"
      />
      <br />

      {/** TOO: Implement arch function */}
      <button className="bg-base-100 rounded-md m-3 p-3">Find Seat</button>
    </div>
  );
}

export default FindSeatForm;
