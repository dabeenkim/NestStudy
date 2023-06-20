import { MoviesService } from './movies.service';
import { Movie } from './entities/Movie.entity';
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  //search가 Get(:id)보다 아래에 있으면 search는 id로 판단하게된다
  // 그래서 현재 제일 하단에 있던 search를 위로 끌어올려줌
  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching for a movie made after ${searchingYear}`;
  // }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
