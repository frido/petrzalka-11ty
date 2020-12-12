import { DateTime } from "luxon";

export interface TemplateCollection<T> {
    getAll(): TemplateCollectionItem<T>[];
    getFilteredByTag(tag: string): TemplateCollectionItem<T>[]
}

export interface TemplateCollectionItem<T> {
    inputPath: string;
    fileSlug: string;
    filePathStem: string;
    date: Date;
    outputPath: string;
    url: string;
    data: T;
    template: any;
}

export interface Schedule {
    title: string;
    status: Status;
    description: string;
    startExpected?: string;
    startReal?: string;
    endExpected?: string;
    endReal?: string;
    // timelineDate?: string;
    timeline?: DateTime;
    // timeline2?: Date;
    sub: ScheduleItem[];
    page?: TemplateCollectionItem<FrontMatter>;
}

export interface ScheduleItem {
    title: 'Stanovisko komisie MZ' | 'Záväzné stanovisko' | string;
    status: Status;
    source: string;
    description: string;
    // timelineDate?: string;
    timeline?: DateTime;
    startExpected?: string;
    endExpected?: string;
}

export interface Post {
    data(): FrontMatter ;
    render(data: FrontMatter): string;
}

// TODO: front matter by mal byt generic
export interface FrontMatter {
    title: string;
    date: string;
    gallery?: Image[];
    tags: Tag[];
    layout: "layouts/post2.njk";
    description: string;
    icon?: string;
    source?: string;
    sources?: string[];
    amount?: number;
    amountAll?: number;
    schedule: Schedule[];
}

export interface Image {
    link: string;
    title?: string;
}

type Tag = "projekt" | 'template'
type Status = "inwork" | "success" | 'error' | 'unknown' | 'pause'
type InvPlanStatus = "inwork" | "success" | 'error' | 'postpone'

export interface Budget {
    data(): FMBudget2 ;
    render(data: FMBudget2): string;
}

export interface PlayGroundPage {
    data(): FMPlayGround ;
    render(data: FMPlayGround): string;
}

export interface FMBudget {
    year: number;
    programs: Program[];
    layout: "layouts/rozpocet.njk";
    tags: string[];
}

export interface FMBudget2 {
    year: number;
    items: BudgetItem2[];
    layout: "layouts/rozpocet.njk";
    tags: string[];
    updatedDate: DateTime;
}

export interface BudgetItem2 {
    title: string;
    id: string;
    previous?: string;
    year?: number; // calculated
    program: number;
    amountOriginal: number;
    amountUpdated: number;
    amountReal: number;
    comment: string;
    status: InvPlanStatus;
    usage?: number;
}

export interface FMPlayGround {
    year: number;
    layout: "layouts/ihriska.njk";
    tags: string[];
    source: string;
    playgrounds: PlayGround[];
}

type PlayGroundCategory = 'A' | 'B' | 'C'
export interface PlayGround {
    name: string;
    district: number;
    category: PlayGroundCategory[];
    year: number;
    flag: string;
}

export interface Program {
    program: number;
    items: BudgetItem[];
}

type BudgetTag = 'budget2';

export interface BudgetYear {
    year: number;
    amount: number;
    items: BudgetItem[];
}

export interface BudgetItem {
    title: string;
    amount: number;
    lastStatusAmount?: number;
    statuses: BudgetStatus[]
}

export interface BudgetStatus {
    date: DateTime;
    amount: number;
    realAmount: number;
    comment: string;
    status: InvPlanStatus;
    items?: BudgetDetail[];
    initAmount?: number;
    usage?: number;
}

export interface BudgetDetail {
    title: string;
    status: InvPlanStatus;
    description: string;
}