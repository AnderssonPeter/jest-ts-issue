import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';

export default function setupProj4() {
    console.log('registering proj4')
    proj4.defs(
        'EPSG:3006',
        '+title=SWEREF99 TM +proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +k_0=0.9996 +units=m +no_defs +axis=neu'
    );
    register(proj4);
}