import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Review from './Review';
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { getUser } from 'App';
import { useNavigate } from 'react-router-dom';

const steps = ['Período', 'Confirmação'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PaymentForm />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const idUser = getUser();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Reserva de ambiente
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (

            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Reserva confirmada.
              </Typography>
              <Typography variant="subtitle1">
                Agradecemos pela confiança.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Voltar
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {
                  activeStep === steps.length - 1 ? 'Confirmar' : 'Próximo'
                  
                  }
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export interface JsonStructure {
  currentDate: {
    date: string;
    time: string;
  };
}

interface BasicDateRangePickerProps {
  onChangeJson: (json: JsonStructure) => void;
}

export function BasicDateRangePicker({ onChangeJson }: BasicDateRangePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17 17:30")
  );

  const currentDateObject = value
    ? {
        date: value.format("DD-MM-YYYY"),
        time: value.format("HH:mm"),
      }
    : {
        date: "",
        time: "",
      };

  const jsonStructure: JsonStructure = {
    currentDate: currentDateObject,
  };

  // Chama a função de retorno de chamada fornecida pelo componente pai
  React.useEffect(() => {
    onChangeJson(jsonStructure);
  }, [jsonStructure, onChangeJson]);

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

export function PaymentForm() {
  const handleJsonChange = (json: JsonStructure) => {
    console.log(json);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Período da reserva
        <BasicDateRangePicker onChangeJson={handleJsonChange} />
      </Typography>
    </React.Fragment>
  );
}