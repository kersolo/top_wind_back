import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService){}
  async create(createUserDto: CreateUserDto):Promise<User> {
    return await this.prismaService.user.create({data: createUserDto})
  }

  async findAll():Promise<User[]> {
    return await this.prismaService.user.findMany()
  }

  async findOne(id: string):Promise<User> {
    return await this.prismaService.user.findUnique({where:{id}})
  }

  async findOneByEmail(email: string):Promise<User> {
    return await this.prismaService.user.findUnique({where:{email}})
  }

  async update(id: string, updateUserDto: UpdateUserDto):Promise<User> {
    return await this.prismaService.user.update({
      where: {
        id
      },
      data: updateUserDto
    })
  }

  async remove(id: string):Promise<User> {
    return await this.prismaService.user.delete({where:{id}})
  }
}
