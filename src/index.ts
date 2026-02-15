import { Client, LocalAuth, Message } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { MESSAGES } from './config/constants';
import { isWorkHour, isMonday, isHoliday } from './utils/timeChecker';

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        handleSIGINT: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

client.on('qr', (qr: string) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('SEM Bot hazır ve bağlandı!');
});

client.on('message', async (msg: Message) => {
    if (msg.from.includes('@c.us')) {
        const chat = await msg.getChat();
        const contact = await msg.getContact();
        const pushname = contact.pushname || " "; 

        await chat.sendStateTyping();
        await delay(2000);

        let responseText = "";

        if (isHoliday()) {
            responseText = MESSAGES.HOLIDAY;
        } else if (!isWorkHour()) {
            responseText = MESSAGES.OFF_HOURS(pushname);
        } else {
            responseText = MESSAGES.WELCOME(pushname);
            
            if (isMonday()) {
                responseText += "\n\n" + MESSAGES.MONDAY_DELAY;
            }
        }

        await msg.reply(responseText);
        await chat.sendSeen();
    }
});

client.initialize();