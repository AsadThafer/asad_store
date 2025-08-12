const paymentMethods = [
    {
    id: 1,
    name: "محفظة ريفلكت",
    tax: false,

  },
  {
    id: 2,
    name: "بنك فلسطين",
    tax: false,
  },
  {
    id: 3,
    name: " كاش في نقطة دفع - طولكرم",
    tax: true,
    taxrate: 3,
  },

  {
    id: 4,
    name: "رصيد جوال",
    tax: true,
    taxrate: 20,
  },
];

export default paymentMethods;
