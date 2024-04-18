import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      render: (text, record) => <a href={`/products/${record.id}`}>{text}</a>,
      width: 450,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 200,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 120,
    },
  ];
  return (
    <div className="container mx-auto my-8 overflow-x-auto pl-4 pr-64">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex justify-end">
        <Table
          columns={columns}
          dataSource={products}
          rowKey="id"
          scroll={{ x: true }}
          className="table-right"
        />
      </div>
    </div>
  );
};
export default ProductPage;
