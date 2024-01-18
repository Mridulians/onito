import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData1 {
  fullName: string;
  age: number;
  number: string;
  sex: string;
  aadhar: string;
  pan: string;
}

interface FormData2 {
  address: string;
  pincode: number;
  state: string;
  country: string;
}

interface FormState {
  formData1: FormData1[];
  formData2: FormData2[];
}

const initialState: FormState = {
  formData1: [],
  formData2: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData1: (state, action: PayloadAction<FormData1>) => {
      state.formData1.push(action.payload);
    },
    setFormData2: (state, action: PayloadAction<FormData2>) => {
      state.formData2.push(action.payload);
    },
  },
});

export const { setFormData1, setFormData2} = formSlice.actions;
export default formSlice.reducer;
