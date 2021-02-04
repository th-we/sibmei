"use strict";

const assert = require('assert');
const xpath = require('fontoxpath');
const utils = require('./utils');

describe("Fermatas", () => {
  const mei = utils.getTestMeiDom('fermatas.mei');

  it("rests don't have @fermata attributes" , () => {
    const rests = xpath.evaluateXPath('//*:rest',mei);
    utils.assertHasAttrNot(rests,"fermata");
  })

  // add test when support for multiple fermatas is added (currently only 34 of 36 are exported)
  /*it("all 36 fermatas are exported", () => {
    const fermatas = xpath.evaluateXPath('//*:fermata', mei);
    assert.strictEqual(fermatas.length, 36, "Not all 36 fermatas were created");
  })*/
});
