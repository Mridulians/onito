import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch, useSelector } from 'react-redux';
import { setFormData1 } from '../Redux/Slice';
import Form2 from './Form2'
import { useState } from "react";

const Step1Form = () => {

  const [form, setForm] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (data:object) => {
    setForm(data);
    setCurrentStep(2);
  };

  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    age: yup.number().positive().integer().required("should be a positiove integer"),
    number: yup
      .string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    sex: yup.string().required(),

    aadhar: yup.string().required("required").matches(/^[2-9]\d{11}$/, 'Aadhar should have 12 numeric digits and should not start with 0 and 1.'),

    pan:yup.string().required("required").matches(/^[A-Za-z0-9]{10}$/, 'PAN should be a ten-character long alpha-numeric string.'),

  
  });

  const { register , handleSubmit , reset} = useForm({
    resolver: yupResolver(schema),
  });



 
  const formData1 = useSelector((state:any) => state.form.formData1);

  const onSubmit = (data: any) => {
    dispatch(setFormData1({ id: formData1.length + 1, ...data }));
    handleNext(form)
    reset();
  };


  return (
<>
    {currentStep===1 && 
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4rem",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HowToRegIcon />
      </Avatar>
      <Typography component="h1">Registration Form </Typography>

      <Box component="form" sx={{ width: "40%", mt: "2rem" }} onSubmit={handleSubmit(onSubmit)}> 
        <FormControl
          fullWidth
          sx={{ mb: "1rem" }}
          
        >
          <TextField
            label="FullName"
            variant="filled"
            required
            {...register("fullName" , {pattern:{value:/^[A-Za-z0-9]{10}$/ , message:"FullName is Required"}})}
            type="text"
          />
          <br />
          <TextField
            label="Age"
            required
            variant="filled"
            {...register("age")}
            type="number"
          />
          <br />
          <TextField
            label="Enter Number"
            variant="filled"
            required
            {...register("number")}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          />
          <br />
          <TextField label="Sex" variant="filled" {...register("sex")} select required>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
          </TextField>
          <br />
        
            <TextField
              required
              variant="filled"
              placeholder="Enter Aadhar Number"
              {...register("aadhar")}
            />
          <br />

            <TextField
              required
              variant="filled"
              placeholder="Enter PAN Number"
              {...register("pan")}
            />
         
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: "3", mb: "2" }}
          >
            Next
          </Button>
        </FormControl>
      </Box>
    </Box>
          }

{currentStep === 2 && <Form2 />}
    </>
  );
};

export default Step1Form;


