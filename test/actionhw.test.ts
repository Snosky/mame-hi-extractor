import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('actionhw', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('actionhw')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 50000, name: 'JOE' },
            { rank: 2, score: 48900, name: 'SNO' },
            { rank: 3, score: 40000, name: 'KAM' },
            { rank: 4, score: 30000, name: 'FAS' },
            { rank: 5, score: 20000, name: 'EGO' },
        ]
    })
})
