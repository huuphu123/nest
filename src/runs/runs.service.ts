import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class RunsService {
    Runs = [
            {
            id: 1,
            duration: 3000,
            description: 'Sun Asterisk chứa đựng ước mơ và mục tiêu kiến tạo nên thật nhiều những điều tốt đẹp cho xã hội của tập thể những chiến binh mặt trời.'
            },
            {
                id: 2,
                duration: 5000,
                description: 'Sun Asterisk chứa đựng ước mơ và mục tiêu kiến tạo nên thật nhiều những điều tốt đẹp cho xã hội của tập thể những chiến binh mặt trời.'
            },
    ];

    getRuns(): Promise<any> {
        return new Promise(resolve => {
             resolve(this.Runs);
        });
    }

    getRun(id): Promise<any> {
        let runsid = Number(id);
        return new Promise(resolve => {
            const runs = this.Runs.find(runs => runs.id === runsid);
            if (!runs) {
                 throw new HttpException('Runs information not found!', 404)
            }
            resolve(runs);
        });
    }

    addRuns(runs): Promise<any> {
        let id = Number(runs["id"]);
        return new Promise(resolve => {
            let index = this.Runs.findIndex(runs => runs.id === id);
            if (index !== -1) {
                throw new HttpException('Id has been existed!', 404);
            }
            this.Runs.push(runs);
            resolve(this.Runs);
        });
    }

    updateRuns(runsId, runs): Promise<any> {
        let id = Number(runsId);
        return new Promise(resolve => {
            let index = this.Runs.findIndex(runs => runs.id === id);
            if (index === -1) {
                throw new HttpException('Runs information not found!', 404);
            }
            this.Runs.splice(index, 1);
            runs["id"] = id;
            this.Runs.push(runs);
            resolve(this.Runs);
        })
    }

    deleteRuns(runsId): Promise<any> {
        let id = Number(runsId);
        return new Promise(resolve => {
            let index = this.Runs.findIndex(runs => runs.id === id);
            if (index === -1) {
                throw new HttpException('Runs information not found!', 404);
            }
            this.Runs.splice(index, 1);
            resolve(this.Runs);
        });
    }
}
