const express = require("express");
const app = express();
const PORT = 3000;

app.get("/data_endpoint", (req, res) => {
    // Code để kết nối với Arduino và nhận dữ liệu nhịp tim
    // Sau đó gửi dữ liệu nhận được về cho client
    const heartRate = 75; // Giả định dữ liệu nhịp tim nhận được từ Arduino
    res.send(heartRate.toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
