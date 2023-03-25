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
    const func = async ()=> await api.sendMessage(query.content,opts).catch(async ()=> await func())
    const res = await func()
    return {
      messageId: res.messageId,
      message: res.response
    };
  }
}
