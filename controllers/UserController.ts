import { Controller, Param, Body, Get, Post, Put, Delete, Req, UseInterceptor, NotFoundError, JsonController } from 'routing-controllers';
import { Service } from 'typedi';
import { ConsoleLog } from '../decorators/consoleLog.decorator';
import { consoleLogInterceptor } from '../interceptors/consoleLog.interceptor';
import { User } from '../models/user.model';
// import { Inject } from 'typedi';
import { ExampleInjectedService } from '../services/ExampleService';

@JsonController()
@Service()
export class UserController {
  constructor(private readonly exampleService: ExampleInjectedService){}

  @Get('/users')
  @UseInterceptor(consoleLogInterceptor)
  @ConsoleLog()
  getAll(@Req() res: Express.Request) {
    return this.exampleService.printMessage();
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    if (isNaN(id)) {
      throw new NotFoundError(`User was not found.`); // message is optional
    }
    return 'This action returns user #' + id;
  }

  @Post('/users')
  create(@Body() user: User) {
    return 'Saving user...';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}