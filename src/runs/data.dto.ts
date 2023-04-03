import { ApiProperty } from '@nestjs/swagger';

export class CreateRunsDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    duration: number;

    @ApiProperty()
    description: string;
}

export class UpdateRunsDto {
    @ApiProperty()
    duration: number;

    @ApiProperty()
    description: string;
}