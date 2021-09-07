import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { Service } from 'typedi';
// import { Inject } from 'typedi';
import { ExampleInjectedService } from '../services/ExampleService';

@Controller()
@Service()
export class UserController {
  constructor(private readonly exampleService: ExampleInjectedService){}

  @Get('/users')
  getAll() {
    return this.exampleService.printMessage();
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('/users')
  post(@Body() user: any) {
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