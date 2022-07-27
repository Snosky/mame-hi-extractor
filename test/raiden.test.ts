import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('raiden', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('raiden')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 50000, name: '...' },
            { rank: 2, score: 45000, name: '...' },
            { rank: 3, score: 40000, name: '...' },
            { rank: 4, score: 35000, name: '...' },
            { rank: 5, score: 30000, name: '...' },
            { rank: 6, score: 28730, name: 'NAS' },
            { rank: 7, score: 25000, name: '...' },
            { rank: 8, score: 24320, name: 'N  ' },
            { rank: 9, score: 20000, name: '...' }
        ],
        extras: {
            dual : [
                { rank: 1, score: 56620, name: 'A .' },
                { rank: 2, score: 50000, name: '...' },
                { rank: 3, score: 45000, name: '...' },
                { rank: 4, score: 40000, name: '...' },
                { rank: 5, score: 35000, name: '...' },
                { rank: 6, score: 31410, name: ' ..' },
                { rank: 7, score: 30000, name: '...' },
                { rank: 8, score: 25000, name: '...' },
                { rank: 9, score: 20000, name: '...' }
            ],
        }
    })
})
