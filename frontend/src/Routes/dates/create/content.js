import React, { useState } from "react";
import { useDatesContext } from "./store";
import { TextField, Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import axios from "axios";

export const Content = () => {
  const { makeupArtistId, makeupArtist } = useDatesContext();
  const [formData, setFormData] = useState({ name: "", email: "", date: "", time: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const iniSchedule = 8; // Horario inicial (8:00 AM)
  const endSchedule = 20; // Horario final (8:00 PM)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { time } = formData;
    const hour = parseInt(time.split(":")[0], 10);

    if (hour < iniSchedule || hour > endSchedule) {
      setErrorMessage(`La hora debe estar entre ${iniSchedule}:00 y ${endSchedule}:00`);
      setShowErrorToast(true);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/makeups/dates/create", {
        makeupArtistId,
        ...formData,
      });

      if (response.data.id && response.data.message) {
        setSuccessMessage(response.data.message);
        setShowSuccessToast(true);
        setFormData({ name: "", email: "", date: "", time: "" });
        setTimeout(()=>window.location.pathname = `/dates/${response.data.id}`)
      } else {
        throw new Error("Hubo un error al crear la cita.");
      }
    } catch (err) {
      setErrorMessage("Error al crear la cita.");
      setShowErrorToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Agendar una Cita {makeupArtist && `[ ${makeupArtist.name} ${makeupArtist.second_name} ]`}
      </Typography>
      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Fecha"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        label="Hora"
        name="time"
        type="time"
        value={formData.time}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} disabled={loading}>
        {loading ? "Cargando..." : "Enviar"}
      </Button>

      {/* Toasts */}
      <Snackbar
        open={showSuccessToast}
        autoHideDuration={3000}
        onClose={() => setShowSuccessToast(false)}
      >
        <Alert onClose={() => setShowSuccessToast(false)} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorToast}
        autoHideDuration={3000}
        onClose={() => setShowErrorToast(false)}
      >
        <Alert onClose={() => setShowErrorToast(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
