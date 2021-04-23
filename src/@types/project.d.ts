import { DateTime } from "luxon";
import { FrontMatter, Page } from "./eleventy";

export interface Project {
  title: string;
  date: string;
  gallery?: Image[];
  description: string;
  icon?: string;
  source?: string;
  sources?: string[];
  budgetRef?: string;
  execution: Execution[];
  page?: TmpFix;
}

export interface TmpFix {
  fileSlug: string;
}

export interface FMProject extends Project, FrontMatter {
}

export interface Image {
  link: string;
  title?: string;
}

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

type ExecTitle = 'Územné konanie' | 'Príprava projektu' | "Analýza súčasného stavu" | "Architektonická súťaž" | "Realizácia víťazného návrhu" | "Urbanistický návrh" | "Projektová dokumentácia" | "Verejné obstarávanie" | "Výstavba" | "Investičný zámer";
type ExecutionStatus = "inwork" | "success" | "error" | "unknown" | "pause";