export default {
  home: {
    path: '/',
    label: 'Home',
  },
  inventory: {
    label: 'Inventory',
    path: '/inventory',
    cards: {
      path: '/inventory/cards',
      label: 'Cards',
    },
    card: { path: '/inventory/card/:id', label: 'Single Card' },
  },
};
