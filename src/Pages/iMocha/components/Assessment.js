import React, { useState, useEffect } from "react";
import axios from 'axios'

const Assessment = () => {
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [poscode, setPoscode] = useState("")
    const [state, setState] = useState("Enter Poscode")
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://lokmannode.herokuapp.com/get/users')
        .then((res) => {
            setList(res.data)
            // console.log(res.data)
        })
    }, [])

    const save = () => {
        axios.post('https://lokmannode.herokuapp.com/insert/users', {
            name: name,
            dateofbirth: dob,
            address: address,
            poscode: poscode,
            state: state
        })

        setList([
            ...list,
            { name: name, dateofbirth: dob, address: address, poscode: poscode, state: state }
        ])
    }

  return (
    <div>
        <div className="form">
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
      <button onClick={save}>Save</button>
        </div>
            <br />
            <h1>List of applicant</h1>
            <ol className="listed">
                {list.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <br />
                        {item.dateofbirth}
                        <br />
                        {item.address}
                        <br />
                        {item.poscode}
                        <br />
                        {item.state}
                    </li>
                ))}
            </ol>
    </div>
  );
};

export default Assessment;
