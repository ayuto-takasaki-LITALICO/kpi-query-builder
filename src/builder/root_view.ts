import { ReferenceView, ReferenceViewArgs } from "./reference_view";
import { ResolvedView } from "./resolved_view";
import { ViewResolver } from "./view_resolver";

export class RootView extends ReferenceView {
  physicalSource: string;
  physicalSourceAlias: string;
  dateSuffixEnabled: boolean;

  constructor({
    physicalSource,
    physicalSourceAlias,
    dateSuffixEnabled,
    ...args
  }: Exclude<ReferenceViewArgs, "orders"> & {
    physicalSource: string;
    physicalSourceAlias: string;
    dateSuffixEnabled: boolean;
  }) {
    super({
      ...args,
      type: "root",
      orders: [], // root viewに並び順を指定する用途は想定していない
    });
    this.physicalSource = physicalSource;
    this.physicalSourceAlias = physicalSourceAlias;
    this.dateSuffixEnabled = dateSuffixEnabled;
  }

  resolve(resolver: ViewResolver): ResolvedView {
    const availableColumns = [];

    const conditions = [...this.conditions];
    const joins = [...this.joins];
    this.filters.forEach((filter) => {
      conditions.push(...filter.conditions);
      joins.push(...filter.joins);
    });

    joins.forEach((join) => {

    });

    throw new Error("Method not implemented.");
  }
}
