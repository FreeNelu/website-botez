import { keyframes } from "@emotion/react";

export const fadeInAndSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const fadeInAndSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const fadeInAndSlideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const fadeInAndSlideRight = keyframes`
0% {
  opacity: 0;
  transform: translateX(100%);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;
export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
