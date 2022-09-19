import { createContext, useReducer, Dispatch } from 'react'
import { CartItems } from './App';

type CountProviderProps = {
	children: React.ReactNode;
};
interface State {
	products: CartItems
}
interface Action {
	type: 'update',
	payload: CartItems
}

export const CartContext = createContext<{
	state: {
		products: CartItems
	}
	dispatch: Dispatch<Action>
}| undefined>(undefined)

export const CartProvider = ({ children }: CountProviderProps) => {
	const [state, dispatch] = useReducer(cartReducer, { products: [] });
	const value = { state, dispatch }
	return <CartContext.Provider value={ value }>{children}</CartContext.Provider>;
};

const cartReducer = (state: State, action: Action) => {
	switch (action.type) {
	  case 'update': 
		return { 
			...state,
			products: action.payload
		}
	  default:
		throw new Error('Unhandle action type of cartReducer');
	}
};
