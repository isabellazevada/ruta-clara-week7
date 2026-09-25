import test from 'node:test';import assert from 'node:assert/strict';
import {train,infer,inventedTraining,simulatedTrip} from './model.js';
import {project,points} from './geodata.js';
test('local classifier separates invented calm and intense braking examples',()=>{
 const fitted=train();
 assert.ok(infer(fitted,[0.7,0.3])<0.5);
 assert.ok(infer(fitted,[4.5,0.7])>0.5);
 assert.equal(inventedTraining.length,12);
 assert.equal(simulatedTrip.samples.length,1);
});
test('rejects nonfinite, missing and out-of-bounds simulated telemetry',()=>{
 const fitted=train();for(const bad of [[NaN,1],[Infinity,1],[-1,0.4],[2],['5',0.2],[25,0.2]])assert.throws(()=>infer(fitted,bad));
});
test('fictional map projection preserves ordering and bounds',()=>{
 const plotted=project(points);assert.equal(plotted.length,4);
 assert.ok(plotted.every(p=>p.x>=50&&p.x<=570&&p.y>=80&&p.y<=185));
 assert.ok(plotted.every((p,i)=>i===0||p.x>plotted[i-1].x));
 assert.throws(()=>project([{lat:0,lon:0},{lat:NaN,lon:1}]));
});
