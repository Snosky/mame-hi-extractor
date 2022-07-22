import { MameHiExtractor } from "../src";
import { resolve } from "path";

var romname = 'dkong'

it(romname, async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get(romname)
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 19200, name: 'MAF' },
            { rank: 2, score: 12900, name: 'NOB' },
            { rank: 3, score: 12500, name: 'GUS' },
            { rank: 4, score: 12200, name: 'NOB' },
            { rank: 5, score: 10500, name: 'NOB' }
        ]
    })
})
