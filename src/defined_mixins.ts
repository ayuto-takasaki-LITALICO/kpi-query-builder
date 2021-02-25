import { InCondition } from "./builder/condition/in_condition";
import { RawCondition } from "./builder/condition/raw_condition";
import { Mixin } from "./builder/mixin";
import { SelectValue } from "./builder/value/select_value";
import { SelectValueSet } from "./builder/value_set/select_value_set";

export const DefinedMixins: Mixin[] = [
  new Mixin({
    name: "契約済み契約",
    conditions: [new RawCondition({ raw: "usage_start_date IS NOT NULL" })],
  }),
  new Mixin({
    name: "成功リクエスト",
    conditions: [new RawCondition({ raw: "status_code = '200'" })],
  }),
  new Mixin({
    name: "PLUS契約ユーザ（解約済み含む）",
    conditions: [
      new InCondition({
        value: new SelectValue({ sourceColumnName: "ユーザコード" }),
        inValueSet: new SelectValueSet({
          source: "ユーザコード付きPLUS契約",
          sourceColumnName: "契約ユーザコード",
        }),
      }),
    ],
  }),
  new Mixin({
    name: "申込済み一時相談",
    conditions: [
      new RawCondition({ raw: "application_datetime IS NOT NULL" }),
    ],
  }),
  new Mixin({
    name: "申込済み二次相談",
    conditions: [new RawCondition({ raw: "submitted_at IS NOT NULL" })],
  }),
  new Mixin({
    name: "勉強会参加済み申込",
    conditions: [new RawCondition({ raw: "attended_at IS NOT NULL" })],
  }),
];