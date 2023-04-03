import { Controller, Get, Param, Post, Put, Body, Delete, Query } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import { RunsService } from './runs.service';
import { CreateRunsDto, UpdateRunsDto} from './data.dto';

@ApiTags('Runs')
@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

    @Get()
    @ApiOkResponse({description: 'Get all history successfully!'})
    async getRuns() {
        const runs = await this.runsService.getRuns();
        return runs;
    }

    @Get(':id')
    async getRun(@Param('id') id) {
        const runs = await this.runsService.getRun(id);
        return runs;
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: CreateRunsDto,
    })
    async addRuns(@Body() CreateRunsDto: CreateRunsDto) {
        const runs = await this.runsService.addRuns(CreateRunsDto);
        return runs;
    }

    @Put(':id')
    async updateRuns(@Param('id') id: string, @Body() UpdateRunsDto: UpdateRunsDto) {
        const runs = await this.runsService.updateRuns(id, UpdateRunsDto);
        return runs;
    }

    @Delete(':id')
    async deleteRuns(@Param('id') id: string) {
        const runs = await this.runsService.deleteRuns(id);
        return runs;
    }
}
