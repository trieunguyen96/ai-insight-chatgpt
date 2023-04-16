# AI Insight ChatGPT / ChatGPT AI Insight

This repository contains a simple chat application that uses OpenAI's ChatGPT API to generate chatbot responses. The user interface is built with HTML, CSS, and JavaScript, while the server-side code is written in Node.js.

Kho lưu trữ này chứa một ứng dụng chat đơn giản sử dụng API ChatGPT của OpenAI để tạo ra các câu trả lời của chatbot. Giao diện người dùng được xây dựng với HTML, CSS và JavaScript, trong khi mã phía máy chủ được viết bằng Node.js.

## Prerequisites / Yêu cầu

- Node.js installed on your system / Cài đặt Node.js trên hệ thống của bạn
- An OpenAI API key / Một khoá API OpenAI

## Installation / Cài đặt

1. Clone this repository / Sao chép kho lưu trữ này:

git clone https://github.com/trieunguyen96/ai-insight-chatgpt.git

2. Navigate to the project folder / Truy cập vào thư mục dự án:

cd ai-insight-chatgpt

3. Install the required dependencies / Cài đặt các phần phụ thuộc cần thiết:

npm install


4. Create a `.env` file in the root folder of the project and add your OpenAI API key / Tạo một tập tin `.env` trong thư mục gốc của dự án và thêm khoá API OpenAI của bạn:

OPENAI_API_KEY=your_api_key_here


Replace `your_api_key_here` with your actual API key / Thay thế `your_api_key_here` bằng khoá API thực sự của bạn.

## Running the Application / Chạy ứng dụng

1. Start the server / Khởi động máy chủ:

node server.js


2. Open a web browser and navigate to `http://localhost:3000` to interact with the chat application / Mở trình duyệt web và truy cập vào `http://localhost:3000` để tương tác với ứng dụng chat.