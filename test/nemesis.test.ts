import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('nemesis', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('nemesis')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 57300, name: 'H.M' },
            { rank: 2, score: 48530, name: 'S.T' },
            { rank: 3, score: 33300, name: 'K.Y' },
            { rank: 4, score: 25700, name: 'K.K' },
            { rank: 5, score: 21700, name: 'NOB' },
            { rank: 6, score: 21500, name: 'K.N' },
            { rank: 7, score: 19700, name: 'NOB' },
            { rank: 8, score: 18300, name: 'NOB' },
            { rank: 9, score: 18300, name: 'NOB' },
            { rank: 10, score: 17700, name: 'M.N' }
        ]
    })
})
