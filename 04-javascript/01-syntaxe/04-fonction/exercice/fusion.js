"use strict";

let array = [1, 65, 78, 23, 12, 51, 2, 34, 56];
console.log(array);
/**
 * Tri un tableau en le découpant puis en le fusionnant à nouveau
 * @param {array} tab 
 * @returns {array}
 */
function triFusion(tab) 
{
  if (tab.length < 2) return tab;
  let 
    mid = Math.floor(tab.length / 2),
    right = tab.slice(mid, tab.length),
    left = tab.slice(0, mid),
    p = fusion(triFusion(left), triFusion(right));
    tab.splice(0, tab.length, ...p);

  return p;
}
/**
 * Fusionnes deux tableaux.
 * @param {array} left 
 * @param {array} right 
 * @returns {array}
 */
function fusion(left, right) {
  let 
    tab = [],
    l = 0,
    r = 0;
  while (l < left.length && r < right.length) 
  {
    if (left[l] < right[r])  tab.push(left[l++]);
    else tab.push(right[r++]);
  }
  return tab.concat(left.slice(l)).concat(right.slice(r));
}
triFusion(array);
console.log(array);