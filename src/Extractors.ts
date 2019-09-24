import Extractor1941 from "./Extractor/1941";
import Extractor1943 from "./Extractor/1943";
import Aburner from "./Extractor/Aburner";
import Altbeast from "./Extractor/Altbeast";
import Arkanoid from "./Extractor/Arkanoid";
import Asteroid from "./Extractor/Asteroid";
import Bombjack from "./Extractor/Bombjack";
import Snowbro2 from "./Extractor/Snowbro2";
import Kungfum from "./Extractor/Kungfum";
import Smashtv from "./Extractor/Smashtv";
import Spf2t from "./Extractor/Spf2t";
import Jumpbug from "./Extractor/Jumpbug";
import Mario from "./Extractor/Mario";
import Scontra from "./Extractor/Scontra";
import Chasehq from "./Extractor/Chasehq";
import Dkong from "./Extractor/Dkong";
import Ddragon from "./Extractor/Ddragon";
import Robocop from "./Extractor/Robocop";
import Ddsom from "./Extractor/Ddsom";
import Paperboy from "./Extractor/Paperboy";
import Sf2 from "./Extractor/Sf2";
import Toki from "./Extractor/Toki";
import Xmvsf from "./Extractor/Xmvsf";
import Starwars from "./Extractor/Starwars";
import Tetris from "./Extractor/Tetris";
import Gunsmoke from "./Extractor/Gunsmoke";
import Jackal from "./Extractor/Jackal";
import Marble from "./Extractor/Marble";
import Insectx from "./Extractor/Insectx";
import Mappy from "./Extractor/Mappy";
import Pang from "./Extractor/Pang";
import Popeye from "./Extractor/Popeye";
import Qbert from "./Extractor/Qbert";
import Rtype from "./Extractor/Rtype";
import Pengo from "./Extractor/Pengo";
import Galaga from "./Extractor/Galaga";
import Invaddlx from "./Extractor/Invaddlx";
import Tmnt from "./Extractor/Tmnt";
import Wboy from "./Extractor/Wboy";
import Mk from "./Extractor/Mk";
import Gng from "./Extractor/Gng";
import Centiped from "./Extractor/Centiped";
import Pacland from "./Extractor/Pacland";
import Bosco from "./Extractor/Bosco";
import Shinobi from "./Extractor/Shinobi";
import Robotron from "./Extractor/Robotron";
import Trackfld from "./Extractor/Trackfld";
import Tutankhm from "./Extractor/Tutankhm";
import Dangar from "./Extractor/Dangar";
import Dkong3 from "./Extractor/Dkong3";
import Digdug from "./Extractor/Digdug";
import Joust from "./Extractor/Joust";
import Mslug2 from "./Extractor/Mslug2";
import Btime from "./Extractor/Btime";
import Jack from "./Extractor/Jack";
import Suprmrio from "./Extractor/Suprmrio";
import Donpachi from "./Extractor/Donpachi";
import Hyperspt from "./Extractor/Hyperspt";
import Mwalk from "./Extractor/Mwalk";
import Xevious from "./Extractor/Xevious";
import Dkongjr from "./Extractor/Dkongjr";
import Columns from "./Extractor/Columns";
import Simpsons from "./Extractor/Simpsons";
import Punchout from "./Extractor/Punchout";
import Bublbobl from "./Extractor/Bublbobl";
import Defender from "./Extractor/Defender";
import Pacmania from "./Extractor/Pacmania";
import Spang from "./Extractor/Spang";
import Invadpt2 from "./Extractor/Invadpt2";
import AbstractExtractor from "./AbstractExtractor";
import Aburner2 from "./Extractor/Aburner2";
import Ddragon2 from "./Extractor/Ddragon2";
import Galagamk from "./Extractor/Galagamk";
import Hsf2 from "./Extractor/Hsf2";
import Mk2 from "./Extractor/Mk2";
import Mslug from "./Extractor/Mslug";
import Extractor88Games from "./Extractor/88games";
import Outrun from "./Extractor/Outrun";
import Outzone from "./Extractor/Outzone";
import Bouldash from "./Extractor/Bouldash";
import Snowbros from "./Extractor/Snowbros";
import Intrepid from "./Extractor/Intrepid";
import Mercs from "./Extractor/Mercs";
import Ikari from "./Extractor/Ikari";
import Avsp from "./Extractor/Avsp";
import Extractor1942 from "./Extractor/1942";
import Extractor1944 from "./Extractor/1944";

let extractorsArray = [
    new Extractor88Games(),
    new Extractor1941(),
    new Extractor1942(),
    new Extractor1943(),
    new Extractor1944(),
    new Aburner(),
    new Aburner2(),
    new Altbeast(),
    new Arkanoid(),
    new Asteroid(),
    new Avsp(),
    new Bombjack(),
    new Bosco(),
    new Bouldash(),
    new Btime(),
    new Bublbobl(),
    new Centiped(),
    new Chasehq(),
    new Columns(),
    new Dangar(),
    new Ddragon(),
    new Ddragon2(),
    new Ddsom(),
    new Defender(),
    new Digdug(),
    new Dkong(),
    new Dkong3(),
    new Dkongjr(),
    new Donpachi(),
    new Galaga(),
    new Galagamk(),
    new Gng(),
    new Gunsmoke(),
    new Hsf2(),
    new Hyperspt(),
    new Ikari(),
    new Insectx(),
    new Intrepid(),
    new Invaddlx(),
    new Invadpt2(),
    new Jack(),
    new Jackal(),
    new Joust(),
    new Jumpbug(),
    new Kungfum(),
    new Mappy(),
    new Marble(),
    new Mario(),
    new Mercs(),
    new Mk(),
    new Mk2(),
    new Mslug(),
    new Mslug2(),
    new Mwalk(),
    new Outrun(),
    new Outzone(),
    new Pacland(),
    new Pacmania(),
    new Pang(),
    new Paperboy(),
    new Pengo(),
    new Popeye(),
    new Punchout(),
    new Qbert(),
    new Robocop(),
    new Robotron(),
    new Rtype(),
    new Scontra(),
    new Sf2(),
    new Shinobi(),
    new Simpsons(),
    new Smashtv(),
    new Snowbro2(),
    new Snowbros(),
    new Spang(),
    new Spf2t(),
    new Starwars(),
    new Suprmrio(),
    new Tetris(),
    new Tmnt(),
    new Toki(),
    new Trackfld(),
    new Tutankhm(),
    new Wboy(),
    new Xevious(),
    new Xmvsf(),
];

let extractors: {[key: string]: AbstractExtractor} = {};
for (let extractor of extractorsArray) {
    extractors[extractor.name] = extractor;
}
extractorsArray = [];
export default extractors;
