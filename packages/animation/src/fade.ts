import { animate, AnimateParams } from "./core";

export const fades = {
  in: (params: AnimateParams) => {
    animate({ opacity: [0, 1], ...params });
  },
  out: (params: AnimateParams) => {
    animate({ opacity: [1, 0], ...params });
  },
};
