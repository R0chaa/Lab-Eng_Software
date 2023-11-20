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
import { getMorador } from 'App';

const steps = ['Período', 'Confirmação'];

interface CheckoutProps {
  localId: number;
}

export default function Checkout({ localId }: CheckoutProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [datetimeJson, setDatetimeJson] = React.useState<JsonStructure | null>(null);
  const morador = getMorador();

  const handleNext = () => {
    if (activeStep == steps.length -1){
      onConfirm();
      setActiveStep(activeStep + 1);
    }else{
      if (activeStep === 0){
        setDatetimeJson(datetimeJson);
      }
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <PaymentForm onChangeJson={setDatetimeJson}/>
      case 1:
        return <Review/>;
      default:
        throw new Error('Unknown step');
    }
  }
  
  const onConfirm = () => {
    fetch('http://localhost:4000/reserva', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dia:datetimeJson?.currentDate.date,
        horario: datetimeJson?.currentDate.time,
        id_morador: morador.id,
        id_localidade: localId,
      }),

    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return response.json();
    })
    .then((reservaCriada) => {
      console.log('Reserva criada com sucesso:', reservaCriada);
    })
    .catch((error) => {
      console.error('Erro na inserção de reserva:', error);
    });
  }

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

  const jsonStructure = React.useMemo(() => {
    const currentDateObject = value
      ? {
          date: value.format("YYYY-MM-DD"),  // Modificado para o formato ISO 8601
          time: value.format("HH:mm:ss"),   // Modificado para incluir segundos
        }
      : {
          date: "",
          time: "",
        };
  
    return {
      currentDate: currentDateObject,
    };
  }, [value]);
  
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

export function PaymentForm({ onChangeJson }: BasicDateRangePickerProps) {
  const handleJsonChange = (json: JsonStructure) => {
    onChangeJson(json)
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