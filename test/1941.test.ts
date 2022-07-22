import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('1941', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('1941')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 7139930, name: 'SAJ' },
            { rank: 2, score: 6640513, name: 'MAF' },
            { rank: 3, score: 6440517, name: 'ATN' },
            { rank: 4, score: 6318325, name: 'SAJ' },
            { rank: 5, score: 6283216, name: '   ' },
            { rank: 6, score: 25000, name: 'COM' },
            { rank: 7, score: 24000, name: 'CAP' },
            { rank: 8, score: 23000, name: 'COM' },
            { rank: 9, score: 22000, name: 'CAP' },
            { rank: 10, score: 21000, name: 'COM' },
        ]
    })
})
