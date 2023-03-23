import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {
  baseResponse
} from './app.entity'
import {
  GptDTO
} from "./app.dto";

@ApiTags("ChatGPT-3.5-turbo")
@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/message")
  @ApiOperation({
    summary: "发送文本消息",
  })
  @ApiResponse({
    status: 200,
    description: "The found record",
    type: baseResponse,
  })
  sendMessage(@Query() query: GptDTO) {
    return this.appService.sendMessage(query);
  }
}
