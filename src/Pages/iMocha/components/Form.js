import React, { useState } from "react";

const Home = () => {
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [poscode, setPoscode] = useState("")
    const [state, setState] = useState("Enter Poscode")

    const submit = () => {
        console.log(name, dob, address, poscode, state)
    }

  return (
    <div>
      <br />
      <label>Name :
          <input
          type="text"
          placeholder="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
      </label>
      <br />
      <label>Date of Birth :
          <input
          type="text"
          placeholder="1990-12-31"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          />
      </label>
      <br />
      <label>Address :
          <input
          type="text"
          placeholder="Jalan 10, 11, 12"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          />
      </label>
      <br />
      <label>Poscode :
          <input
          type="text"
          placeholder="30000"
          value={poscode}
          onChange={(e) => {
              setPoscode(e.target.value);
              if (poscode === "3000") {
                setState("Perak")
            }
            if (poscode === "5000") {
                setState("Wilayah Persekutuan")
            }
            if (poscode === "8000") {
                setState("Johor")
            }
            }}
          />
      </label>
      <br />
      <label>State :
          {state}
      </label>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Home;
