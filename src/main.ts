import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { knife4jSetup } from "nest-knife4j";
// @ts-ignore
import F = require('../entry/index.js')

// declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const options = new DocumentBuilder()
    .setTitle("ChatGPT接口文档")
    .setDescription("ChatGPT是一个集Swagger2 和 OpenAPI3 为一体的增强解决方案")
    .setContact("hccc", "", "")
    .setVersion("1.0")
    .addTag("ChatGPT")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document, {
    swaggerOptions: {
      docExpansion: "list",
    },
  });
  knife4jSetup(app, [
    {
      name: "2.X版本",
      url: `/api-json`,
      swaggerVersion: "2.0",
      location: `/api-json`,
    },
  ]);
  await app.listen(8080);
  const GPT =  await F()
  const api = new GPT({

  })
  await api.initSession()
  return api
}

const api = bootstrap();
export default api


