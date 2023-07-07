// import React from "react";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";



// export const useSwipe = () => {
//   const [touchStart, setTouchStart] = React.useState(null);
//   const [touchEnd, setTouchEnd] = React.useState(null);

//   // the required distance between touchStart and touchEnd to be detected as a swipe
//   const minSwipeDistance = 50;

//   const onTouchStart = () => () => {
//     ev = React.TouchEvent
//     setTouchEnd(null);
//     setTouchStart(ev.targetTouches[0].clientX);
//   };

//   const onTouchMove = () => () => {
//     ev = React.TouchEvent
//     setTouchEnd(ev.targetTouches[0].clientX);
//   };

//   const onTouchEnd = () => () => {
//     const { scrollPrev } = useContext(VisibilityContext);
//     const { scrollNext } = useContext(VisibilityContext);
//     if (!touchStart || !touchEnd) return false;
//     const distance = touchStart - touchEnd;
//     const isSwipe = Math.abs(distance) > minSwipeDistance;
//     const isLeftSwipe = distance < minSwipeDistance;
//     console.log({ isSwipe, isLeftSwipe });
//     if (isSwipe) {
//       if (isLeftSwipe) {
//         scrollPrev();
//       } else {
//         scrollNext();
//       }
//     }
//   };

//   return { onTouchStart, onTouchEnd, onTouchMove };
// };
