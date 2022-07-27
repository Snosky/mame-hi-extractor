const path = require('path')
const fs = require('fs')

const extractorPath = path.resolve('.', 'src', 'Extractor')
let importsOutput = ''
let dictionary = ''

console.log('--- STARTING EXTRACTORS INDEX GENERATION ---')

fs.readdir(extractorPath,(err, files) => {
    console.log(files.length - 1 + ' extractors found !')

    for (let file of files) {
        if (file === 'index.ts') continue
        const gameName = file.replace('.ts', '')
        let className
        if (gameName[0] >= '0' && gameName[0] <= '9') {
            className = 'Extractor' + gameName
        } else {
            className = gameName[0].toUpperCase() + gameName.slice(1, gameName.length)
        }
        importsOutput += `import ${className} from "./${gameName}";\n`
        dictionary += `    '${gameName}': ${className},\n`
    }
    console.log('Writing index file')
    fs.writeFileSync(
        path.resolve(extractorPath, 'index.ts'),
        `${importsOutput}\nconst extractors: { [romName: string]: any } = {\n${dictionary}}\n\nexport default extractors`
    )
    console.log('--- EXTRACTORS INDEX GENERATION FINISHED ---')
})
