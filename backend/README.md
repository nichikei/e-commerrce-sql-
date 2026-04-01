## Dự án tốt nghiệp - Backend sàn thương mại điện tử NghienDT

Backend REST API cho hệ thống thương mại điện tử, phục vụ cả storefront và admin dashboard.

## Công nghệ

- Java, Spring Boot, Spring Security
- Spring Data JPA, SQL Server/MySQL
- Maven

## Chức năng chính

- Xác thực người dùng, đăng ký/đăng nhập, xử lý JWT
- CRUD cho USER, CATEGORY, COMPANY, PRODUCT, ORDER, REVIEW, BANNER, SETTING
- Báo cáo doanh thu theo ngày và thống kê sản phẩm
- Upload file và phục vụ static resource

## Quy ước API CRUD

Áp dụng cho các resource chính như `user`, `category`, `company`, `product`, `order`, `review`.

| Method | URL             | Status Code      | Action                   |
|--------|-----------------|------------------|--------------------------|
| GET    | /api/(name)     | 200 (OK)         | Retrieve all (name)      |
| POST   | /api/(name)     | 201 (Created)    | Create a new (name)      |
| GET    | /api/(name)/:id | 200 (OK)         | Retrieve a (name) by :id |
| PUT    | /api/(name)/:id | 200 (OK)         | Update a (name) by :id   |
| DELETE | /api/(name)/:id | 204 (No Content) | Delete a (name) by :id   |

## Chạy backend

1. Cấu hình DB trong `src/main/resources/application.properties`.
2. Seed dữ liệu bằng script SQL trong thư mục gốc backend nếu cần.
3. Chạy lệnh:

```bash
./mvnw spring-boot:run
```

Trên Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

## License

Dự án sử dụng giấy phép MIT. Xem file `LICENSE` trong thư mục backend.
