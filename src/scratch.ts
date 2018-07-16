import { readFileSync } from "fs";
import { parseProgram } from "./parse";
import { check } from "./typecheck/programs";
import Lang from "./lang";
import "mocha";

function testfile(lang: Lang, filepath: string) {
    const contents = readFileSync(filepath, { encoding: "binary" });

    let ast = parseProgram(lang, contents);
    check(ast);
    console.log(JSON.stringify(ast, undefined, 2));
    return true;
}

testfile("C1", "tests/l1-large/alaska-error01.l1");
