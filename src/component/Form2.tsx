import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFormData2 } from '../Redux/Slice';

// import InputAdornment from "@mui/material/InputAdornment";



const Step2Form = () => {

  const dispatch = useDispatch();
  const formData2 = useSelector((state:any) => state.form.formData2);

  const schema = yup.object().shape({
    address: yup.string().optional(),
    pincode: yup.number().positive().integer().optional(),
    state: yup.string().optional(),
    city: yup.string().optional(),
    country: yup.string().required(),
  });

  const [ListCountry, setcountry] = useState([]);
  const countryNames = ListCountry.map((item) => item.name.common).sort();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountry(data));
  }, []);

  const { register , handleSubmit , reset} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(setFormData2({ id: formData2.length + 1, ...data }));
    reset();
  };

 

 
  return (
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
      <Typography component="h1">Form</Typography>
      <Box
        component="form"
        sx={{ width: "40%", mt: "2rem" }} onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl fullWidth sx={{ mb: "1rem" }}>
          <TextField
            label="Address"
            variant="filled"
            {...register("address")}
            type="text"
          />
          <br />

          <TextField
            label="Pincode"
            variant="filled"
            {...register("pincode")}
            type="number"
          />
          <br />
          <TextField
            label="Country"
            variant="filled"
            {...register("country")}
            select
          >
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            {countryNames.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            label="State"
            variant="filled"
            {...register("state")}
            select
          >
            <MenuItem value="delhi">Delhi</MenuItem>
            <MenuItem value="mumbai">Mumbai</MenuItem>
          </TextField>
          <br />
          <TextField label="City" variant="filled" {...register("city")} select>
            <MenuItem value="delhi">Delhi</MenuItem>
            <MenuItem value="mumbai">Mumbai</MenuItem>
          </TextField>
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: "3", mb: "2" }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Step2Form;
