import { atom,selector } from "recoil";

export const Atomn = atom({
  key : "Atomn",
  default : 0

});

export const Atomn2 = selector({
  key : "Atomn2",
  default : 0,
  get:({get})=>{
    const atomnValue =get(Atomn)
  }
});