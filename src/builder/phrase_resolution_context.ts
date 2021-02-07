import { ResolvedColumn } from "./resolved_column";
import { View } from "./view/view";
import { ViewResolver } from "./view_resolver";

export class PhraseResolutionContext {
  currentView: View;
  resolver: ViewResolver;
  availableColumns: ResolvedColumn[];

  constructor({
    currentView,
    resolver,
    availableColumns,
  }: {
    currentView: View;
    resolver: ViewResolver;
    availableColumns: ResolvedColumn[];
  }) {
    this.currentView = currentView;
    this.resolver = resolver;
    this.availableColumns = availableColumns;
  }

  findColumnByName(sourceColumnName: string, source?: string): ResolvedColumn {
    if (source) {
      const completeMatchedColumn = this.availableColumns.find(
        (column) =>
          column.publicName === sourceColumnName &&
          column.publicSource === source
      );
      if (completeMatchedColumn) {
        return completeMatchedColumn;
      }
    }

    const matchedColumns = this.availableColumns.filter(
      (column) => column.publicName === sourceColumnName
    );
    if (matchedColumns.length === 1) {
      return matchedColumns[0];
    }
    if (matchedColumns.length === 0) {
      throw new Error(`${sourceColumnName}は未定義`);
    }
    throw new Error(
      `${sourceColumnName}に該当するカラムが複数あるため特定できません`
    );
  }
}