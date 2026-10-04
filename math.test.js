const test = require('node:test');   // ① テスト構造（test関数）を提供する組み込みモジュール
const assert = require('node:assert'); // ② 値の比較・検証（assert関数）を行う組み込みモジュール
const add = require('./math');       // ③ テスト対象の関数

test('adds 1 + 2 to equal 3', () => {
  assert.strictEqual(add(1, 2), 99);   // add(1, 2) の結果が 3 と厳密に一致するか検証
});
