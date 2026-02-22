import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create and findAll', () => {
    it('should create a course and return it in findAll', () => {
      const dto: CreateCourseDto = {
        title: 'Intro to HTML',
        level: 'Beginner',
        duration: '4 weeks',
      };
      const created = service.create(dto);
      expect(created).toMatchObject(dto);
      expect(created.id).toBeDefined();

      const all = service.findAll();
      expect(all).toHaveLength(1);
      expect(all[0]).toEqual(created);
    });
  });

  describe('findOne', () => {
    it('should throw NotFoundException when course does not exist', () => {
      expect(() => service.findOne(999)).toThrow(NotFoundException);
      expect(() => service.findOne(999)).toThrow('Course with id 999 not found');
    });
  });
});
