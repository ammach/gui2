import { ProStep1 } from "./pro/step1/ProStep1";
import { ProStep2 } from "./pro/step2/ProStep2";

const CATEGORY = {
  PRO: "vie professionnelle",
  PERSO: "vie personnelle",
};

export const config = {
  0: {
    component: ProStep1,
    category: CATEGORY.PRO,
    previous: {
      category: "introduction",
      details: "",
    },
    next: {
      category: CATEGORY.PRO,
      details: "au bureau",
    },
  },
  1: {
    component: ProStep2,
    category: CATEGORY.PRO,
    previous: {
      category: CATEGORY.PRO,
      details: "introduction",
    },
    next: {
      category: CATEGORY.PRO,
      details: "numérique",
    },
  },
};
