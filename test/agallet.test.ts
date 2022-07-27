import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('agallet', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('agallet')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 700000, name: '...' },
            { rank: 2, score: 650000, name: '...' },
            { rank: 3, score: 600000, name: '...' },
            { rank: 4, score: 550000, name: '...' },
            { rank: 5, score: 500000, name: '...' },
            { rank: 6, score: 450000, name: '...' },
            { rank: 7, score: 400000, name: '...' },
            { rank: 8, score: 350000, name: '...' },
            { rank: 9, score: 330000, name: 'S. ' },
            { rank: 10, score: 300000, name: '...' },
        ]
    })
})
