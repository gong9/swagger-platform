import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: '用户名称',
    maxLength: 22,
    minLength: 4,
    example: 'xiao gong',
  })
  name: string;
}
