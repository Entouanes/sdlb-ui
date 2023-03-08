import { TaskRow } from "./components/Timeline/MyVirtualizedTimeline";

export type AttemptConfig = {
    name: string;
    runId : number;
    attemptId : number;
    runStartTime : Date;
    attemptStartTime : Date;  
};

export type AttemptType = {
    stateFile: StateFile; 
    name: string; 
    rows: TaskRow[];
    run: Run;
}

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
    status: TaskStatus;
    metadata?: object;
}

export type TaskStatus = 'running' | 'completed' | 'failed' | 'unknown' | 'pending' | 'refining';


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


  export type Flow = MetaDataBaseObject;
  
  export type RunStatus = {
    completed: string;
    running: string;
    failed: string;
  };
  
  export interface Run extends MetaDataBaseObject {
    run_number: number;
    run?: string;
    status: keyof RunStatus;
    user: string | null;
    finished_at?: number;
    run_id?: string;
    duration?: number;
  }
  
  export interface Step extends MetaDataBaseObject {
    run_number: number;
    run_id?: string;
    step_name: string;
    finished_at?: number;
    duration?: number;
  }
  
  export interface RunParam {
    [key: string]: {
      value: string;
    };
  }
  
  export interface Log {
    row: number;
    line: string;
    timestamp?: number;
  }
  
  export type QueryParam = string | null;
  
  export type AsyncStatus = 'NotAsked' | 'Ok' | 'Error' | 'Loading';
  