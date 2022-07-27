import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('ad2083', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('ad2083')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 60000, name: 'BRU' },
            { rank: 2, score: 59000, name: 'NO ' },
            { rank: 3, score: 58900, name: 'SNO' },
            { rank: 4, score: 58000, name: 'DE ' },
            { rank: 5, score: 57000, name: 'GEO' },
            { rank: 6, score: 56000, name: 'R  ' },
            { rank: 7, score: 55000, name: 'GIO' },
            { rank: 8, score: 54000, name: '   ' },
            { rank: 9, score: 53000, name: '   ' },
            { rank: 10, score: 52000, name: '   ' },
            { rank: 11, score: 51000, name: '   ' },
            { rank: 12, score: 50000, name: '   ' },
            { rank: 13, score: 49000, name: '   ' },
            { rank: 14, score: 48000, name: '   ' },
            { rank: 15, score: 47000, name: '   ' },
            { rank: 16, score: 46000, name: '   ' },
            { rank: 17, score: 45000, name: '   ' },
            { rank: 18, score: 44000, name: '   ' },
            { rank: 19, score: 43000, name: '   ' },
            { rank: 20, score: 42000, name: '   ' },
        ]
    })
})
