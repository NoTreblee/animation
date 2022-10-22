anime({
  targets: '.square',
  opacity: 0.7,
  translateY: anime.stagger(-100, { grid: [15, 5], from: 'center', axis: 'y' }),
  translateX: anime.stagger(20, { grid: [15, 5], from: 'center', axis: 'x' }),
  // rotateX: anime.stagger(120, { grid: [15, 5], from: 'center', axis: 'x' }),
  rotateZ: {
    value: anime.stagger([90, 180, 360], {
      grid: [15, 5],
      from: 'center',
      axis: 'Z',
    }),
  },
  delay: anime.stagger(70, { grid: [100, 50], from: 'center' }),
  loop: true,
  direction: 'alternate',
  duration: 2000,
  easing: 'easeInOutQuad',
  // rotate: {
  //   value: anime.stagger(1),
  //   delay: anime.stagger(1),
  //   loop: true,
  //   easing: 'easeInOutQuad',
  //   duration: 12000,
  //   loop: true,
  // },
});
