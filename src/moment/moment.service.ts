// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// @Injectable()
// export class MomentService {
//   // constructor(
//   //   @InjectRepository(User)
//   //   private usersRepository: Repository<User>,
//   // ) {}

//   findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   findOne(id: string): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }

//   findByName(name: string): Promise<User[]> {
//     return this.usersRepository.find({ name: name });
//   }

//   create(user: CreateCatDto): Promise<User> {
//     const newUser = this.usersRepository.create(user);
//     return this.usersRepository.save(newUser);
//   }

//   async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
// }
