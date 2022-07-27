import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('8ballact', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('8ballact')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 2740, name: 'A  ' },
            { rank: 2, score: 1000, name: '   ' },
            { rank: 3, score: 1000, name: '   ' },
            { rank: 4, score: 1000, name: '   ' },
            { rank: 5, score: 1000, name: '   ' },
        ]
    })
})
