import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import DrawerComponent from './components/DrawerComponent';
import { GlobalProvider, GlobalContext } from './context/GlobalState';



function App() {

  // const { initialState, list, setFromLocal } = useContext(GlobalContext);

  // const [todoList] = useState(list)
  // console.log("--todoList : ", todoList);

  // useEffect(() => {
  //   getFromLocal();
  // }, [])

  // useEffect(() => {
  //   saveToLocal();
  // }, [todoList])

  // console.log("Initial State => ", initialState);

  // const saveToLocal = () => {
  //   console.log("saveToLocal CALLED");
  //   localStorage.setItem('pBData', JSON.stringify({ initialState }));
  // }

  // const getFromLocal = () => {
  //   console.log("getFromLocal CALLED");
  //   if (localStorage.getItem('pBData') === null) {
  //     console.log("LOCAL STORAGE NOT FOUND");
  //     localStorage.setItem('pBData', JSON.stringify({
  //       initialState: {
  //         selectedList: -1,
  //         llen: 1,
  //         viewNotCompleted: true,
  //         list: []
  //       }
  //     }))
  //   } else {
  //     console.log("LOCAL STORAGE  FOUND");
  //     const pBDataFromLocal = JSON.parse(localStorage.getItem('pBData'));
  //     setFromLocal(pBDataFromLocal);
  //   }
  // }

  return (
    <div className="App">
      <div className="Main">
        <DrawerComponent />
      </div>
    </div>
  );
}

export default App;
