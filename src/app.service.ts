import { Injectable } from "@nestjs/common";
import { GptDTO } from "./app.dto";
import GPT from './main'
@Injectable()
export class AppService {
  async sendMessage(query: GptDTO) {
    const api = await GPT
    const opts = {
      parentMessageId:  query.messageId,
    }
    const res = await api.sendMessage(query.content,opts)
    return {
      messageId: res.messageId,
      message: res.response
    };
  }
}
