import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('aerofgt', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('aerofgt')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 100000, name: 'AAA' },
            { rank: 2, score: 92100, name: 'S.-' },
            { rank: 3, score: 90000, name: 'BBB' },
            { rank: 4, score: 80000, name: 'CCC' },
            { rank: 5, score: 70000, name: 'DDD' },
            { rank: 6, score: 60000, name: 'EEE' },
            { rank: 7, score: 50000, name: 'FFF' },
            { rank: 8, score: 40000, name: 'GGG' },
            { rank: 9, score: 30000, name: 'HHH' },
            { rank: 10, score: 20000, name: 'III' },
        ]
    })
})
