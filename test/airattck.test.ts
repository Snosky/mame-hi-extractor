import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('airattck', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('airattck')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 95600, name: 'S-ABCDEF' },
            { rank: 2, score: 14000, name: 'COMADAAA' },
            { rank: 3, score: 13000, name: 'COMADABB' },
            { rank: 4, score: 12200, name: 'COMADACC' },
            { rank: 5, score: 12000, name: 'COMADADD' },
            { rank: 6, score: 11900, name: 'COMADAEE' },
            { rank: 7, score: 11800, name: 'COMADBFF' },
            { rank: 8, score: 11000, name: 'COMADBAA' },
        ]
    })
})
