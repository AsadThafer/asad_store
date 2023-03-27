const paymentMethods = [
  {
    id: 1,
    name: "بنك فلسطين",
    tax: false,
  },
  {
    id: 2,
    name: "جوال باي",
    tax: false,
  },
  {
    id: 3,
    name: " كاش في نقطة دفع - طولكرم",
    tax: false,
  },
  {
    id: 4,
    name: "رصيد جوال",
    tax: true,
    taxrate: 10,
  },
];

export default paymentMethods;
