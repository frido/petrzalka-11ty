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