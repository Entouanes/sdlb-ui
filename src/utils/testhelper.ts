import { TimelineMetrics } from '../components/RunPage/Timeline/Timeline';
import { RowDataModel, StepRowData } from '../components/RunPage/Timeline/useTaskData';
import { TaskSettingsState } from '../components/RunPage/Timeline/useTaskListSettings';
import { Row } from '../components/RunPage/Timeline/VirtualizedTimeline';
import { Task, Step, Run, TaskStatus } from '../types';

//
// LOT OF TESTS DEPEND ON THESE VALUES AS DEFAULTS SO DONT CHANGE THESE!!!
//
export function createTaskListSettings(partialGraph: Partial<TaskSettingsState>): TaskSettingsState {
  return {
    sort: ['startTime', 'asc'],
    stepFilter: [],
    statusFilter: null,
    group: true,
    isCustomEnabled: false,
    ...partialGraph,
  };
}

export function createTask(partialTask: Partial<Task>): Task {
  return {
    flow_id: 'BasicFlow',
    run_number: 1,
    step_name: 'start',
    task_id: 1,
    status: 'completed',
    user_name: 'SanteriCM',
    ts_epoch: 1595574762901,
    finished_at: 1595574762921,
    duration: 20,
    attempt_id: 0,
    tags: ['testingtag'],
    system_tags: ['user:SanteriCM', 'runtime:dev', 'python_version:3.7.6', 'date:2020-07-24', 'metaflow_version:2.0.5'],
    ...partialTask,
  };
}

export function createStep(partialStep: Partial<Step>): Step {
  return {
    flow_id: 'BasicFlow',
    run_number: 1,
    step_name: 'start',
    user_name: 'SanteriCM',
    ts_epoch: 1595574762958,
    tags: ['testingtag'],
    system_tags: ['user:SanteriCM', 'runtime:dev', 'python_version:3.7.6', 'date:2020-07-24', 'metaflow_version:2.0.5'],
    ...partialStep,
  };
}

export function createRun(partialRun: Partial<Run>): Run {
  return {
    flow_id: 'BasicFlow',
    run_number: 1,
    user_name: 'SanteriCM',
    user: 'SanteriCM',
    ts_epoch: 1595574762958,
    tags: ['testingtag'],
    status: 'completed',
    system_tags: ['user:SanteriCM', 'runtime:dev', 'python_version:3.7.6', 'date:2020-07-24', 'metaflow_version:2.0.5'],
    ...partialRun,
  };
}

export function createTaskRow(tasks: Task[] | undefined): Row {
  return { type: 'task', data: tasks || [createTask({})] };
}

export function createStepRow(step: Partial<Step>, stepRowObject: Partial<StepRowData>): Row {
  return {
    type: 'step',
    data: { ...createStep({}), ...step },
    rowObject: {
      isOpen: true,
      finished_at: 1000,
      duration: 1000,
      status: 'completed',
      step: { ...createStep({}), ...step },
      data: {},
      ...stepRowObject,
    },
  };
}

export function createStepRowData(
  rowdata: Partial<StepRowData>,
  step: Partial<Step>,
  tasks: Record<string, Task[]>,
): StepRowData {
  return {
    step: createStep(step),
    isOpen: true,
    status: 'completed' as TaskStatus,
    finished_at: 0,
    duration: 0,
    data: { '1': [createTask({})], ...tasks },
    ...rowdata,
  };
}

export function createRowDataModel(data: Record<string, StepRowData>): RowDataModel {
  return { start: createStepRowData({}, {}, {}), ...data };
}

export function createTimelineMetrics(data: Partial<TimelineMetrics>): TimelineMetrics {
  return {
    startTime: 0,
    endTime: 1000,
    visibleStartTime: 0,
    visibleEndTime: 1000,
    sortBy: 'startTime',
    groupingEnabled: true,
    ...data,
  };
}