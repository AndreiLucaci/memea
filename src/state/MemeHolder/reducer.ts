import { SET_IMAGES } from './constants';
import { initialState} from './initialstate';

export default(state = initialState, action: any) => {
  switch(action.type) {
    case SET_IMAGES: 
      return {
        ...state,
        images: action.payload
      }
  }
}
