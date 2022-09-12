import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'question',
  initialState: {
    answer: '',
  },
  reducers: {
    question: (state, action) => {
      console.log(action.payload);
      if (action.payload === 'Actions') {
        state.answer =
          'Actions là 1 javaScript object gồm 2 properties là type và payload báo cho redux phải làm gì tiếp theo';
      } else if (action.payload === 'Reducer') {
        state.answer =
          'Reducer là nơi nhận payload từ action,state cũ, để tính toán cập nhật state';
      } else if (action.payload === 'Store') {
        state.answer = 'Là nơi chứa tất cả các reducer';
      }
    },
  },
});
export const questionAction = questionSlice.actions;

const questionReducer = questionSlice.reducer;
export default questionReducer;
