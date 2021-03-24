import React from "react";
import { dbRef } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/actions/users";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);
  const [form, setForm] = React.useState({
    name: "",
    age: "",
    email: ""
  });

  React.useEffect(() => {
    dispatch(getUsers());
    console.log("running");
  }, []);

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dbRef.child("users").push(form, err => {
      if (!err) {
        setForm({
          name: "",
          age: "",
          email: ""
        });
      } else {
        console.log("err", err);
      }
    });
  };

  return (
    <div>
      <h1>Firebase Saga Demo</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChanges}
        />
        <button type="submit">Submit</button>
      </form>
      {console.log("data", users)}
      {users && users.length
        ? users.map((data, index) => {
            return <div key={index}>{data.name} </div>;
          })
        : "nothing"}
    </div>
  );
}

export default App;
