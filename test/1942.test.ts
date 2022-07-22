import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('1942', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('1942')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 40000, name: '  CAPCOM' },
            { rank: 2, score: 35000, name: 'ALL     ' },
            { rank: 3, score: 30000, name: 'RIGHT   ' },
            { rank: 4, score: 25000, name: 'RESERVED' },
            { rank: 5, score: 20000, name: 'EXEDEXES' },
            { rank: 6, score: 9999, name: 'VULGUS  ' },
            { rank: 7, score: 8888, name: 'SONSON  ' },
            { rank: 8, score: 7777, name: 'HIGEMARU' },
            { rank: 9, score: 6666, name: 'EXEDEXES' },
            { rank: 10, score: 5555, name: 'NAKASATO' },
            { rank: 11, score: 1500, name: '        ' },
            { rank: 12, score: 1400, name: '        ' },
            { rank: 13, score: 1300, name: '        ' },
            { rank: 14, score: 1200, name: '        ' },
            { rank: 15, score: 1100, name: '        ' },
            { rank: 16, score: 1000, name: '        ' },
            { rank: 17, score: 900, name: '        ' },
            { rank: 18, score: 800, name: '        ' },
            { rank: 19, score: 700, name: '        ' },
            { rank: 20, score: 600, name: '        ' },
            { rank: 21, score: 500, name: '        ' },
            { rank: 22, score: 400, name: '        ' },
            { rank: 23, score: 300, name: '        ' },
            { rank: 24, score: 200, name: '        ' },
            { rank: 25, score: 100, name: '        ' },
        ]
    })
})
