import { Message } from 'whatsapp-web.js';
import { isWorkHour, isMonday, isHoliday, delay } from '../utils/timeChecker';
import { MESSAGES } from '../config/constants';

const processedUsers = new Map<string, number>();
const activeLocks = new Set<string>();
const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; 
export const handleIncomingMessage = async (msg: Message) => {
    const userId = msg.from;

    if(msg.from.endsWith('@g.us') || msg.author) {
        return;
    }

    if(activeLocks.has(userId)) {
        console.log(`[LOG] ${userId} için işlem kilitli, mesaj atlanıyor.`);
        return;
    }
    const now = Date.now();

    if (processedUsers.has(userId)) {
        const lastProcessed = processedUsers.get(userId) || 0;
        if (now - lastProcessed < SESSION_TIMEOUT) {
            console.log(`[LOG] ${userId} zaten karşılandı, tekrar mesaj atılmıyor.`);
            return;
        }
    }

    console.log(`[LOG] Yeni mesaj işleniyor: ${userId}`);

    try {
        activeLocks.add(userId);

        const chat = await msg.getChat();
        const contact = await msg.getContact();
        const pushname = contact.pushname || "Ziyaretçi";

        await chat.sendStateTyping();
        await delay(2000);

        if (isHoliday()) {
            await chat.sendStateTyping();
            await delay(1500);
            await msg.reply(MESSAGES.HOLIDAY);
        } else if (!isWorkHour()) {
            await chat.sendStateTyping();
            await delay(1500);
            await msg.reply(MESSAGES.OFF_HOURS(pushname));
        } else if (isMonday()) {
                await chat.sendStateTyping();
                await delay(1500);
                await msg.reply(MESSAGES.MONDAY_DELAY(pushname));
        }else{
            await chat.sendStateTyping();
            await delay(2000);
            await msg.reply(MESSAGES.WELCOME(pushname));
        }
        processedUsers.set(userId, Date.now());
    } catch (error) {
        console.error("[HATA] Mesaj işlenirken bir sorun oluştu:", error);
    }finally {
        activeLocks.delete(userId);
    }
};