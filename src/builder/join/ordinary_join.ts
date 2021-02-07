import { Condition } from "../condition/condition";
import { Join } from "./join";
import { PhraseResolutionContext } from "../phrase_resolution_context";

export type OrdinaryJoinArgs = {
  target: string;
  conditions: Condition[];
};

export abstract class OrdinaryJoin extends Join {
  target: string;
  conditions: Condition[];

  constructor({
    type,
    target,
    conditions,
  }: OrdinaryJoinArgs & {
    type: string;
  }) {
    super({ type });
    this.target = target;
    this.conditions = conditions;
  }

  toSQL(context: PhraseResolutionContext): string {
    throw new Error("Method not implemented.");
  }

  toSQLForRoot(): string {
    throw new Error("Method not implemented.");
  }
}