import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { JwtGuard } from 'src/jwtservice/authGuard/jwtGuard.guard';
import { MessagesService } from './messages.service';

@ApiTags('Messages')
@UseGuards(JwtGuard)
@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Get(':userId')
    @ApiOperation({
        summary: 'Get conversation history',
        description: 'Returns all messages between the authenticated user and :userId, ordered oldest-first.',
    })
    @ApiParam({ name: 'userId', description: 'The other participant\'s userId' })
    @ApiResponse({ status: 200, description: 'Array of messages ordered by createdAt asc' })
    getConversation(@Req() req: Request, @Param('userId') otherUserId: string) {
        const currentUserId = (req as any).user?.userId;
        return this.messagesService.getConversation(currentUserId, otherUserId);
    }
}
