import { StateFile, TaskRow } from "../types"

export default class Attempt {
    stateFile: StateFile; 
    name: string; 
    rows: TaskRow[];
    
    constructor(fileName: string) {
        this.stateFile = require('/home/coma/sdlb-ui/src/assets/state/' + fileName);
        this.name = this.stateFile.appConfig.applicationName;
        this.rows = this.getTaskRow();
    }

    getTaskRow() {
        let taskRow : TaskRow[] = [];
        let actionsStateEntries = Object.entries(this.stateFile.actionsState);
        actionsStateEntries.forEach((entry) => {
            taskRow.push(
                {
                    type: "task",
                    data: [
                        {
                            flow_id: entry[0],
                            run_number: 1,
                            step_name: "start",
                            task_id: 2,
                            user_name: "zach",
                            status: "failed",
                            ts_epoch: 1678005852459, // not used
                            started_at: 1678005852782,
                            finished_at: 1678005852823, // not used
                            duration: 741, // should be computed from started/finished_at
                            attempt_id: 0,
                            tags: [],
                            system_tags: [
                                "runtime:dev",
                                "python_version:3.8.10",
                                "metaflow_version:2.8.0",
                                "user:zach"
                            ],
                        }
                    ]
                },
            )
        })
        console.log(taskRow);
        return [];
    }
    
}