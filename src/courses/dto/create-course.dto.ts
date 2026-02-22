import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ example: 'Intro to HTML' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Beginner' })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({ example: '4 weeks' })
  @IsString()
  @IsNotEmpty()
  duration: string;
}
