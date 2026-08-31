import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { parseXML } from '../../utils/xmlParser';

export const fetchPortfolioData = createAsyncThunk(
  'portfolio/fetchAll',
  async (_, { rejectWithValue }) => {
    const files = ['profile', 'experience', 'skills', 'certifications', 'awards', 'education'];
    try {
      const responses = await Promise.all(
        files.map((f) => fetch(`${process.env.PUBLIC_URL}/data/${f}.xml`))
      );
      const texts = await Promise.all(responses.map((r) => r.text()));
      const [profile, experience, skills, certifications, awards, education] = texts.map(parseXML);
      return { profile, experience, skills, certifications, awards, education };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    profile: null,
    experience: null,
    skills: null,
    certifications: null,
    awards: null,
    education: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default portfolioSlice.reducer;
