import { MameHiExtractor } from '../src'
import { resolve } from "path";

it('4dwarrio', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../hiscores'))
    const extractor = await a.get('4dwarrio')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 20000, name: 'RIC' },
            { rank: 2, score: 19000, name: 'GOL' },
            { rank: 3, score: 18000, name: 'SPO' },
            { rank: 4, score: 17000, name: 'BIL' },
            { rank: 5, score: 16000, name: 'ZYA' },
            { rank: 6, score: 15000, name: 'DAL' },
            { rank: 7, score: 14000, name: 'DOL' },
            { rank: 8, score: 13000, name: 'EBI' },
            { rank: 9, score: 12000, name: 'DER' },
            { rank: 10, score: 11800, name: 'SNO' },
        ]
    })
})
