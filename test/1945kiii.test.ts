import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('1945kiii', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('1945kiii')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 500000, name: 'XUZ' },
            { rank: 2, score: 400000, name: 'EAR' },
            { rank: 3, score: 300000, name: 'TOY' },
            { rank: 4, score: 200000, name: 'MAN' },
            { rank: 5, score: 100000, name: 'ANI' },
            { rank: 6, score: 50000, name: 'SIN' },
            { rank: 7, score: 37100, name: 'SNO' },
            { rank: 8, score: 10000, name: 'NOO' },
            { rank: 9, score: 10000, name: 'PRO' },
            { rank: 10, score: 5000, name: 'MHH' },
        ]
    })
})
