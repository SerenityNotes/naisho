import { queryType } from "nexus";

export const Query = queryType({
  definition(t) {
    t.string("test", {
      resolve() {
        return "test";
      },
    });
  },
});
