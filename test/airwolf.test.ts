import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('airwolf', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('airwolf')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 50000, name: 'YOSHIKIKUN' },
            { rank: 2, score: 40000, name: 'KANKUROU  ' },
            { rank: 3, score: 30000, name: 'CHAPY HARA' },
            { rank: 4, score: 20000, name: 'YAHICHI   ' },
            { rank: 5, score: 18040, name: 'S.,; ABCDE' },
        ]
    })
})
