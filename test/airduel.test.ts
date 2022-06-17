import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('airduel', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('airduel')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 3300, name: 'S DIMMMMM' },
            { rank: 2, score: 0, name: '         ' },
            { rank: 3, score: 0, name: '         ' },
            { rank: 4, score: 0, name: '         ' },
            { rank: 5, score: 0, name: '         ' },
            { rank: 6, score: 0, name: '         ' },
            { rank: 7, score: 0, name: '         ' },
            { rank: 8, score: 0, name: '         ' },
            { rank: 9, score: 0, name: '         ' },
            { rank: 10, score: 0, name: '         ' },
        ]
    })
})
