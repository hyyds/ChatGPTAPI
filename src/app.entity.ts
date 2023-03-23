import { ApiProperty } from "@nestjs/swagger";

export class baseResponse {
  @ApiProperty({ description: "上下文模式消息id", example: 0 })
  readonly messageId: string;

  @ApiProperty({ description: "消息内容", example: "你好！有什么我可以帮助你的吗？" })
  readonly response: string;
}
