import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('raiden', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('dangar')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 60100, name: 'NOB' },
            { rank: 2, score: 60000, name: 'NI ' },
            { rank: 3, score: 55000, name: 'CHI' },
            { rank: 4, score: 52400, name: 'NOB' },
            { rank: 5, score: 50000, name: 'BU ' },
            { rank: 6, score: 49900, name: 'GUS' },
            { rank: 7, score: 47800, name: 'NOB' },
            { rank: 8, score: 47400, name: 'NOB' },
            { rank: 9, score: 47200, name: 'NOB' },
            { rank: 10, score: 46400, name: 'NOB' }
        ]
    })
})
