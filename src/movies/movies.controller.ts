import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

///movies url에 적용됌
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will retrun one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `This will path a movie with the id: ${movieId}`;
  }
}
