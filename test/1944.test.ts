import { MameHiExtractor } from "../dist";
import { resolve } from "path";

// TODO : Screenshot 1944
it('1944', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('1944')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 1000000, name: 'CAP' },
            { rank: 2, score: 900000, name: 'COM' },
            { rank: 3, score: 800000, name: 'CAP' },
            { rank: 4, score: 700000, name: 'COM' },
            { rank: 5, score: 600000, name: 'CAP' },
            { rank: 6, score: 500000, name: 'COM' },
            { rank: 7, score: 400000, name: 'CAP' },
            { rank: 8, score: 300000, name: 'COM' },
            { rank: 9, score: 200000, name: 'CAP' },
            { rank: 10, score: 107240, name: 'SNO' },
        ]
    })
})
