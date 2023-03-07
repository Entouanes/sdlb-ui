import { Run, StateFile } from "../types"
import { TaskRow } from "../components/Timeline/MyVirtualizedTimeline";

export default class Attempt {
    stateFile: StateFile; 
    name: string; 
    rows: TaskRow[];
    run: Run;
    
    constructor(fileName: string) {
        this.stateFile = require('/home/coma/sdlb-ui/src/assets/state/' + fileName);
        this.name = this.stateFile.appConfig.applicationName;
        this.rows = this.getTaskRow();
        this.run =  {
            flow_id: 'HelloFlow',
            run_number: 1,
            status: 'completed',
            user: 'test',
            user_name: 'testName',
            ts_epoch: Math.min(...(this.rows.flatMap(row => row.data.map(t => t.started_at!).filter(x=>x)))) - 10, // start 10ms earlier
            finished_at: Math.max(...(this.rows.flatMap(row => row.data.map(t => t.finished_at!).filter(x=>x)))),
            system_tags: []
        }
    }

    getTaskRow() {
        const taskRow : TaskRow[] = [];
        const actionsStateEntries = Object.entries(this.stateFile.actionsState);
        actionsStateEntries.forEach((entry: any) => {
            taskRow.push(
                {
                    type: "task",
                    data: [
                        {
                            flow_id: this.name,
                            run_number: this.stateFile.runId,
                            step_name: entry[0],
                            task_id: 2,
                            user_name: "undefined",
                            status: entry[1].state == "SUCCEEDED" ? "completed" : (entry[1].state == "SKIPPED" ? "unknown" : "failed"),
                            ts_epoch: new Date(this.stateFile.runStartTime).getTime(), // not used
                            started_at: new Date(entry[1].startTstmp).getTime(),
                            duration: this.durationMicro(entry[1].duration), // should be computed from started/finished_at
                            finished_at: new Date(entry[1].startTstmp).getTime() + this.durationMicro(entry[1].duration), 
                            attempt_id: this.stateFile.attemptId,
                            tags: [],
                            system_tags: []
                        }
                    ]
                },
            )
        })
        return taskRow;
    }

    durationMicro = (duration: string) => {
        duration = duration.split('T')[1];
        
        if (duration.includes('H')) {
          console.log(duration.split('H')[0])
          const hours: number = parseInt(duration.split('H')[0]);
          duration = duration.split('H')[1];
          const minutes: number = parseInt(duration.split('M')[0]);
          duration = duration.split('M')[1];
          const seconds: number = parseInt(duration.split('.')[0]);
          duration = duration.split('.')[1];
          const mseconds: number = parseInt(duration);
      
          return (mseconds + seconds*1000) + minutes*60*1000 + hours*60*60*1000;
        } else if (duration.includes('M')) {
          const minutes: number = parseInt(duration.split('M')[0]);
          duration = duration.split('M')[1];
          const seconds: number = parseInt(duration.split('.')[0]);
          duration = duration.split('.')[1];
          const mseconds: number = parseInt(duration);
          
          return (mseconds + seconds*1000) + minutes*60*1000;
        } else {
          return parseFloat(duration.split('S')[0])*1000;
        }
      }
    
}