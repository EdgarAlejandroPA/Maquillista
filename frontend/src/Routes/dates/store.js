import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const MakeupDateContext = createContext();

export const MakeupDateProvider = ({ children }) => {
    const { id } = useParams(); // ID de la cita
    const [dateInfo, setDateInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDateInfo = async () => {
          try {
            let url = `http://localhost:4000/makeups/dates/${id}`;
            console.log("url", url)
            const response = await axios.get(url);
            setDateInfo(response.data);
          } catch (err) {
            console.log("Error", err);
            setError("Error al obtener la información de la cita.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchDateInfo();
    }, [id]);

    return (
        <MakeupDateContext.Provider value={{ id, dateInfo, loading, error }}>
            {children}
        </MakeupDateContext.Provider>
    );
};

export const useMakeupDateContext = () => useContext(MakeupDateContext);
