import React, { useState, useEffect } from "react";
import { Table, Input, Button, Modal, Form, InputNumber } from "antd";
import axios from "axios";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false); 
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleSearch = (value) => {
    setSearchText(value);
  };
  const handleAddProduct = () => {
    setShowForm(true); 
  };
  const handleFormCancel = () => {
    setShowForm(false); 
  };
  const handleSubmit = (values) => {
    console.log("Form values:", values);
    setShowForm(false); 
  };
  const handleEdit = (record) => {
    console.log("Edit product:", record);
  };
  const handleDelete = (record) => {
    console.log("Delete product:", record);
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      render: (text, record) => <a href={`/products/${record.id}`}>{text}</a>,
      width: 500,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 300,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 300,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </span>
      ),
      width: 200,
    },
  ];
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4 ml-72"></h1>
      <div className="flex justify-center ml-72 mb-4">
        <Input.Search
          placeholder="Search products"
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300 }}
        />
        <Button
          type="primary"
          onClick={handleAddProduct}
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Products
        </Button>
      </div>
      <div className="flex justify-center ml-72">
        <div className="bg-white p-4 rounded-lg shadow-2xl h-full">
          <Table
            columns={columns}
            dataSource={filteredProducts}
            rowKey="id"
            scroll={{ x: true }}
            className="table-right"
          />
        </div>
      </div>
      <Modal
        title="Add Product"
        visible={showForm}
        onCancel={handleFormCancel}
        footer={null}
      >
        <ProductForm onSubmit={handleSubmit} onCancel={handleFormCancel} />
      </Modal>
    </div>
  );
};
const ProductForm = ({ onSubmit, onCancel }) => {
  const [form] = Form.useForm();
  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields(); 
  };
  return (
    <Form form={form} onFinish={handleFinish} layout="vertical">
      <Form.Item label="ID" name="id" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Category" name="category" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Image URL" name="image" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Rating Rate"
        name={["rating", "rate"]}
        rules={[{ required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Rating Count"
        name={["rating", "count"]}
        rules={[{ required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ProductPage;










