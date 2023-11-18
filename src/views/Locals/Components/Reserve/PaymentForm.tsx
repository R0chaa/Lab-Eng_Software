import * as React from "react";
import Typography from "@mui/material/Typography";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";

export function BasicDateRangePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17 17:30")
  );

  console.log("Dia: ", value?.get("D"));
  console.log("Mes: ", value?.get("M"));
  console.log("Ano: ", value?.get("y"));
  console.log("Hora", value?.get("hour"));
  console.log("Min: ", value?.get("m"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimeField"]}>
        <DateTimeField
          label="Horario"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="L HH:mm"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Período da reserva
        <BasicDateRangePicker />
      </Typography>
    </React.Fragment>
  );
}
