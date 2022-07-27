import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('galagamk', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('galagamk')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 85210, name: 'SAJ' },
            { rank: 2, score: 45070, name: 'FMR' },
            { rank: 3, score: 28390, name: 'AMA' },
            { rank: 4, score: 27390, name: 'EGA' },
            { rank: 5, score: 20000, name: 'N.N' }
        ]
    })
})
