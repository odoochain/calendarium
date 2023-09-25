export class EventCondition {
    constructor(public conditions: Combinator[]) {}
}
export class Combinator {
    constructor(public type: CombinatorEnum, public conditions: Condition[]) {}
}
export class Condition {
    constructor(
        public condition: ConditionEnum,
        public timespan: TimeSpanEnum,
        target: string
    ) {}
}

export enum CombinatorEnum {
    AND,
    OR,
    NAND,
    XOR,
}

export enum ConditionEnum {
    Equals,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Every,
}
export enum TimeSpanEnum {
    Date,
    Year,
    Month,
    MonthNumber,
    Week,
    WeekDay,
    WeekNumber,
    WeekNumberInMonth,
    Moon,
    Random,
    Event,
}
