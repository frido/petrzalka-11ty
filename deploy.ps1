$currentDir = Get-Location
$outputDir = "..\frido.github.io\"

npx @11ty/eleventy
Copy-Item -Path ".\_site\*" -Destination $outputDir -Recurse -Force
Set-Location -Path $outputDir
git add .
git commit -m "11ty"
git push
Set-Location -Path $currentDir