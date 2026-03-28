import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma-service';

@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) {}

    // GET /messages — all conversations, one row per partner, sorted by latest message
    async getMyConversations(currentUserId: string) {
        type ConversationRow = {
            partnerId:    string;
            name:         string;
            profilePhoto: string | null;
            messageId:    string;
            message:      string;
            senderId:     string;
            createdAt:    Date;
        };

        const rows = await this.prisma.$queryRaw<ConversationRow[]>`
            SELECT DISTINCT ON (partner_id)
                partner_id          AS "partnerId",
                u."name",
                u."profile_url"     AS "profilePhoto",
                m."messageId",
                m."content"         AS message,
                m."senderId",
                m."createdAt"
            FROM (
                SELECT
                    CASE
                        WHEN "senderId" = ${currentUserId} THEN "receiverId"
                        ELSE "senderId"
                    END AS partner_id,
                    "messageId", "content", "senderId", "receiverId", "createdAt"
                FROM "Messages"
                WHERE "senderId" = ${currentUserId}
                   OR "receiverId" = ${currentUserId}
            ) m
            JOIN "User" u ON u."userId" = m.partner_id
            ORDER BY partner_id, m."createdAt" DESC
        `;

        // Re-sort by latest message descending (DISTINCT ON orders by partner, not time)
        rows.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return rows.map(r => ({
            userId:      r.partnerId,
            name:        r.name,
            profilePhoto: r.profilePhoto,
            lastMessage: {
                id:        r.messageId,
                message:   r.message,
                senderId:  r.senderId,
                createdAt: r.createdAt,
            },
        }));
    }

    // GET /messages/:userId — full conversation history between two users
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
