import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type OpenedDrawer = {
	cart: boolean;
	kitchen: boolean;
};

export type DrawersContextType = {
	openedDrawer: OpenedDrawer;
	setOpenedDrawer: Dispatch<SetStateAction<OpenedDrawer>>;
};

const defaultState = {
	openedDrawer: { cart: false, kitchen: false },
	setOpenedDrawer: (openedDrawer: OpenedDrawer) => { }
} as DrawersContextType;

export const DrawersContext = createContext(defaultState);

type Props = {
	children: ReactNode;
};

export default function DrawersProvider({ children }: Props) {
	const [openedDrawer, setOpenedDrawer] = useState<OpenedDrawer>({ cart: false, kitchen: false });
	return <DrawersContext.Provider value={{ openedDrawer, setOpenedDrawer }}>{children}</DrawersContext.Provider>;
}