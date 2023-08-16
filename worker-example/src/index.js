export class Example {
  #worker;

  constructor() {
    this.#worker = new Worker('./worker/index.js', { type: 'module' });
  }

  sendMessage(data) {
    this.#worker.postMessage(data);
  }
}
