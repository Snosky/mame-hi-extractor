# Mame Hi Extractor

Mame, with the plugin hiscores can extract from roms to a binary file named hi file.
Mame Hi Extractor is an hiscore binary file extractor to json.

## Install

```
npm install
```

## How to test a extractor

Example with the roms named "Raiden (set 1)" and "1941: Counter Attack (World 900227)", respectively:

```
raiden
1941
```

Put your hi file into de demo directory: `./mame-hi-extractor/demo-hiscores/hiscore/`

```
./demo-hiscores/hiscore/raiden.hi
./demo-hiscores/hiscore/raiden.1941
```

Put the hiscores screenshot(s) of rom based on you hi file into de demo directory: `./mame-hi-extractor/demo-hiscores/screenshots/`

```
./demo-hiscores/screenshots/raiden.part1.png
./demo-hiscores/screenshots/raiden.part2.png
./demo-hiscores/screenshots/1941.jpg
```

Create your extractor by copying or creating the file in the right directory: `./mame-hi-extractor/src/Extractor/`

```
./src/Extractor/raiden.ts
./src/Extractor/1941.ts
````

And create your testing hiscores file unto the right directory: `./mame-hi-extractor/test/`

```
./test/raiden.test.ts
./test/1941.test.ts
```

Using binary jest for testing your extractor, example: 

```
./node_modules/.bin/jest raiden
./node_modules/.bin/jest 1941
```
