import {
  SET_CONNECTION_STATUS,
  SHOW_CONNECTION_MODAL,
  SET_PROCESSING,
  SET_FETCHING_ERROR
} from '../actions/types';

const initialState = {
  connectStatus: {
    metamask: false,
    network: 0,
    verified: false
  },
  isConnectModalOpen: false,
  isProcessing: false,
  fetchingError: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CONNECTION_STATUS:
      return {
        ...state,
        connectStatus: action.payload
      };
    case SET_PROCESSING:
      return {
        ...state,
        isProcessing: action.payload
      };
    case SET_FETCHING_ERROR:
      return {
        ...state,
        fetchingError: [...state.fetchingError, action.payload]
      };
    case SHOW_CONNECTION_MODAL:
      return {
        ...state,
        isConnectModalOpen: action.payload
      };
    default:
      return state;
  }
}
