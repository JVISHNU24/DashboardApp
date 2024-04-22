import React, { useState, useEffect } from "react";
import { Table, Input, Button, Modal, Form, InputNumber } from "antd";
import axios from "axios";
  const ProductPage=({isOpen})=>{
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleSearch = (value) => {
    setSearchText(value);
  };
  const handleAddProduct=()=>{
    setEditProduct(null);
    setShowForm(true);
  }
  const handleEdit = (record) => {
    setEditProduct(record);
    setShowForm(true);
  };
  const handleDelete=(record)=>{
    setProducts(products.filter((product)=>product.id!==record.id));
  };
  const handleSubmit = (values) => {
    if (editProduct) {
      const updatedProducts = products.map((product) =>
        product.id === editProduct.id ? { ...product, ...values } : product
      );
      setProducts(updatedProducts);
    } else {
      const newProduct = { ...values, id: products.length + 1 };
      setProducts([...products, newProduct]);
    }
    setShowForm(false);
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
    <div className={`flex ${isOpen ? "ml-64 w-4/5" : "w-full"}`}>
      <div className="bg-gray-100 w-full min-h-screen">
        <h1 className="text-2xl font-bold mb-4 p-4">Product Page</h1>
          <div className="flex justify-center mb-4 p-4">
          <Input.Search
            placeholder="Search products"
            onChange={(e) => handleSearch(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <Button
            type="primary"
            onClick={handleAddProduct}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Products
          </Button>
        </div>
        <div className="flex justify-center p-4">
          <div className="bg-white p-4 rounded-lg shadow-2xl w-full">
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
          title={editProduct ? "Edit Product" : "Add Product"}
          visible={showForm}
          onCancel={() => setShowForm(false)}
          footer={null}
        >
          <ProductForm
            product={editProduct}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      </div>
    </div>
  );
};
const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
    }
  }, [product, form]);
  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };
  return (
    <Form form={form} onFinish={handleFinish} layout="vertical">
      <Form.Item label="ID" name="id" hidden>
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Name"
        name="title"
        rules={[{ required: true, message: "Please enter the product name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[
          { required: true, message: "Please enter the product category" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter the product price" }]}
      >
        <InputNumber min={0} precision={2} />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please enter the product description" },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Image URL"
        name="image"
        rules={[
          { required: true, message: "Please enter the product image URL" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Rating Rate"
        name={["rating", "rate"]}
        rules={[
          { required: true, message: "Please enter the product rating rate" },
        ]}
      >
        <InputNumber min={0} max={5} precision={1} />
      </Form.Item>
      <Form.Item
        label="Rating Count"
        name={["rating", "count"]}
        rules={[
          { required: true, message: "Please enter the product rating count" },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {product ? "Update" : "Add"}
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ProductPage;
