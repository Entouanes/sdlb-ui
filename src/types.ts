export type AttemptConfig = {
    name: string;
    runId : number;
    attemptId : number;
    runStartTime : Date;
    attemptStartTime : Date;  
};

export type TaskRow = { 
    type: 'task'; 
    data: Task[] 
};

export interface MetaDataBaseObject {
    flow_id: string;
    user_name: string;
    ts_epoch: number;
    tags?: string[];
    system_tags: string[];
  }

export interface Task extends MetaDataBaseObject {
    run_number: number;
    run_id?: string;
    step_name: string;
    task_id: number;
    task_name?: string;
    attempt_id: number;
    started_at?: number;
    foreach_label?: string;
    finished_at?: number;
    duration?: number;
    status: 'running' | 'completed' | 'failed' | 'unknown' | 'pending' | 'refining';
}

export type StateFile = {
    appConfig : {
        feedSel : string,
        applicationName : string,
        configuration : string,
        parallelism : number,
        statePath : string,
        streaming : boolean
    },
    runId : number,
    attemptId : number,
    runStartTime : string,
    attemptStartTime : string,
    actionsState: {
        state: string,
        startTstmp: string,
        duration: string
    }    
}