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
    data: any;
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
    timelineDate?: string;
    timeline?: DateTime;
    sub: ScheduleItem[];
    page?: TemplateCollectionItem;
}

export interface ScheduleItem {
    title: string;
    status: Status;
    source: string;
    description: string;
    timelineDate?: string;
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
    source: string;
    sources: string[];
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