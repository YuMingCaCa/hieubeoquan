// js/config.js
// Thay đổi các giá trị này để thiết lập cho một nhà hàng mới.
// QUAN TRỌNG: restaurantId phải là duy nhất, không dấu, không khoảng trắng, viết liền.
// Ví dụ cho quán mới:
// export const restaurantId = 'pho-gia-truyen';
// export const restaurantName = 'Phở Gia Truyền';
export const restaurantId = 'hieubeoquan'; // <-- THAY MÃ ĐỊNH DANH QUÁN MỚI VÀO ĐÂY
export const restaurantName = 'Quán Hiếu Béo - Địa chỉ vườn mơ'; // <-- THAY TÊN QUÁN MỚI VÀO ĐÂY

// Cấu hình BASE_URL cho việc triển khai trên GitHub Pages hoặc các môi trường khác.
// Khi chạy cục bộ (ví dụ với Live Server), giữ nguyên là ''.
// Khi triển khai lên GitHub Pages, thay đổi thành '/tên_repository_của_bạn' (ví dụ: '/TestQuan').
export const BASE_URL = '/hieubeoquan'; // <-- THAY ĐỔI KHI TRIỂN KHAI LÊN GITHUB PAGES, PHẢI BẮT ĐẦU BẰNG DẤU "/"
