import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  storage: localStorage,
});

export const categoriesState = atom<string[]>({
  key: "categories",
  default: ["TO_DO", "DOING", "DONE"],
  effects_UNSTABLE: [persistAtom],
});

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
