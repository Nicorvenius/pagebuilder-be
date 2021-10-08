import { Controller, Get } from '@nestjs/common';

@Controller('routs')
export class RoutsController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Get('')
  async getRouts() {
    return [
      {
        url_slug: 'posts',
      },
    ];
  }
}
