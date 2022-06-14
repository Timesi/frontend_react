import React from 'react';

const CarContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    addItem: () => {
    },
    removeItem: () => {
    }
});
 
export default CarContext;