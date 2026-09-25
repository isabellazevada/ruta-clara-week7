// Fictional demonstration coordinates near Atizapán. They do not describe a verified route.
export const points=[
  {name:'Centro',lat:19.5580,lon:-99.2680},
  {name:'Las Colonias',lat:19.5554,lon:-99.2640},
  {name:'Frenada simulada',lat:19.5532,lon:-99.2612},
  {name:'Las Alamedas',lat:19.5515,lon:-99.2584}
];
export function project(route=points){
  if(!Array.isArray(route)||route.length<2||route.some(p=>!Number.isFinite(p.lat)||!Number.isFinite(p.lon)))throw new Error('Invalid demo geodata');
  const lons=route.map(p=>p.lon),lats=route.map(p=>p.lat);
  const minLon=Math.min(...lons),maxLon=Math.max(...lons),minLat=Math.min(...lats),maxLat=Math.max(...lats);
  return route.map(p=>({name:p.name,x:50+520*(p.lon-minLon)/(maxLon-minLon||1),y:185-105*(p.lat-minLat)/(maxLat-minLat||1)}));
}
