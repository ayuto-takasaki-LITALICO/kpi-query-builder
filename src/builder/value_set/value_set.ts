import { ResolvedColumn } from "../resolved_column";
import { ViewResolver } from "../view_resolver";

export abstract class ValueSet {
  type: string;

  constructor({ type }: { type: string }) {
    this.type = type;
  }

  abstract toSQL(
    resolver: ViewResolver,
    availableColumns: ResolvedColumn[]
  ): string;
}
