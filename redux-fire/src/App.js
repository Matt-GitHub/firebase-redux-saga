import React from "react";
import { userRef } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, addUser, editUser, deleteUser } from "./redux/actions/users";

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);
  const [edit, setEdit] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    age: "",
    email: ""
  });

  React.useEffect(() => {
    if (users.length < 1 && !loading) {
      dispatch(getUsers());
    }

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
    if (edit === true) {
      console.log("edit trigger");
      dispatch(editUser(form));
      setEdit(false);
    } else {
      let newPostKey = userRef.push().key;
      console.log("new post key", newPostKey);
      dispatch(addUser({ ...form, uid: newPostKey }));
    }
    setForm({ name: "", age: "", email: "" });
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
      {console.log("users", users, error)}
      {users && users.length
        ? users.map((data, index) => {
            return (
              <div key={index}>
                <p>{data.name}</p>
                <button
                  onClick={() => {
                    console.log("ref check", data);
                    setEdit(true);
                    setForm(data);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteUser(data));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        : "nothing"}{" "}
    </div>
  );
}

export default App;
