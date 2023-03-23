import { ApiProperty } from "@nestjs/swagger";


export class GptDTO {
  @ApiProperty({ description: "文本消息", example: "你是谁" })
  readonly content: string;
  @ApiProperty({ description: "上下文模式消息id", example: "", required: false })
  readonly messageId: string;
}




