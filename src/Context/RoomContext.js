import React, { createContext } from "react";

export const RoomConsumer = createContext();

const RoomContext = ({ children }) => {
  return (
    <RoomConsumer.Provider value={{ hello: "hello World" }}>
      {children}
    </RoomConsumer.Provider>
  );
};

export default RoomContext;
