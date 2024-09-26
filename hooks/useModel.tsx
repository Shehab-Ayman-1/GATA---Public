import { create } from "zustand";

type Data = Record<string, any>;

type TModel = {
    type: string;
    data: Data;
    open: boolean;
    onClose: () => void;
    onOpen: (type?: string, data?: Data) => void;
};

export const useModel = create<TModel>((set) => ({
    type: "",
    data: {},
    open: false,
    onClose: () => set({ type: "", data: {}, open: false }),
    onOpen: (type?: string, data?: Data) => set({ type: type || "", data: data || {}, open: true }),
}));
