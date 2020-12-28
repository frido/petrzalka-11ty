# Projects in Petržalka

Web page about development projects in Petržalka

The page contains open information collected from Slovak government pages: plans, deadlines, government resolutions, etc. are summarized and displayed in an elegant and concise way.

You can access the page on [petrzalka.info](http://petrzalka.info/) or [frido.github.io](https://github.com/frido/frido.github.io)

## Develop

```.\start.ps1```

run vscode task: ```tsc: watch - eleventy``` to compile `.eleventy.ts` file

run vscode task: ```tsc: watch - src``` to compile `src` folder

## Build

Compile ts to js

```tsc```

Generate static pages

```npx @11ty/eleventy```

## Run
Run server

```npx @11ty/eleventy --serve```

## Deploy

Copy the` _site` folder to a destination.

Generated static pages are deployed on `frido.github.io` (GitHub pages)

run: ```.\deploy.ps1```
