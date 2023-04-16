import {Action} from './constants';

export const intialState = {
  loading: false,
  data: {},
  error: false,
};

export const reducer = (state = intialState, action: any) => {
  switch (action.type) {
    case Action.GETDATALOADING:
      return {
        ...state,
        loading: true,
      };
    case Action.GETDATALOADED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case Action.GETDATALOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      break;
  }
};
