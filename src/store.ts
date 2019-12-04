import { createStore } from "redux";

import memeHolderReducer from "./state/MemeHolder/reducer";

const store = createStore(memeHolderReducer);

export default store;
