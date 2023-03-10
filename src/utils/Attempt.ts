import { Run, StateFile } from "../types"
import { TaskRow } from "../components/Timeline/MyVirtualizedTimeline";
import { uniqueNamesGenerator, adjectives, colors, animals, names } from 'unique-names-generator';



export default class Attempt {
    stateFile: StateFile; 
    name: string; 
    runId: number;
    runStartTime: string;
    rows: TaskRow[];
    run: Run;
    
    constructor(fileName: string, random?: boolean) {          
        this.stateFile = random? this.randomStateFile() : require('/home/coma/sdlb-ui/src/assets/state/' + fileName);
        this.name = this.stateFile.appConfig.applicationName;
        this.runId = this.stateFile.runId;
        this.runStartTime = this.stateFile.runStartTime;
        this.rows = random ? this.getRandomTaskRow().sort(this.cmp) : this.getTaskRow().sort(this.cmp);
        this.run =  {
            flow_id: this.name,
            run_number: this.stateFile.runId,
            status: 'completed',
            user: 'undefined',
            user_name: 'undefined',
            ts_epoch: Math.min(...(this.rows.flatMap(row => row.data.map(t => t.started_at!).filter(x=>x)))) - 10, // start 10ms earlier
            finished_at: Math.max(...(this.rows.flatMap(row => row.data.map(t => t.finished_at!).filter(x=>x)))),
            system_tags: [],
        }
    }

    /**
     * Iterate through the statefile's actionsState and create a TaskRow array.
     * @returns TaskRow[]
     */
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
                            run_number: this.runId,
                            step_name: entry[0],
                            task_id: this.stateFile.attemptId,
                            user_name: "undefined",
                            status: entry[1].state == "SUCCEEDED" ? "completed" : (entry[1].state == "SKIPPED" ? "unknown" : "failed"),
                            ts_epoch: new Date(this.stateFile.runStartTime).getTime(), // not used
                            started_at: new Date(entry[1].startTstmp).getTime(),
                            duration: this.durationMicro(entry[1].duration) == 0 ? 1 : this.durationMicro(entry[1].duration), // should be computed from started/finished_at
                            finished_at: new Date(entry[1].startTstmp).getTime() + (this.durationMicro(entry[1].duration) == 0 ? 1 : this.durationMicro(entry[1].duration)), 
                            attempt_id: this.stateFile.attemptId,
                            tags: [],
                            system_tags: [],
                            metadata: entry[1].results
                        }
                    ]
                },
            )
        })
        return taskRow;
    }
    /**
     * Utility function that translates the given duration of the action into the corresponding duration in milliseconds
     * @param duration 
     * @returns number
     */

    getRandomTaskRow() {
        const taskRow : TaskRow[] = [];
        const actionsStateEntries = Array(Math.round(Math.random()*60)).fill(null).map(() => uniqueNamesGenerator({dictionaries: [adjectives, colors, animals]}));
        actionsStateEntries.forEach((entry: any) => {
            const state :number = Math.ceil(Math.random()*100);
            const duration = Math.round(Math.random()*10000)
            const started_at = new Date(this.runStartTime).getTime() + Math.round(Math.random()*50000) + 100;
            taskRow.push(
                {
                    type: "task",
                    data: [
                        {
                            flow_id: this.name,
                            run_number: this.runId,
                            step_name: entry,
                            task_id: this.stateFile.attemptId,
                            user_name: "undefined",
                            status: state < 60 ? "completed" : (state < 97 ? "unknown" : "failed"),
                            ts_epoch: new Date(this.stateFile.runStartTime).getTime(), // not used
                            started_at: started_at,
                            duration: duration,
                            finished_at: started_at + duration,
                            attempt_id: this.stateFile.attemptId,
                            tags: [],
                            system_tags: [],
                            metadata: []
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
    
    /**
     * Utility function for comparisons in the default "Array.sort()" function
     * @param a 
     * @param b 
     * @returns
     */
     private cmp(a: any, b: any) {
        if (a["data"][0]["started_at"] < b["data"][0]["started_at"]) {
            return -1;
        }
        if (a["data"][0]["started_at"] > b["data"][0]["started_at"]) {
            return 1;
        }
        return 0;
    }   

    randomStateFile() {
        const runStartTime = new Date();
        
        return {
            appConfig : {
                feedSel : '',
                applicationName : uniqueNamesGenerator({dictionaries: [names], style: 'upperCase'}),
                configuration : '',
                parallelism : 0,
                statePath : '',
                streaming : false
            },
            runId : Math.round(Math.random()*100),
            attemptId : Math.round(Math.random()*10),
            runStartTime : runStartTime.toString(),
            attemptStartTime : runStartTime.toString()
        }
    }
}