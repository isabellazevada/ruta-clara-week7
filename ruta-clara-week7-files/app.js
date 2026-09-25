import {train,infer,simulatedTrip} from './model.js';
import {project,points} from './geodata.js';
const $=id=>document.getElementById(id);
const consent=$('consent'),trip=$('trip'),optin=$('optin');
const contextLabels={peatón:'Había peatón',bache:'Había un bache',vehículo:'Se cruzó otro vehículo',error:'La alerta fue un error'};
const model=train();
let context=null;
const probability=infer(model,simulatedTrip.samples[0].window);
$('probability').textContent=`${Math.round(probability*100)}% de probabilidad de frenada intensa`;
$('uncertainty').textContent='No explica la causa';
function render(){
  const answered=context!==null;
  $('choices').hidden=answered;
  $('review').hidden=!answered;
  $('review-text').textContent=answered?`${contextLabels[context]}. La explicación de la conductora queda pendiente de revisión humana; el sistema no confirma culpabilidad.`:'';
  $('unresolved').textContent='1';
  $('contextualized').textContent=answered?'1':'0';
  $('sanctions').textContent='0';
}
optin.addEventListener('change',()=>{$('begin').disabled=!optin.checked});
$('begin').addEventListener('click',()=>{if(!optin.checked)return;consent.hidden=true;trip.hidden=false;window.scrollTo({top:0,behavior:'smooth'})});
$('exit').addEventListener('click',()=>{context=null;optin.checked=false;$('begin').disabled=true;trip.hidden=true;consent.hidden=false;render();window.scrollTo({top:0,behavior:'smooth'})});
document.querySelectorAll('[data-context]').forEach(button=>button.addEventListener('click',()=>{const next=button.dataset.context;if(!(next in contextLabels))return;context=next;render()}));
$('undo').addEventListener('click',()=>{context=null;render()});
render();

const coords=project(points),svgNS='http://www.w3.org/2000/svg';
const line=coords.map((p,i)=>`${i?'L':'M'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
$('map-road').setAttribute('d',line);$('map-route').setAttribute('d',line);
for(const [i,p] of coords.entries()){
  const circle=document.createElementNS(svgNS,'circle');circle.setAttribute('cx',p.x);circle.setAttribute('cy',p.y);
  circle.setAttribute('r',i===2?'20':'12');if(i===2)circle.setAttribute('class','event');
  $('map-markers').append(circle);
  if(i===2){const t=document.createElementNS(svgNS,'text');t.setAttribute('x',p.x);t.setAttribute('y',p.y+8);t.setAttribute('text-anchor','middle');t.setAttribute('class','bang');t.textContent='!';$('map-markers').append(t)}
}
