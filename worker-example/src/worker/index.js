import { macroCondition, dependencySatisfies } from '@embroider/macros';
import { double } from './doubler';
import { assert } from '@ember/debug';

let works = false;

if (macroCondition(dependencySatisfies('ember-source', '*'))) {
  works = true;
}

self.addEventListener('message', function handleMessage(event) {
  console.log('worker: received message', works, event.data, double(2), assert);
});
