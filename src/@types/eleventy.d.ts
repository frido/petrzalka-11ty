import { DateTime } from "luxon";

export interface CollectionApi<T extends FrontMatter> {
  getAll(): Page<T>[];
  getFilteredByTag(tag: string): Page<T>[];
}

export interface Page<T extends FrontMatter> {
  inputPath: string;
  fileSlug: string;
  filePathStem: string;
  date: Date;
  outputPath: string;
  url: string;
  data: T;
  template: any;
}

export interface Post<T extends FrontMatter> {
  data(): T;
  render(data: T): string;
}

export interface FrontMatter {
  tags: Tag[];
  layout: Layout;
}
export interface FMProject extends FrontMatter {
  title: string;
  date: string;
  gallery?: Image[];
  description: string;
  icon?: string;
  source?: string;
  sources?: string[];
  amount?: number;
  amountAll?: number;
  execution: Execution[];
}

export interface FMPlayGround extends FrontMatter {
  year: number;
  playgrounds: Playground[];
}

// export interface FMBudget extends FrontMatter {
//   year: number;
//   programs: Program[];
// }

export interface FMBudget extends FrontMatter {
  year: number;
  items: Budget[];
  updatedDate: DateTime;
}

export interface FMGrant extends FrontMatter {
  grants: Grant[];
}

export interface Image {
  link: string;
  title?: string;
}

type Tag = 'project' | 'template' | 'playground' | 'budget2';
type Layout = 'layouts/project.njk' | 'layouts/playground.njk' | 'layouts/budget.njk';
type ExecutionStatus = "inwork" | "success" | "error" | "unknown" | "pause";
type InvPlanStatus = "inwork" | "success" | "error" | "postpone";
type ExecTitle = 'Uzemne konanie' | 'Príprava projektu' | "Analýza súčasného stavu" | "Architektonická súťaž" | "Realizácia víťazného návrhu" | "Urbanistický návrh" | "Projektová dokumentácia" | "Verejné obstarávanie" | "Výstavba" | "Investičný zámer";

export interface Execution {
    title: ExecTitle;
    status: ExecutionStatus;
    description: string;
    startExpected?: string;
    startReal?: string;
    endExpected?: string;
    endReal?: string;
    date?: DateTime;
    sub: ExecutionPart[];
    page?: Page<FMProject>;
  }
  
  export interface ExecutionPart {
    title: 'Stanovisko komisie MZ' | "Záväzné stanovisko hlavného mesta" | "Záväzné stanovisko" | string;
    status: ExecutionStatus;
    source: string;
    description: string;
    date?: DateTime;
    startExpected?: string;
    endExpected?: string;
  }

export interface Budget {
  title: string;
  id: string;
  previous?: string;
  year: number;
  program: number;
  amountOriginal: number;
  amountUpdated: number;
  amountReal: number;
  comment: string;
  status: InvPlanStatus;
  usage?: number;
}

type PlaygroundCategory = "A" | "B" | "C";
export interface Playground {
  name: string;
  district: number;
  category: PlaygroundCategory[];
  year: number;
  flag: string;
}

export interface Grant {
  title: string;
  amount: GrantAmount[];
}

export interface GrantAmount {
  year: number;
  amount: number;
  detail?: string;
}

// export interface Program {
//   program: number;
//   items: BudgetItem[];
// }

// type BudgetTag = "budget2";

// export interface BudgetYear {
//   year: number;
//   amount: number;
//   items: BudgetItem[];
// }

// export interface BudgetItem {
//   title: string;
//   amount: number;
//   lastStatusAmount?: number;
//   statuses: BudgetStatus[];
// }

// export interface BudgetStatus {
//   date: DateTime;
//   amount: number;
//   realAmount: number;
//   comment: string;
//   status: InvPlanStatus;
//   items?: BudgetDetail[];
//   initAmount?: number;
//   usage?: number;
// }

// export interface BudgetDetail {
//   title: string;
//   status: InvPlanStatus;
//   description: string;
// }
