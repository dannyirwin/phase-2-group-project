import React, { useState, useEffect } from "react";

import MainCard from "./components/MainCard";

import "./App.css";

const tempPalate = {
  colors: [],
  imageUrl: "https://i.imgur.com/bTqsPlA.jpg"
};

const tempUser = {
  id: 1,
  palates: [tempPalate, tempPalate],
  username: "Dirwin"
};

export default function App() {
  //const [user, setUser] = useState(tempUser);

  const [palates, setPalates] = useState([tempPalate]);

  /*   const addPalateToUser = palate => {
    const newUserInfo = { ...user };
    newUserInfo.palates = [...newUserInfo.palates, palate];
    setUser(newUserInfo);
  }; */

  const addPalate = palate => {
    console.log("setting palates", palate);
    setPalates([...palates, palate]);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <MainCard palate={palates[0]} addPalate={addPalate} />
    </div>
  );
}
