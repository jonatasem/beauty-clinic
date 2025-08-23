export const fetchApiData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        beforeAfterPhotos: [
          {
            id: 1,
            before: '/images/before.jpg',
            after: '/images/after.jpg',
          },
          {
            id: 2,
            before: '/images/before.jpg',
            after: '/images/after.jpg',
          },
          {
            id: 3,
            before: '/images/before.jpg',
            after: '/images/after.jpg',
          },
          {
            id: 4,
            before: '/images/before.jpg',
            after: '/images/after.jpg',
          }
        ],
        promotionalCombos: [
          {
            id: 1,
            name: 'Combo Limpeza de Pele',
            image: '/assets/images/combo_1.jpg',
            price: 150.00,
            details: 'Limpeza profunda, extração de cravos e máscara hidratante.',
          },
          {
            id: 2,
            name: 'Combo Massagem Relaxante',
            image: '/assets/images/combo_2.jpg',
            price: 180.00,
            details: 'Massagem corporal completa com óleos essenciais.',
          },
        ],
      };
      resolve(data);
    }, 500);
  });
};