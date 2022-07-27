import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('10yard', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('10yard')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 36500, name: 'BMB' },
            { rank: 2, score: 34900, name: 'RAD' },
            { rank: 3, score: 34450, name: 'SNO' },
            { rank: 4, score: 33100, name: 'P.P' },
            { rank: 5, score: 31700, name: 'FAL' },
            { rank: 6, score: 29900, name: 'ZIB' },
            { rank: 7, score: 28300, name: 'TOZ' },
            { rank: 8, score: 27100, name: 'LWP' },
            { rank: 9, score: 25700, name: 'JUF' },
            { rank: 10, score: 24500, name: 'TCZ' },
            { rank: 11, score: 22900, name: 'TCR' },
            { rank: 12, score: 21300, name: 'FQN' },
            { rank: 13, score: 19700, name: 'LWL' },
            { rank: 14, score: 18700, name: 'BMP' },
            { rank: 15, score: 18100, name: 'BMF' },
            { rank: 16, score: 17300, name: 'XSD' },
            { rank: 17, score: 16700, name: 'RAX' },
            { rank: 18, score: 15700, name: 'RAP' },
            { rank: 19, score: 14700, name: 'DOL' },
            { rank: 20, score: 13700, name: 'HSH' },
            { rank: 21, score: 13100, name: 'XGJ' },
            { rank: 22, score: 12300, name: 'VEX' },
            { rank: 23, score: 11700, name: 'NIT' },
        ]
    })
})
