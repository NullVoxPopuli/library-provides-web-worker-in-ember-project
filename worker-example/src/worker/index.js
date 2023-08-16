import { macroCondition, dependencySatisfies } from '@embroider/macros';

let works = false;

if (macroCondition(dependencySatisfies('ember-source', '*'))) {
  works = true;
}

self.addEventListener('message', function handleMessage(event) {
  console.log('worker: received message', works, event.data);
});
