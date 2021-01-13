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

type Tag = 'project' | 'template' | 'playground' | 'budget2';
type Layout = 'layouts/project.njk' | 'layouts/playground.njk' | 'layouts/budget.njk';