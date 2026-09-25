// Demonstration-only logistic classifier trained on invented acceleration windows.
// Input is peak absolute deceleration (m/s²) and its duration (s).
export const inventedTraining = [
  {x:[0.5,0.2],y:0},{x:[0.9,0.4],y:0},{x:[1.2,0.3],y:0},
  {x:[1.8,0.3],y:0},{x:[2.1,0.5],y:0},{x:[2.4,0.8],y:0},
  {x:[3.3,0.4],y:1},{x:[3.8,0.7],y:1},{x:[4.2,0.5],y:1},
  {x:[5.1,0.9],y:1},{x:[5.5,0.6],y:1},{x:[6.1,1.0],y:1}
];
const sigmoid=z=>1/(1+Math.exp(-z));
export function train(samples=inventedTraining,epochs=3500){
  let w=[0,0],b=0;
  for(let step=0;step<epochs;step++){
    let dw=[0,0],db=0;
    for(const {x,y} of samples){
      const err=sigmoid(w[0]*x[0]+w[1]*x[1]+b)-y;
      dw[0]+=err*x[0];dw[1]+=err*x[1];db+=err;
    }
    const lr=0.13/samples.length;
    w=w.map((v,i)=>v-lr*dw[i]);b-=lr*db;
  }
  return {weights:w,bias:b};
}
export function infer(model,window){
  if(!Array.isArray(window)||window.length!==2||window.some(v=>typeof v!=='number'||!Number.isFinite(v)||v<0||v>20))throw new Error('Invalid simulated telemetry');
  return sigmoid(model.weights[0]*window[0]+model.weights[1]*window[1]+model.bias);
}
export const simulatedTrip={id:'demo-01',route:'Atizapán Centro — Las Alamedas (inventada)',samples:[{segment:'Las Colonias → Las Alamedas',gps:[19.55,-99.26],window:[4.1,0.65],time:'8:24 a. m.'}]};
