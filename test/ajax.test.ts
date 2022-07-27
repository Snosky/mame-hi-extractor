import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('ajax', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('ajax')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 58200, name: 'JAK' },
            { rank: 2, score: 22200, name: 'YAY' },
            { rank: 3, score: 19500, name: 'AAT' },
            { rank: 4, score: 13800, name: 'AAT' },
            { rank: 5, score: 13000, name: 'IAU' },
            { rank: 6, score: 12000, name: 'SAS' },
            { rank: 7, score: 11000, name: 'NAM' },
            { rank: 8, score: 10200, name: 'SNB' },
            { rank: 9, score: 7800, name: 'SAI' },
            { rank: 10, score: 6200, name: 'SAI' },
        ]
    })
})
