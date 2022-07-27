import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('airbustr', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('airbustr')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 168000, name: 'TO-Y' },
            { rank: 2, score: 148000, name: 'TOMO' },
            { rank: 3, score: 130350, name: 'S-,.' },
            { rank: 4, score: 128000, name: 'MLM ' },
            { rank: 5, score: 108000, name: 'OIC ' },
            { rank: 6, score: 88000, name: 'TACO' },
            { rank: 7, score: 68000, name: 'MOMO' },
            { rank: 8, score: 48000, name: 'MTY ' },
        ]
    })
})
