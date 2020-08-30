import { ProStep1 } from "./pro/step1/ProStep1";
import { ProStep2 } from "./pro/step2/ProStep2";
import { PersoStep1 } from "./perso/step1/PersoStep1";
import { PersoStep2 } from "./perso/step2/PersoStep2";

const CATEGORY = {
  PRO: "vie professionnelle",
  PERSO: "vie personnelle",
};

export const config = {
  0: {
    component: ProStep1,
    category: CATEGORY.PRO,
    progress: 0,
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
    progress: 1,
    previous: {
      category: CATEGORY.PRO,
      details: "introduction",
    },
    next: {
      category: CATEGORY.PRO,
      details: "numérique",
    },
  },
  2: {
    component: PersoStep1,
    category: CATEGORY.PERSO,
    progress: 0,
    previous: {
      category: CATEGORY.PERSO,
      details: "details1",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "details2",
    },
  },
  3: {
    component: PersoStep2,
    category: CATEGORY.PERSO,
    progress: 1,
    previous: {
      category: CATEGORY.PERSO,
      details: "details2",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "details3",
    },
  },
};
