import { createObservable } from './1-create';
import { coldVsHotObservable } from './2-hot-vs-cold';
import { clearScreen } from './clear';

window.onload = function() {
  document.getElementById('createObservable').onclick = function() {
    clearScreen();
    createObservable();
  };
  document.getElementById('coldVsHotObservable').onclick = function() {
    coldVsHotObservable();
  };
};
