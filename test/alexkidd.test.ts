import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('alexkidd', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('alexkidd')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 120000, name: 'KOB' },
            { rank: 2, score: 100000, name: 'SGA' },
            { rank: 3, score: 80000, name: 'HKR' },
            { rank: 4, score: 60000, name: 'AMI' },
            { rank: 5, score: 40000, name: 'TSI' },
            { rank: 6, score: 25460, name: 'CE&' },
            { rank: 7, score: 20000, name: 'TNK' },
        ]
    })
})
