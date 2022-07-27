import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('abcop', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('abcop')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 10000000, name: 'RGV ' },
            { rank: 2, score: 9000000, name: 'RVF ' },
            { rank: 3, score: 8000000, name: 'YZF ' },
            { rank: 4, score: 7000000, name: 'ZXR ' },
            { rank: 5, score: 6000000, name: 'YZR ' },
            { rank: 6, score: 5000000, name: 'NSR ' },
            { rank: 7, score: 4000000, name: 'CUB ' },
        ]
    })
})
