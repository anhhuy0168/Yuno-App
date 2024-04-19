import styled from 'styled-components';

const Wrapper = styled.section`
  table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table th {
    text-align: center;
  }

  table td {
    text-align: center;
  }

  .order-container {
    padding: 15px; /* Bắt đầu với padding 15px cho mọi kích thước màn hình */
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  .product-details {
    font-size: 14px; /* Kích thước phông chữ mặc định 14px */
    margin-left: 10px;
    text-align: left !important;
    margin-bottom: 5px;
  }

  .product-item {
    margin-bottom: 20px; /* Khoảng cách giữa các mục sản phẩm */
  }

  /* Media query cho màn hình lớn hơn 768px */
  @media screen and (min-width: 768px) {
    .order-container {
      padding: 20px; /* Tăng padding cho màn hình lớn hơn */
    }

    table {
      font-size: 16px; /* Tăng kích thước phông chữ cho bảng */
    }

    .product-details {
      font-size: 14px; /* Tăng kích thước phông chữ cho chi tiết sản phẩm */
    }
  }

  /* Media query cho màn hình lớn hơn 1024px */
  @media screen and (min-width: 1024px) {
    .order-container {
      padding: 30px; /* Tăng padding cho màn hình lớn hơn nữa */
    }

    table {
      font-size: 18px; /* Tăng kích thước phông chữ cho bảng */
    }

    .product-details {
      font-size: 16px; /* Tăng kích thước phông chữ cho chi tiết sản phẩm */
    }
  }

  /* Media query cho màn hình nhỏ hơn 768px */
  @media screen and (max-width: 768px) {
    .order-container {
      padding: 10px; /* Giảm padding cho màn hình nhỏ hơn */
      font-size: 12px; /* Giảm kích thước phông chữ cho nội dung */
    }

    table {
      font-size: 12px; /* Giảm kích thước phông chữ cho bảng */
    }

    .product-details {
      font-size: 10px; /* Giảm kích thước phông chữ cho chi tiết sản phẩm */
    }

    .product-item {
      margin-bottom: 10px; /* Giảm khoảng cách giữa các mục sản phẩm */
    }
  }

  /* Media query cho màn hình nhỏ hơn 576px (Điện thoại di động) */
  @media screen and (max-width: 576px) {
    .order-container {
      padding: 5px; /* Giảm padding cho màn hình di động */
      font-size: 10px; /* Giảm kích thước phông chữ cho nội dung */
    }

    table {
      font-size: 10px; /* Giảm kích thước phông chữ cho bảng */
    }

    .product-details {
      font-size: 8px; /* Giảm kích thước phông chữ cho chi tiết sản phẩm */
    }

    .product-item img {
      width: 25px; /* Giảm kích thước ảnh sản phẩm */
      height: 25px; /* Giảm kích thước ảnh sản phẩm */
    }
  }
`;