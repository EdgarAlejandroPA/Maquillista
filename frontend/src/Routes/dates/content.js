import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useMakeupDateContext } from "./store";

export const Content = ()=> {
    const {loading, error, dateInfo} = useMakeupDateContext();
    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (dateInfo) return (
      <Card>
        <CardContent>
          <Typography variant="h5">Información de la Cita</Typography>
          <Typography>Nombre del Cliente: {dateInfo.client_name}</Typography>
          <Typography>Fecha: {dateInfo.description}</Typography>
          <Typography>Estatus: {dateInfo.status}</Typography>
        </CardContent>
      </Card>
    );
    return null;
}