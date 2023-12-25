import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'name@email.com',
  })
  email: string;
  @ApiProperty({
    default: 'password',
  })
  password: string;
  @ApiProperty({
    default: 'Nick',
  })
  fullName: string;
}
