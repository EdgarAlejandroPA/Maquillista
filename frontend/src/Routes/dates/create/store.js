import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DatesContext = createContext();

export const DatesProvider = ({ children }) => {
  const { id } = useParams(); 
  const makeupArtistId = id || 1; 
  const [makeupArtist, setMakeupArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async (id) => {
      try {
        setLoading(true);
        const makeupResponse = await axios.get("http://localhost:4000/makeups/"+id||1);
        if (makeupResponse && makeupResponse.data) {
          setMakeupArtist(makeupResponse.data);
        } else {
          throw new Error(`Error en la solicitud`);
        }
      } catch (err) {
        console.error("Error en fetchData:", err);
        setError(err.message);
      } finally {
        setTimeout(()=>setLoading(false),1000)
      }
    };

    fetchData(id);
  }, []);
  return (
    <DatesContext.Provider value={{ makeupArtistId, makeupArtist, loading, error }}>
      {children}
    </DatesContext.Provider>
  );
};

export const useDatesContext = () => useContext(DatesContext);
