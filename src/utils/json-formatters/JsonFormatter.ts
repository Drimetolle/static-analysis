import BasicBlock from "../../source-analysis/control-flow/blocks/BasicBlock";
import ScopeTree from "../../source-analysis/data-flow/ScopeTree";

export default class JsonFormatter {
  private constructor() {
    //
  }

  static ScopeToJson(tree: ScopeTree): string {
    return JSON.stringify(tree, this.replacerScope, 2);
  }

  static CFGToJson(cfg: BasicBlock): string {
    return JSON.stringify(cfg, this.replacerCFG, 2);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // return JSON.stringify(cfg, JsonFormatter.refReplacer(), 2);
  }

  private static replacerCFG(key: string, value: unknown) {
    if (key == "condition") return undefined;
    else return value;
  }

  private static replacerScope(key: string, value: unknown) {
    if (key == "node") return undefined;
    else if (key == "parent") return undefined;
    else if (value instanceof Map) {
      return Object.fromEntries(value.entries());
    } else return value;
  }

  private static refReplacer() {
    const m = new Map();
    const v = new Map();
    let init: any = null;

    return function (field: any, value: any) {
      const p =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        m.get(this) + (Array.isArray(this) ? `[${field}]` : "." + field);
      const isComplex = value === Object(value);

      if (isComplex) m.set(value, p);

      const pp = v.get(value) || "";
      const path = p.replace(/undefined\.\.?/, "");
      let val = pp ? `#REF:${pp[0] == "[" ? "$" : "$."}${pp}` : value;

      !init ? (init = value) : val === init ? (val = "#REF:$") : 0;
      if (!pp && isComplex) v.set(value, path);

      return val;
    };
  }

  private static parseRefJSON(json: any) {
    const objToPath = new Map();
    const pathToObj = new Map();
    const o = JSON.parse(json);

    const traverse = (parent: any, field: any) => {
      let obj = parent;
      let path = "#REF:$";

      if (field !== undefined) {
        obj = parent[field];
        path =
          objToPath.get(parent) +
          (Array.isArray(parent)
            ? `[${field}]`
            : `${field ? "." + field : ""}`);
      }

      objToPath.set(obj, path);
      pathToObj.set(path, obj);

      const ref = pathToObj.get(obj);
      if (ref) parent[field] = ref;

      for (const f in obj) if (obj === Object(obj)) traverse(obj, f);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    traverse(o);
    return o;
  }
}

// let s = `{
//     "o1": {
//         "o2": {
//             "a1": 1,
//             "a2": 2,
//             "a3": [
//                 1,
//                 2,
//                 {
//                     "b1": 3,
//                     "b2": "4",
//                     "b3": "#REF:$.o1.o2"
//                 }
//             ]
//         }
//     },
//     "b": "#REF:$.o1.o2.a3[2]",
//     "a": "#REF:$.o1.o2"
// }`;
//
// console.log('Open Chrome console to see nested fields:');
// let obj = parseRefJSON(s);
//
// console.log(obj);
