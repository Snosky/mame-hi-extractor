import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('captcomm', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('captcomm')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 104378, name: 'GUS' },
            { rank: 2, score: 96181, name: 'NOB' },
            { rank: 3, score: 59000, name: 'EGW' },
            { rank: 4, score: 58000, name: 'OHO' },
            { rank: 5, score: 57000, name: 'YOS' },
            { rank: 6, score: 56000, name: 'UEN' },
            { rank: 7, score: 55000, name: 'YOK' },
            { rank: 8, score: 54000, name: 'IZU' },
            { rank: 9, score: 53000, name: 'CPS' },
            { rank: 10, score: 52000, name: 'CAP' },
            { rank: 11, score: 51000, name: 'COM' },
            { rank: 12, score: 50000, name: 'ABC' },
            { rank: 13, score: 49000, name: 'EGW' },
            { rank: 14, score: 48000, name: 'OHO' },
            { rank: 15, score: 47000, name: 'YOS' },
            { rank: 16, score: 46000, name: 'UEN' },
            { rank: 17, score: 45000, name: 'YOK' },
            { rank: 18, score: 44000, name: 'IZU' },
            { rank: 19, score: 43000, name: 'CPS' },
            { rank: 20, score: 42000, name: 'CAP' },
            { rank: 21, score: 41000, name: 'COM' },
            { rank: 22, score: 40000, name: 'ABC' },
            { rank: 23, score: 39000, name: 'EGW' },
            { rank: 24, score: 38000, name: 'OHO' },
            { rank: 25, score: 37000, name: 'YOS' },
            { rank: 26, score: 36000, name: 'UEN' },
            { rank: 27, score: 35000, name: 'YOK' },
            { rank: 28, score: 34000, name: 'IZU' },
            { rank: 29, score: 33000, name: 'CPS' },
            { rank: 30, score: 32000, name: 'CAP' },
            { rank: 31, score: 31000, name: 'COM' },
            { rank: 32, score: 30000, name: 'ABC' },
            { rank: 33, score: 29000, name: 'EGW' },
            { rank: 34, score: 28000, name: 'OHO' },
            { rank: 35, score: 27000, name: 'YOS' },
            { rank: 36, score: 26000, name: 'UEN' },
            { rank: 37, score: 25000, name: 'YOK' },
            { rank: 38, score: 24000, name: 'IZU' },
            { rank: 39, score: 23000, name: 'CPS' },
            { rank: 40, score: 22000, name: 'CAP' },
            { rank: 41, score: 21000, name: 'COM' },
            { rank: 42, score: 20000, name: 'ABC' },
            { rank: 43, score: 19000, name: 'EGW' },
            { rank: 44, score: 18000, name: 'OHO' },
            { rank: 45, score: 17000, name: 'YOS' },
            { rank: 46, score: 16000, name: 'UEN' },
            { rank: 47, score: 15000, name: 'YOK' },
            { rank: 48, score: 14000, name: 'IZU' },
            { rank: 49, score: 13000, name: 'CAP' },
            { rank: 50, score: 12000, name: 'COM' }
        ]
    })
})
