import { MameHiExtractor } from "../dist";
import { resolve } from "path";

it('darius', async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get('darius')
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 600000, name: 'TSH' },
            { rank: 2, score: 595000, name: 'KEN' },
            { rank: 3, score: 590000, name: 'TKU' },
            { rank: 4, score: 585000, name: 'TOM' },
            { rank: 5, score: 580000, name: 'SGW' },
            { rank: 6, score: 575000, name: 'SAS' },
            { rank: 7, score: 570000, name: 'GWK' },
            { rank: 8, score: 565000, name: 'KKK' },
            { rank: 9, score: 560000, name: 'OJN' },
            { rank: 10, score: 555000, name: 'ZAP' },
            { rank: 11, score: 550000, name: 'TIR' },
            { rank: 12, score: 545000, name: 'VAP' },
            { rank: 13, score: 540000, name: 'OOH' },
            { rank: 14, score: 535000, name: 'SOS' },
            { rank: 15, score: 530000, name: 'EIJ' },
            { rank: 16, score: 525000, name: 'HNK' },
            { rank: 17, score: 520000, name: 'YAS' },
            { rank: 18, score: 515000, name: 'JUN' },
            { rank: 19, score: 510000, name: 'ABE' },
            { rank: 20, score: 505000, name: 'AKR' },
            { rank: 21, score: 500000, name: 'VAN' },
            { rank: 22, score: 495000, name: 'OPH' },
            { rank: 23, score: 490000, name: 'MON' },
            { rank: 24, score: 485000, name: 'SGR' },
            { rank: 25, score: 480000, name: 'DEL' },
            { rank: 26, score: 475000, name: 'IND' },
            { rank: 27, score: 470000, name: 'PSC' },
            { rank: 28, score: 465000, name: 'LEP' },
            { rank: 29, score: 460000, name: 'BOO' },
            { rank: 30, score: 455000, name: 'HYA' },
            { rank: 31, score: 450000, name: 'ERI' },
            { rank: 32, score: 445000, name: 'TAU' },
            { rank: 33, score: 440000, name: 'CMA' },
            { rank: 34, score: 435000, name: 'LUP' },
            { rank: 35, score: 430000, name: 'UMA' },
            { rank: 36, score: 425000, name: 'VIR' },
            { rank: 37, score: 420000, name: 'ARI' },
            { rank: 38, score: 415000, name: 'ORI' },
            { rank: 39, score: 410000, name: 'PIC' },
            { rank: 40, score: 405000, name: 'CAS' },
            { rank: 41, score: 400000, name: 'DOR' },
            { rank: 42, score: 395000, name: 'CNC' },
            { rank: 43, score: 390000, name: 'COM' },
            { rank: 44, score: 385000, name: 'CHR' },
            { rank: 45, score: 380000, name: 'CRV' },
            { rank: 46, score: 375000, name: 'CRB' },
            { rank: 47, score: 370000, name: 'TUC' },
            { rank: 48, score: 365000, name: 'AUR' },
            { rank: 49, score: 360000, name: 'CAM' },
            { rank: 50, score: 355000, name: 'PAV' }
        ]
    })
})
