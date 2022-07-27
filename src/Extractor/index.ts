import Extractor10yard from "./10yard";
import Extractor1941 from "./1941";
import Extractor1942 from "./1942";
import Extractor1943 from "./1943";
import Extractor1944 from "./1944";
import Extractor1945kiii from "./1945kiii";
import Extractor19xx from "./19xx";
import Extractor4dwarrio from "./4dwarrio";
import Extractor88games from "./88games";
import Extractor8ballact from "./8ballact";
import Abcop from "./abcop";
import Acrobatm from "./acrobatm";
import Actionhw from "./actionhw";
import Ad2083 from "./ad2083";
import Aerofgt from "./aerofgt";
import Aerofgts from "./aerofgts";
import Afighter from "./afighter";
import Agallet from "./agallet";
import Airass from "./airass";
import Airattck from "./airattck";
import Airbustr from "./airbustr";
import Airduel from "./airduel";
import Airwolf from "./airwolf";
import Ajax from "./ajax";
import Alexkidd from "./alexkidd";
import Alien3 from "./alien3";
import Aliens from "./aliens";
import Aliensec from "./aliensec";
import Aliensyn from "./aliensyn";
import Alpham2 from "./alpham2";
import Alphaxz from "./alphaxz";
import Altbeast from "./altbeast";
import Amazon from "./amazon";
import Ambush from "./ambush";
import Angelkds from "./angelkds";
import Anteater from "./anteater";
import Appoooh from "./appoooh";
import Aquajack from "./aquajack";
import Arabfgt from "./arabfgt";
import Arabian from "./arabian";
import Argus from "./argus";
import Arkanoid from "./arkanoid";
import Arkarea from "./arkarea";
import Arknoid2 from "./arknoid2";
import Armedf from "./armedf";
import Armorcar from "./armorcar";
import Armwar from "./armwar";
import Asteroid from "./asteroid";
import Avsp from "./avsp";
import Bankp from "./bankp";
import Batman from "./batman";
import Bombjack from "./bombjack";
import Bosco from "./bosco";
import Bouldash from "./bouldash";
import Btime from "./btime";
import Bublbobl from "./bublbobl";
import Centiped from "./centiped";
import Chasehq from "./chasehq";
import Cninja from "./cninja";
import Columns from "./columns";
import Cyberlip from "./cyberlip";
import Dangar from "./dangar";
import Darius from "./darius";
import Dbreed from "./dbreed";
import Ddragon from "./ddragon";
import Ddragon2 from "./ddragon2";
import Ddsom from "./ddsom";
import Defender from "./defender";
import Demonwld from "./demonwld";
import Digdug from "./digdug";
import Digdug2 from "./digdug2";
import Dkong from "./dkong";
import Dkong3 from "./dkong3";
import Dkongjr from "./dkongjr";
import Docastle from "./docastle";
import Donpachi from "./donpachi";
import Dorunrun from "./dorunrun";
import Ffight from "./ffight";
import Galaga from "./galaga";
import Galaga88 from "./galaga88";
import Galagamk from "./galagamk";
import Gng from "./gng";
import Gunsmoke from "./gunsmoke";
import Hsf2 from "./hsf2";
import Hyperspt from "./hyperspt";
import Ikari from "./ikari";
import Ikari3 from "./ikari3";
import Insectx from "./insectx";
import Intrepid from "./intrepid";
import Invaddlx from "./invaddlx";
import Invadpt2 from "./invadpt2";
import Jack from "./jack";
import Jackal from "./jackal";
import Joust from "./joust";
import Jumpbug from "./jumpbug";
import Kungfum from "./kungfum";
import Mappy from "./mappy";
import Marble from "./marble";
import Mario from "./mario";
import Mazinger from "./mazinger";
import Mercs from "./mercs";
import Mk from "./mk";
import Mk2 from "./mk2";
import Mslug from "./mslug";
import Mslug2 from "./mslug2";
import Mwalk from "./mwalk";
import Outrun from "./outrun";
import Outzone from "./outzone";
import Pacland from "./pacland";
import Pacmania from "./pacmania";
import Pang from "./pang";
import Paperboy from "./paperboy";
import Pengo from "./pengo";
import Popeye from "./popeye";
import Punchout from "./punchout";
import Qbert from "./qbert";
import Raiden from "./raiden";
import Robocop from "./robocop";
import Robotron from "./robotron";
import Rtype from "./rtype";
import Scontra from "./scontra";
import Sf2 from "./sf2";
import Shinobi from "./shinobi";
import Simpsons from "./simpsons";
import Smashtv from "./smashtv";
import Snowbro2 from "./snowbro2";
import Snowbros from "./snowbros";
import Spang from "./spang";
import Spf2t from "./spf2t";
import Spidman from "./spidman";
import Ssriders from "./ssriders";
import Starwars from "./starwars";
import Superman from "./superman";
import Suprmrio from "./suprmrio";
import Tetris from "./tetris";
import Tmnt from "./tmnt";
import Toki from "./toki";
import Trackfld from "./trackfld";
import Tutankhm from "./tutankhm";
import Wboy from "./wboy";
import Xevious from "./xevious";
import Xmvsf from "./xmvsf";
import Zoar from "./zoar";

