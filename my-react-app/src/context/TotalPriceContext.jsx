import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const TotalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const TotalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(TotalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

TotalPriceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TotalPrice = TotalPriceContext;
export const TotalPriceDispatch = TotalPriceDispatchContext;
