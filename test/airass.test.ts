import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('airass', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('airass')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 505000, name: 'SHAKA     ' },
            { rank: 2, score: 450000, name: 'MACCOY    ' },
            { rank: 3, score: 400000, name: 'R&R AYA   ' },
            { rank: 4, score: 350000, name: 'YAMACHIN  ' },
            { rank: 5, score: 300000, name: 'DENCHAN   ' },
            { rank: 6, score: 290000, name: 'S(#)^_    ' },
            { rank: 7, score: 250000, name: 'RIKEI     ' },
            { rank: 8, score: 200000, name: 'HIYA      ' },
            { rank: 9, score: 150000, name: 'CORE_1    ' },
            { rank: 10, score: 100000, name: 'YUKI      ' },
        ]
    })
})
