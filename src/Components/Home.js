import "../Styles/Home.scss";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

function Home() {
  const navigate = useNavigate();
  /*eslint-disable-next-line*/
  const [user, loading, error] = useAuthState(auth);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newGender, setNewGender] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: Number(newAge),
      gender: newGender,
    });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs);
    };

    getUsers();
    /*eslint-disable-next-line*/
  }, []);

  const signOutClick = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div data-testid="showUser" className="welcome">
      <h1 className="header">Welcome {user?.email}</h1>
      <br />

      <br />
      <input
        placeholder="Name..."
        type="text"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />

      <input
        data-testid="addingAge"
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <input
        placeholder="Gender..."
        type="text"
        onChange={(event) => {
          setNewGender(event.target.value);
        }}
      />
      <br />
      <button onClick={createUser}>Create profile</button>
      <br />
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Gender: {user.gender}</h3>
            <br />
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete Profile
            </button>
          </div>
        );
      })}
      <br />
      <button className="close" onClick={() => signOutClick()}>
        Sign Out
      </button>
      <br />
    </div>
  );
}

export default Home;
