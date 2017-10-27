import { SELECTED_MONUMENT } from '../actions/index'


export default function selectMonument(state = null, action) {
  switch (action.type) {
    case SELECTED_MONUMENT:
      {
        return action.selected;
      }
  }
  return state
}
