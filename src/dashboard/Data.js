export const financialData = [
  {
    label: "Income",
    value: "37,500",
    chip: "Monthly",
    percentage: "+14%",
  },
  {
    label: "Expenses",
    value: "20,000",
    chip: "Monthly",
    percentage: "-5%",
  },
  {
    label: "Profit",
    value: "17,500",
    chip: "Monthly",
    percentage: "+9%",
  },
  {
    label: "Monthly target",
    value: "17,500",
    chip: "Monthly",
    percentage: "+9%",
  },
];

export const salesData = {
  xAxis: [{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], label: "Months" }],
  series: [
    { data: [2, 5.5, 2, 8.5, 1.5, 5, 6.5, 7, 4.5, 6], label: "Sales" },
    { data: [1.5, 3, 1, 7, 2, 4.5, 5.5, 6, 3.5, 4], label: "Revenue" },
  ],
};

export const ordersData = [
  {
    label: "All Orders",
    value: "1,200",
    chip: "Monthly",
    percentage: "+10%",
  },
  {
    label: "Cancelled",
    value: "150",
    chip: "Monthly",
    percentage: "-2%",
  },
  {
    label: "Returns",
    value: "50",
    chip: "Monthly",
    percentage: "-1%",
  },
  {
    label: "Pending",
    value: "300",
    chip: "Monthly",
    percentage: "+5%",
  },
];

export const CategoriesData = [
  {
    data: [
      { id: 0, value: 10, label: "Taps" },
      { id: 1, value: 15, label: "Shelvings" },
      { id: 2, value: 20, label: "Cooks" },
      { id: 3, value: 20, label: "Chairs" },
    ],
  },
];

export const productColumns = [
  { field: "id", headerName: "id", minWidth: 60, maxWidth: 90 },
  {
    field: "title",
    headerName: "Product title",
    minWidth: 130,
    maxWidth: 170,
  },
  {
    field: "category",
    headerName: "Category",
    minWidth: 100,
    maxWidth: 150,
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 100,
    maxWidth: 150,
  },
  // {
  //   field: "image",
  //   headerName: "Image",
  //   minWidth: 80,
  //   maxWidth: 120,
  //   renderCell: (params) => (
  //     <img
  //       src={params.value}
  //       alt={params.row.title}
  //       style={{ width: "50px", height: "50px", objectFit: "cover" }}
  //     />
  //   ),
  // },
];

export const VisitsLabels = [
  "Quarter 1",
  "Quarter 2",
  "Quarter 3",
  "Quarter 4",
];

export const VisitsData = [
  { data: [3200, 3800, 4500, 4900], label: "Facebook", color: "#4E91FC" },
  { data: [2100, 2500, 3100, 4000], label: "Twitter", color: "#1DA8FF" },
  { data: [4700, 5500, 6100, 7200], label: "Instagram", color: "#FF6D8B" },
  { data: [1800, 2200, 2900, 3400], label: "LinkedIn", color: "#4DB6AC" },
];

export const topCountriesSalesData = [
  { name: "Turkey", sales: 8500, trend: "up", countryCode: "TR" },
  { name: "Belgium", sales: 7400, trend: "up", countryCode: "BE" },
  { name: "Sweden", sales: 6200, trend: "down", countryCode: "SE" },
  { name: "Vietnam", sales: 9200, trend: "up", countryCode: "VN" },
  { name: "Australia", sales: 5800, trend: "down", countryCode: "AU" },
  { name: "Saudi Arabia", sales: 6700, trend: "down", countryCode: "SA" },
];

export const topCountriesVisitsData = [
  { name: "USA", visits: 250000, trend: "up", countryCode: "US" },
  { name: "Germany", visits: 210000, trend: "down", countryCode: "DE" },
  { name: "France", visits: 185000, trend: "up", countryCode: "FR" },
  { name: "Italy", visits: 162000, trend: "up", countryCode: "IT" },
  { name: "Spain", visits: 138000, trend: "down", countryCode: "ES" },
  { name: "Japan", visits: 122000, trend: "up", countryCode: "JP" },
];

