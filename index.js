'use strict';

var OTBM_MAP_DATA = 2;

var attributes = {
  OTBM_ATTR_DESCRIPTION: 1,
  OTBM_ATTR_EXT_SPAWN_FILE: 11,
  OTBM_ATTR_EXT_HOUSE_FILE: 13
};

module.exports = function (file, cb) {
  var BufferReader = require('buffer-reader');
  var fs = require('fs');
  var metadata = {};
  fs.readFile(file, function (err, buffer) {
    if (err) { throw err; }

    var reader = new BufferReader(buffer);

    reader.seek(6); // skiping type

    metadata.version = reader.nextUInt32LE();
    metadata.width = reader.nextUInt16LE();
    metadata.height = reader.nextUInt16LE();
    metadata.majorVersion = reader.nextUInt32LE();
    metadata.minorVersion = reader.nextUInt32LE();

    if (!reader.nextUInt8() || reader.nextUInt8() !== OTBM_MAP_DATA) {
      throw "Could not get root child node. Cannot recover from fatal error!";
    }

    var readString = function () {
      var sizeString = reader.nextUInt16LE();
      return reader.nextString(sizeString, 'utf8');
    };

    var attribute;
    while(attribute = reader.nextUInt8()) {
      switch (attribute) {
        case attributes.OTBM_ATTR_DESCRIPTION:
          metadata.description = readString();
        break;

        case attributes.OTBM_ATTR_EXT_SPAWN_FILE:
          metadata.spawnFile = readString();
        break;

        case attributes.OTBM_ATTR_EXT_HOUSE_FILE:
          metadata.houseFile = readString();
        break;

        default:
          //console.warn("Unknown header node.");
        break;
      }
    }

    cb(metadata);
  });
};
