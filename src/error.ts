import { SourceLocation } from "./ast";

export class ParsingError extends Error {
    public readonly name: "ParsingError";
    loc: null | SourceLocation;
    constructor(syn: SourceLocation | { loc?: SourceLocation }, msg: string) {
        const loc = "start" in syn ? syn : syn.loc ? syn.loc : null;
        super(msg);
        this.name = "ParsingError";
        this.loc = loc;
    }
}

export class TypingError extends Error {
    public readonly name: "TypingError";
    loc: null | SourceLocation;
    constructor(syn: { loc?: SourceLocation }, msg: string, ...hints: string[]) {
        const loc = syn.loc ? syn.loc : null;
        const hintstr = hints.length === 0 ? "" : "\n\nHint: " + hints.join("\n      ");
        super(`${msg}${hintstr}`);
        this.name = "TypingError";
        this.loc = loc;
    }
}

export class ImpossibleError extends Error {
    public readonly name: "ImpossibleError";
    constructor(msg: string) {
        super(`${msg}\nShould be impossible! (Please report.)`);
        this.name = "ImpossibleError";
    }
}
