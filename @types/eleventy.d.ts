import { DateTime } from "luxon";

export interface TemplateCollection {
    getAll(): TemplateCollectionItem[];
    getFilteredByTag(tag: string): TemplateCollectionItem[]
}

export interface TemplateCollectionItem {
    inputPath: string;
    fileSlug: string;
    filePathStem: string;
    date: Date;
    outputPath: string;
    url: string;
    data: FrontMatter;
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
    page?: TemplateCollectionItem;
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
type InvPlanStatus = "inwork" | "success" | 'error'

export interface Budget {
    data(): FMBudget ;
    render(data: FMBudget): string;
}

export interface FMBudget {
    tags: BudgetTag[]
    title: string;
    icon: string;
    color: string;
    years: BudgetYear[]
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