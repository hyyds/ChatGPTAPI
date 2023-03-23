import { Type, applyDecorators } from "@nestjs/common";
import { getSchemaPath, ApiOkResponse } from "@nestjs/swagger";
import { baseResponse } from "./app.entity";

export const ApiBaseResponse = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        title: `baseResponseOf${model.name}`,
        allOf: [
          { $ref: getSchemaPath(baseResponse) },
          {
            properties: {
              data: {
                type: "object",
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    })
  );
};
