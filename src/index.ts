import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { handleIncomingMessage } from './handlers/messageHandler';

console.log("🚀 Sistem başlatılıyor...");

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        handleSIGINT: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

client.on('qr', (qr: string) => {
    console.log('--- QR KODU OKUTUN ---');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('YİÜSEM Botu aktif! Mesajlar bekleniyor...');
});

client.on('message', async (msg) => {
    await handleIncomingMessage(msg);
});

client.initialize();