import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma-service';

@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) {}

    async getConversation(currentUserId: string, otherUserId: string) {
        const messages = await this.prisma.client.messages.findMany({
            where: {
                OR: [
                    { senderId: currentUserId, receiverId: otherUserId },
                    { senderId: otherUserId,   receiverId: currentUserId },
                ],
            },
            orderBy: { createdAt: 'asc' },
        });

        return messages.map(m => ({
            id:         m.messageId,
            senderId:   m.senderId,
            receiverId: m.receiverId,
            message:    m.content,
            createdAt:  m.createdAt,
        }));
    }
}
