export abstract class Value {
  type: string;

  constructor({ type }: { type: string }) {
    this.type = type;
  }
}