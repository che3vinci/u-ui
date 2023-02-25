import { dbg } from "@c3/dbg";
import { default as anime, default as _anime } from "animejs";
//@ts-ignore
window.__anime = _anime;
export type AnimateParams = anime.AnimeParams;

export const animate = (...animeParams: AnimateParams[]) => {
  const instances = [];
  for (const param of animeParams) {
    instances.push(
      _anime({
        update: ins => {
          dbg(
            "progress",
            ins.progress,
            ins.animations.map(
              a =>
                `target:${a.animatable.target.tagName}, ${a.property}:${a.currentValue}`
            )
          );
        },
        ...param,
      })
    );
  }
  return instances.length === 1 ? instances[0] : instances;
};

export const useAnime = () => animate;
