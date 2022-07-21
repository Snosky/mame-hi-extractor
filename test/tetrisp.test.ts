import { MameHiExtractor } from "../src";
import { resolve } from "path";

it('tetrisp', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('tetrisp')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 66000, name: 'SKI' },
            { rank: 2, score: 51800, name: 'NSP' },
            { rank: 3, score: 18800, name: 'DID' },
            { rank: 4, score: 17500, name: 'SKI' },
            { rank: 5, score: 17200, name: 'NSP' }
        ],
        extras: {
            puzzle : [
                { rank: 1, score: 10000, name: 'PQR' },
                { rank: 2, score: 5000, name: 'STU' },
                { rank: 3, score: 3000, name: 'VWX' },
                { rank: 4, score: 2000, name: 'YZ.' },
                { rank: 5, score: 1000, name: '!?-' }
            ],
        }
    })
})
