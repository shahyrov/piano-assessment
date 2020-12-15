export interface Action<Payload, Meta> {
  type: string | symbol;
  payload: Payload;
  error?: boolean;
  meta?: Meta;
}
