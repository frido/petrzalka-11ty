import { ZverejnovanieDownloader } from "./zverejnovanie";

const run = new ZverejnovanieDownloader();
run.load((data) => {
    data.forEach(d => console.log(d.title))
}); 