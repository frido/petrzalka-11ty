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
    status: string;
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
    
}

export interface Post {
    data(): FrontMatter ;
    render(data: FrontMatter): string;
}

export interface FrontMatter {
    title: string;
    date: string;
    draft: boolean;
    tags: Tag[];
    layout: "layouts/post2.njk";
    description: string;
    icon: string;
    source: string;
    sources: string[];
    amount: number;
    schedule: Schedule[];
}

type Tag = "projekt"
type Status = "inwork" | "success" | 'error'