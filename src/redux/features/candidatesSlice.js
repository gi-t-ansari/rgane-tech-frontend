import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch candidates
export const fetchCandidates = createAsyncThunk(
  "candidates/fetchCandidates",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/candidates", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to filter candidates based on search
export const searchCandidates = createAsyncThunk(
  "candidates/searchCandidates",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/candidates?search=${searchQuery}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const candidatesSlice = createSlice({
  name: "candidates",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCandidates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCandidates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(searchCandidates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchCandidates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(searchCandidates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default candidatesSlice.reducer;
