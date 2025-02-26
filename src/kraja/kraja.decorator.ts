import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const Kraja = createParamDecorator(
  (data: string, ctx: ExecutionContext): Record<string, string> => {
    const request = ctx.switchToHttp().getRequest<Request>();

    console.log({ ...request.query });

    console.log('dekorator', request.query);

    return request.params;
  },
);
