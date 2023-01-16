export type PromiseState = 'pending' | 'resolved' | 'rejected';
export type Callback = (data: any) => any;
export type Executor = (resolve?: Callback, reject?: Callback) => any;