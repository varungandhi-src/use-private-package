import * as pkg from "@varungandhi-src/private-package/src";
import * as _ from "lodash/fp";

export class MyClass {
  public static field = pkg.myConstant;
  public static fn = _.curryN;
}
