import { Controller, Get, Param, Post, Put, Body, Delete, Query } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOkResponse, ApiCreatedResponse, ApiQuery, ApiResponse} from '@nestjs/swagger';
import { RunsService } from './runs.service';
import { CreateRunsDto, UpdateRunsDto} from './data.dto';

@ApiTags('Runs')
@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

    @Get()
    @ApiOkResponse({description: 'Get all history successfully!', type: CreateRunsDto, isArray: true})
    async getRuns() {
        const runs = await this.runsService.getRuns();
        return runs;
    }

    
    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: CreateRunsDto,
        isArray: true
    })
    @ApiResponse({ status: 404, description: 'Id has been existed!'})
    async addRuns(@Body() CreateRunsDto: CreateRunsDto) {
        const runs = await this.runsService.addRuns(CreateRunsDto);
        return runs;
    }
    
    @Get(':id')
    @ApiOkResponse({ description: 'Get a Runs history by id', type: CreateRunsDto })
    async getRun(@Param('id') id: string) {
        const runs = await this.runsService.getRun(id);
        return runs;
    }

    @Put(':id')
    @ApiCreatedResponse({
        description: 'The record with id has been updated successfully!',
        type: CreateRunsDto, 
        isArray: true
    })
    @ApiResponse({ status: 404, description: 'Runs information not found!'})
    async updateRuns(@Param('id') id: string, @Body() UpdateRunsDto: UpdateRunsDto) {
        const runs = await this.runsService.updateRuns(id, UpdateRunsDto);
        return runs;
    }

    @Delete(':id')
    @ApiCreatedResponse({
        description: 'The record with id has been deleted successfully!',
        type: CreateRunsDto, 
        isArray: true
    })
    @ApiResponse({ status: 404, description: 'Runs information not found!'})
    async deleteRuns(@Param('id') id: string) {
        const runs = await this.runsService.deleteRuns(id);
        return runs;
    }
}
