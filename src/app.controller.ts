import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { editProfileDto } from './editProfile.dto.js';
import { error } from 'console';

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
    const nickRegex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\d -]{3,}$/;
    const urlRegex = /^https:\/\/[a-zA-Z\d]+(\.jpg|\.png)$/;
    const colorRegex = /^#[a-fA-F\d]{6}$/;
    if (!userRegex.test(body.username)) {
      return {
        error: "Invalid username"
      }
    }
    if (!nickRegex.test(body.nickname)) {
      return {
        error: "Invalid nickname"
      }
    }
    if (!urlRegex.test(body.url)) {
      return {
        error: "Invalid image URL"
      }
    }
    if (!colorRegex.test(body.color)) {
      return {
        error: "Invalid hexadecimal color code"
      }
    }
    // return {
    //   username: body.username
    // }
  }
  
}
