const INITIAL_STATE = {formattedAddress: 'Tbilisi, Georgia', currentLocation: null}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOCATION_RETRIEVED":
      return { ...state, currentLocation: action.payload }
    case "ADDRESS_RETRIEVED":
      return { ...state, formattedAddress: action.payload }
    default:
      return state
  }
}
