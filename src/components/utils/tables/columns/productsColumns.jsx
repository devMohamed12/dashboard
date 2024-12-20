

export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 150 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "sup", headerName: "Sup", width: 150 },
  { field: "price", headerName: "Price", width: 150 },
  {
    field: "imageSrc",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img src={params.value} alt="item" style={{ width: "100%" }} />
    ),
  },
  
  
];
