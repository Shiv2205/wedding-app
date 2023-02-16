const FindSeatForm = () => {
  return (
    <div>
      <h2>Find My Seat</h2>
      <br />
      <label htmlFor="firstName" className="pr-3">
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        className="border-2 border-black mb-2 pl-1"
      />
      <br />
      <label htmlFor="lastName" className="pr-3">
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        className="border-2 border-black mb-2 pl-1"
      />
      <br />

      {/**TOO: Implement arch function */}
      <button className="bg-yellow-500 rounded-md m-3 p-3">Find Seat</button>
    </div>
  );
};

export default FindSeatForm;
