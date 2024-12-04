import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MakeupContext = createContext();

export const MakeupProvider = ({ children }) => {
  const [makeupArtist, setMakeupArtist] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const makeupResponse = await axios.get("http://localhost:4000/makeups/1");
        if (makeupResponse && makeupResponse.data) {
          setMakeupArtist(makeupResponse.data);

          const productsResponse = await axios.get(
            "http://localhost:4000/makeups/1/products"
          );
          if (productsResponse && productsResponse.data) {
            setProducts(productsResponse.data);
          }
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

    fetchData();
  }, []);

  return (
    <MakeupContext.Provider value={{ makeupArtist, products, loading, error }}>
      {children}
    </MakeupContext.Provider>
  );
};

export const useMakeupContext = () => useContext(MakeupContext);
