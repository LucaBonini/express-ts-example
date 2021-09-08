import { Controller, Param, Body, Get, Post, Put, Delete, Req, UseInterceptor, Action } from 'routing-controllers';
import { Service } from 'typedi';
import { ConsoleLog } from '../decorators/console.log-decorator';
// import { Inject } from 'typedi';
import { ExampleInjectedService } from '../services/ExampleService';

@Controller()
@Service()
export class UserController {
  constructor(private readonly exampleService: ExampleInjectedService){}

  @Get('/users')
  @UseInterceptor(function(action: Action, content: any) {
    // here you have content returned by this action. you can replace something
    // in it and return a replaced result. replaced result will be returned to the user
    console.log(action.request, 'REQ')
    return content
  })
  @ConsoleLog()
  getAll(@Req() res: Express.Request) {
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