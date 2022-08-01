import { MameHiExtractor } from "../src";
import { resolve } from "path";

var romname = 'simpsons'

it(romname, async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get(romname)
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 108, name: 'BAT' },
            { rank: 2, score: 84, name: 'SNO' },
            { rank: 3, score: 73, name: 'HOM' },
            { rank: 4, score: 61, name: 'LIS' },
            { rank: 5, score: 57, name: 'MAR' },
            { rank: 6, score: 53, name: 'PYV' },
            { rank: 7, score: 49, name: 'MAG' },
            { rank: 8, score: 41, name: 'INC' },
            { rank: 9, score: 37, name: 'SIM' },
            { rank: 10, score: 33, name: 'MAT' }
        ]
    })
})
