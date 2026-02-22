import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto {
  @ApiPropertyOptional({ example: 'Intro to HTML' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiPropertyOptional({ example: 'Beginner' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  level?: string;

  @ApiPropertyOptional({ example: '4 weeks' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  duration?: string;
}
