import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { editProfileDto } from './editProfile.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getIndex() {
    return {

    }
  }

  @Post()
  @Render('index')
  editProfile(@Body() body: editProfileDto) {
    const userRegex = /^[a-z][a-z\d]*$/;
    if (!userRegex.test(body.username)) {
      return {
        error: "Invalid username"
      }
    }
    return {
      username: body.username
    }
  }
  
}
