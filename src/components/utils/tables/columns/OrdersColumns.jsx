// Define the columns for the DataGrid
export const OrdersColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "customer_id", headerName: "Customer ID", width: 130 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "government", headerName: "Government", width: 150 },
  { 
    field: "products", 
    headerName: "Products", 
    width: 130,
    renderCell: (params) => {
      return (
        <div>
          {params.value.map((product, index) => (
            <div key={index}>
              {/* <div>Product ID: {product.product_id}</div> */}
              <div>Price: {product.price}</div>
              <div>Quantity: {product.quantity}</div>
            </div>
          ))}
        </div>
      );
    }
  },
//   { field: "price", headerName: "Price", width: 100 },
//   { field: "quantity", headerName: "Quantity", width: 100 },
];
