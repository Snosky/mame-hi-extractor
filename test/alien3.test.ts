import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('alien3', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('alien3')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 10000000, name: 'MIY' },
            { rank: 2, score: 9500000, name: 'SIM' },
            { rank: 3, score: 9000000, name: 'TFF' },
            { rank: 4, score: 8500000, name: 'KMA' },
            { rank: 5, score: 8000000, name: 'WIN' },
            { rank: 6, score: 7500000, name: 'JIN' },
            { rank: 7, score: 7000000, name: 'TNM' },
            { rank: 8, score: 6500000, name: 'BAB' },
            { rank: 9, score: 6000000, name: 'IKE' },
            { rank: 10, score: 5500000, name: 'KOY' },
            { rank: 11, score: 5000000, name: 'TKO' },
            { rank: 12, score: 4720000, name: '!+ ' },
            { rank: 13, score: 4500000, name: 'AKA' },
            { rank: 14, score: 4000000, name: 'KWT' },
            { rank: 15, score: 3500000, name: 'REI' },
        ]
    })
})
