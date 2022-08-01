import { MameHiExtractor } from "../dist";
import { resolve } from "path";

var romname = 'dynablst'

it(romname, async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get(romname)
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 26400, name: 'MANTRO' },
            { rank: 2, score: 22700, name: 'AKI...' },
            /*{ rank: 3, score: 15800, name: '♥Y.K♥ ' },*/
            { rank: 3, score: 15800, name: 'cY.Kc ' },
            { rank: 4, score: 13200, name: 'MACCOY' },
            { rank: 5, score: 12400, name: 'NANAO.' },
            { rank: 6, score: 7200, name: 'MO!YOR' },
            { rank: 7, score: 3800, name: 'OSHIKU' }
        ]
    })
})
