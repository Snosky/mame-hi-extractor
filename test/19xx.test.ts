import { MameHiExtractor } from "../dist";
import { resolve } from "path";

// TODO : Screenshot 19xx
it('19xx', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('19xx')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 117400, name: 'SNO' },
            { rank: 2, score: 100000, name: 'UEN' },
            { rank: 3, score: 90000, name: 'KWB' },
            { rank: 4, score: 80000, name: 'HDO' },
            { rank: 5, score: 70000, name: 'INB' },
            { rank: 6, score: 60000, name: 'KMT' },
            { rank: 7, score: 50000, name: 'YOU' },
            { rank: 8, score: 40000, name: 'YOK' },
            { rank: 9, score: 30000, name: 'IKE' },
            { rank: 10, score: 23800, name: 'SNO' },
            { rank: 11, score: 20000, name: 'NON' },
        ]
    })
})
