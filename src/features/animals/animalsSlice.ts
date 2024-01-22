import { createAppSlice } from "../../app/createAppSlice"

const initialState = {
  animals: [],
}

export const animalsSlice = createAppSlice({
  name: "animals",
  initialState,
  reducers: {}
})
