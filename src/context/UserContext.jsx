import React, { createContext, useState } from 'react';

export const dataContext = createContext();

export let user = {
   data: null,
   mime_type: null,
   imgUrl: null
};

export let prevUser = {
   data: null,
   mime_type: null,
   prompt: null,
   imgUrl: null
};

function UserContext({ children }) {
   const [startRes, setStartRes] = useState(false);
   const [popUp, setPopUp] = useState(false);
   const [input, setInput] = useState("");
   const [feature, setFeature] = useState("chat");
   const [showResult, setShowResult] = useState("");
   const [prevFeature, setPrevFeature] = useState("chat");
   const [genImgUrl, setGenImgUrl] = useState("")

   const value = {
      startRes, setStartRes,
      popUp, setPopUp,
      input, setInput,
      feature, setFeature,
      showResult, setShowResult,
      prevFeature, setPrevFeature,
      genImgUrl, setGenImgUrl
   };

   return (
      <dataContext.Provider value={value}>
         {children}
      </dataContext.Provider>
   );
}

export default UserContext;
