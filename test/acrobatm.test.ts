import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('acrobatm', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('acrobatm')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 100000, name: 'UPL' },
            { rank: 2, score: 90000, name: 'UPL' },
            { rank: 3, score: 80000, name: 'UPL' },
            { rank: 4, score: 70000, name: 'UPL' },
            { rank: 5, score: 60000, name: 'UPL' },
            { rank: 6, score: 50000, name: 'UPL' },
            { rank: 7, score: 40000, name: 'UPL' },
            { rank: 8, score: 30000, name: 'UPL' },
            { rank: 9, score: 20000, name: 'UPL' },
            { rank: 10, score: 10000, name: 'UPL' },
        ]
    })
})
