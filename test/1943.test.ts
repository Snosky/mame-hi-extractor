import { MameHiExtractor } from "../src";
import { resolve } from "path";

// TODO : Screenshot 1943
it('1943', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('1943')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 20000, name: 'TAE' },
            { rank: 2, score: 16000, name: '   ' },
            { rank: 3, score: 15000, name: 'YAM' },
            { rank: 4, score: 10000, name: 'POO' },
            { rank: 5, score: 7000, name: 'MR.' },
            { rank: 6, score: 4600, name: 'BLB' },
        ]
    })
})