const extractors: { [romName: string]: any } = {
    '10yard': Extractor10yard,
    '1941': Extractor1941,
    '1942': Extractor1942,
    '1943': Extractor1943,
    '1944': Extractor1944,
    '1945kiii': Extractor1945kiii,
    '19xx': Extractor19xx,
    '4dwarrio': Extractor4dwarrio,
    '88games': Extractor88games,
    '8ballact': Extractor8ballact,
    'abcop': Abcop,
    'acrobatm': Acrobatm,
    'actionhw': Actionhw,
    'ad2083': Ad2083,
    'aerofgt': Aerofgt,
    'aerofgts': Aerofgts,
    'afighter': Afighter,
    'agallet': Agallet,
    'airass': Airass,
    'airattck': Airattck,
    'airbustr': Airbustr,
    'airduel': Airduel,
    'airwolf': Airwolf,
    'ajax': Ajax,
    'alexkidd': Alexkidd,
    'alien3': Alien3,
    'aliens': Aliens,
    'aliensec': Aliensec,
    'aliensyn': Aliensyn,
    'alpham2': Alpham2,
    'alphaxz': Alphaxz,
    'altbeast': Altbeast,
    'amazon': Amazon,
    'ambush': Ambush,
    'angelkds': Angelkds,
    'anteater': Anteater,
    'appoooh': Appoooh,
    'aquajack': Aquajack,
    'arabfgt': Arabfgt,
    'arabian': Arabian,
    'argus': Argus,
    'arkanoid': Arkanoid,
    'arkarea': Arkarea,
    'arknoid2': Arknoid2,
    'armedf': Armedf,
    'armorcar': Armorcar,
    'armwar': Armwar,
    'asteroid': Asteroid,
    'avsp': Avsp,
    'bankp': Bankp,
    'batman': Batman,
    'bombjack': Bombjack,
    'bosco': Bosco,
    'bouldash': Bouldash,
    'btime': Btime,
    'bublbobl': Bublbobl,
    'centiped': Centiped,
    'chasehq': Chasehq,
    'cninja': Cninja,
    'columns': Columns,
    'cyberlip': Cyberlip,
    'dangar': Dangar,
    'darius': Darius,
    'dbreed': Dbreed,
    'ddragon': Ddragon,
    'ddragon2': Ddragon2,
    'ddsom': Ddsom,
    'defender': Defender,
    'demonwld': Demonwld,
    'digdug': Digdug,
    'digdug2': Digdug2,
    'dkong': Dkong,
    'dkong3': Dkong3,
    'dkongjr': Dkongjr,
    'docastle': Docastle,
    'donpachi': Donpachi,
    'dorunrun': Dorunrun,
    'ffight': Ffight,
    'galaga': Galaga,
    'galaga88': Galaga88,
    'galagamk': Galagamk,
    'gng': Gng,
    'gunsmoke': Gunsmoke,
    'hsf2': Hsf2,
    'hyperspt': Hyperspt,
    'ikari': Ikari,
    'ikari3': Ikari3,
    'insectx': Insectx,
    'intrepid': Intrepid,
    'invaddlx': Invaddlx,
    'invadpt2': Invadpt2,
    'jack': Jack,
    'jackal': Jackal,
    'joust': Joust,
    'jumpbug': Jumpbug,
    'kungfum': Kungfum,
    'mappy': Mappy,
    'marble': Marble,
    'mario': Mario,
    'mazinger': Mazinger,
    'mercs': Mercs,
    'mk': Mk,
    'mk2': Mk2,
    'mslug': Mslug,
    'mslug2': Mslug2,
    'mwalk': Mwalk,
    'outrun': Outrun,
    'outzone': Outzone,
    'pacland': Pacland,
    'pacmania': Pacmania,
    'pang': Pang,
    'paperboy': Paperboy,
    'pengo': Pengo,
    'popeye': Popeye,
    'punchout': Punchout,
    'qbert': Qbert,
    'raiden': Raiden,
    'robocop': Robocop,
    'robotron': Robotron,
    'rtype': Rtype,
    'scontra': Scontra,
    'sf2': Sf2,
    'shinobi': Shinobi,
    'simpsons': Simpsons,
    'smashtv': Smashtv,
    'snowbro2': Snowbro2,
    'snowbros': Snowbros,
    'spang': Spang,
    'spf2t': Spf2t,
    'spidman': Spidman,
    'ssriders': Ssriders,
    'starwars': Starwars,
    'superman': Superman,
    'suprmrio': Suprmrio,
    'tetris': Tetris,
    'tmnt': Tmnt,
    'toki': Toki,
    'trackfld': Trackfld,
    'tutankhm': Tutankhm,
    'wboy': Wboy,
    'xevious': Xevious,
    'xmvsf': Xmvsf,
    'zoar': Zoar,
}

export default extractors