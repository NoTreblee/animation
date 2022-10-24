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
  delay: anime.stagger(500, { grid: [100, 50], from: 'center' }),
  loop: true,
  direction: 'alternate',
  duration: 21333,
  easing: 'easeInOutQuad',
  translateY: {
    value: '10000px',
    duration: 128000,
    easing: 'easeInOutQuad',
    delay: anime.stagger(500, { grid: [100, 50], from: 'center' }),
    loop: true,
  },
  scale: {
    value: 3,
    duration: 21333,
    easing: 'easeInOutQuad',
    delay: anime.stagger(500, { grid: [100, 50], from: 'center' }),
  },
  // rotate: {
  //   value: anime.stagger(1),
  //   // delay: anime.stagger(1),
    
  //   loop: true,
  //   easing: 'easeInOutQuad',
  //   duration: 12000,
  //   loop: true,
  // },
});
