$currentDir = Get-Location
$outputDir = "..\frido.github.io\"
Get-ChildItem ".\_site\" -Recurse | Remove-Item -Recurse -Force
npx @11ty/eleventy
Get-ChildItem $outputDir -Recurse | Remove-Item -Recurse -Force
Copy-Item -Path ".\_site\*" -Destination $outputDir -Recurse -Force
Copy-Item -Path "CNAME" -Destination $outputDir -Force
Set-Location -Path $outputDir
git add .
git commit -m "11ty"
git push
Set-Location -Path $currentDir