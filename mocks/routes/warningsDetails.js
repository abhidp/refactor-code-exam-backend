// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const warningsListByState = [
  {
    id: 'IDN10016',
    warnings: {
      'productType': 'Mixed',
      'service': 'Fire Weather Services',
      'start': '2024-03-24T18:05:00Z',
      'expiry': '2024-03-26T06:05:00Z',
      'text':
        'IDN10016\nAustralian Government Bureau of Meteorology\nNew South Wales\n\nNew South Wales Fire Danger Ratings\nIssued at 5:05 am EDT on Monday 25 March 2024.\n\nDistrict               Monday       Tuesday      Wednesday    Thursday     \n----------------------------------------------------------------------------\nFar North Coast        NoR 10       NoR 10       MOD 12       MOD 13       \n\nNorth Coast            NoR 7        NoR 7        NoR 7        NoR 8        \n\nGreater Hunter         MOD 16       MOD 15       MOD 17       MOD 18       \n\nGreater Sydney Region  MOD 16       MOD 15       MOD 15       MOD 16       \n\nIllawarra/Shoalhaven   MOD 16       MOD 14       MOD 12       MOD 12       \n\nFar South Coast        NoR 9        NoR 8        NoR 8        NoR 8        \n\nMonaro Alpine          MOD 20       MOD 18       MOD 15       MOD 14       \n\nThe Australian Capital Territory\n                       MOD 13       MOD 13       MOD 12       NoR 10       \n\nSouthern Ranges        MOD 20       MOD 19       MOD 15       MOD 15       \n\nCentral Ranges         MOD 17       MOD 18       MOD 17       MOD 19       \n\nNew England            MOD 12       MOD 13       MOD 15       MOD 16       \n\nNorthern Slopes        MOD 16       MOD 15       MOD 20       MOD 21       \n\nNorth Western          MOD 15       MOD 16       MOD 21       MOD 21       \n\nUpper Central West Plains\n                       MOD 13       MOD 15       MOD 18       MOD 18       \n\nLower Central West Plains\n                       MOD 13       MOD 14       MOD 16       MOD 17       \n\nSouthern Slopes        MOD 18       MOD 18       MOD 16       MOD 18       \n\nEastern Riverina       MOD 16       MOD 18       MOD 17       MOD 14       \n\nSouthern Riverina      MOD 14       MOD 18       MOD 17       MOD 12       \n\nNorthern Riverina      MOD 12       MOD 17       MOD 18       MOD 14       \n\nSouth Western          NoR 8        NoR 10       NoR 11       NoR 10       \n\nFar Western            NoR 9        NoR 10       NoR 10       NoR 11       \n\n\nCode\nFire Danger Ratings  NoR:       MOD:      HI:       EXT:      CAT:\n(Fire Behaviour      No Rating  Moderate  High      Extreme   Catastrophic \nIndex - FBI)         < 12       12-23     24-49     50-99     >= 100 \n\nNotes\n * For more information about bushfires visit the NSW Rural Fire Service at\n   http://www.rfs.nsw.gov.au\n * NSW Fire Weather Districts differ from Weather Forecast Districts.\n * Rural Fire Service information line: 1800 679 737\n * Note: On occasion Fire Danger Ratings may not adhere to FBI thresholds above\n   due to agency discretion in setting FDRs.\n\nCopyright Commonwealth of Australia 2011, Bureau of Meteorology (ABN 92 637 533\n532).  Users of these web pages are deemed to have read and accepted the\nconditions described in the Copyright, Disclaimer, and Privacy statements\n(http://www.bom.gov.au/other/copyright.shtml).\n'
    }
  },
  {
    id: 'IDN10031',
    warnings: {
      'productType': 'Mixed',
      'service': 'Fire Weather Services',
      'start': '2024-03-24T18:05:00Z',
      'expiry': '2024-03-26T06:05:00Z',
      'text':
        'IDN10031\nAustralian Government Bureau of Meteorology\nNew South Wales\n\nNew South Wales Fire Danger Ratings\nIssued at 5:05 am EDT on Monday 25 March 2024.\n\nDistrict               Monday       Tuesday      Wednesday    Thursday     \n----------------------------------------------------------------------------\nFar North Coast        NoR 10       NoR 10       MOD 12       MOD 13       \n\nNorth Coast            NoR 7        NoR 7        NoR 7        NoR 8        \n\nGreater Hunter         MOD 16       MOD 15       MOD 17       MOD 18       \n\nGreater Sydney Region  MOD 16       MOD 15       MOD 15       MOD 16       \n\nIllawarra/Shoalhaven   MOD 16       MOD 14       MOD 12       MOD 12       \n\nFar South Coast        NoR 9        NoR 8        NoR 8        NoR 8        \n\nMonaro Alpine          MOD 20       MOD 18       MOD 15       MOD 14       \n\nThe Australian Capital Territory\n                       MOD 13       MOD 13       MOD 12       NoR 10       \n\nSouthern Ranges        MOD 20       MOD 19       MOD 15       MOD 15       \n\nCentral Ranges         MOD 17       MOD 18       MOD 17       MOD 19       \n\nNew England            MOD 12       MOD 13       MOD 15       MOD 16       \n\nNorthern Slopes        MOD 16       MOD 15       MOD 20       MOD 21       \n\nNorth Western          MOD 15       MOD 16       MOD 21       MOD 21       \n\nUpper Central West Plains\n                       MOD 13       MOD 15       MOD 18       MOD 18       \n\nLower Central West Plains\n                       MOD 13       MOD 14       MOD 16       MOD 17       \n\nSouthern Slopes        MOD 18       MOD 18       MOD 16       MOD 18       \n\nEastern Riverina       MOD 16       MOD 18       MOD 17       MOD 14       \n\nSouthern Riverina      MOD 14       MOD 18       MOD 17       MOD 12       \n\nNorthern Riverina      MOD 12       MOD 17       MOD 18       MOD 14       \n\nSouth Western          NoR 8        NoR 10       NoR 11       NoR 10       \n\nFar Western            NoR 9        NoR 10       NoR 10       NoR 11       \n\n\nCode\nFire Danger Ratings  NoR:       MOD:      HI:       EXT:      CAT:\n(Fire Behaviour      No Rating  Moderate  High      Extreme   Catastrophic \nIndex - FBI)         < 12       12-23     24-49     50-99     >= 100 \n\nNotes\n * For more information about bushfires visit the NSW Rural Fire Service at\n   http://www.rfs.nsw.gov.au\n * NSW Fire Weather Districts differ from Weather Forecast Districts.\n * Rural Fire Service information line: 1800 679 737\n * Note: On occasion Fire Danger Ratings may not adhere to FBI thresholds above\n   due to agency discretion in setting FDRs.\n\nCopyright Commonwealth of Australia 2011, Bureau of Meteorology (ABN 92 637 533\n532).  Users of these web pages are deemed to have read and accepted the\nconditions described in the Copyright, Disclaimer, and Privacy statements\n(http://www.bom.gov.au/other/copyright.shtml).\n'
    }
  },
  {
    id: 'IDN10032',
    warnings: {
      'productType': 'Mixed',
      'service': 'Fire Weather Services',
      'start': '2024-03-24T18:05:00Z',
      'expiry': '2024-03-26T06:05:00Z',
      'text':
        'IDN10032\nAustralian Government Bureau of Meteorology\nNew South Wales\n\nNew South Wales Fire Danger Ratings\nIssued at 5:05 am EDT on Monday 25 March 2024.\n\nDistrict               Monday       Tuesday      Wednesday    Thursday     \n----------------------------------------------------------------------------\nFar North Coast        NoR 10       NoR 10       MOD 12       MOD 13       \n\nNorth Coast            NoR 7        NoR 7        NoR 7        NoR 8        \n\nGreater Hunter         MOD 16       MOD 15       MOD 17       MOD 18       \n\nGreater Sydney Region  MOD 16       MOD 15       MOD 15       MOD 16       \n\nIllawarra/Shoalhaven   MOD 16       MOD 14       MOD 12       MOD 12       \n\nFar South Coast        NoR 9        NoR 8        NoR 8        NoR 8        \n\nMonaro Alpine          MOD 20       MOD 18       MOD 15       MOD 14       \n\nThe Australian Capital Territory\n                       MOD 13       MOD 13       MOD 12       NoR 10       \n\nSouthern Ranges        MOD 20       MOD 19       MOD 15       MOD 15       \n\nCentral Ranges         MOD 17       MOD 18       MOD 17       MOD 19       \n\nNew England            MOD 12       MOD 13       MOD 15       MOD 16       \n\nNorthern Slopes        MOD 16       MOD 15       MOD 20       MOD 21       \n\nNorth Western          MOD 15       MOD 16       MOD 21       MOD 21       \n\nUpper Central West Plains\n                       MOD 13       MOD 15       MOD 18       MOD 18       \n\nLower Central West Plains\n                       MOD 13       MOD 14       MOD 16       MOD 17       \n\nSouthern Slopes        MOD 18       MOD 18       MOD 16       MOD 18       \n\nEastern Riverina       MOD 16       MOD 18       MOD 17       MOD 14       \n\nSouthern Riverina      MOD 14       MOD 18       MOD 17       MOD 12       \n\nNorthern Riverina      MOD 12       MOD 17       MOD 18       MOD 14       \n\nSouth Western          NoR 8        NoR 10       NoR 11       NoR 10       \n\nFar Western            NoR 9        NoR 10       NoR 10       NoR 11       \n\n\nCode\nFire Danger Ratings  NoR:       MOD:      HI:       EXT:      CAT:\n(Fire Behaviour      No Rating  Moderate  High      Extreme   Catastrophic \nIndex - FBI)         < 12       12-23     24-49     50-99     >= 100 \n\nNotes\n * For more information about bushfires visit the NSW Rural Fire Service at\n   http://www.rfs.nsw.gov.au\n * NSW Fire Weather Districts differ from Weather Forecast Districts.\n * Rural Fire Service information line: 1800 679 737\n * Note: On occasion Fire Danger Ratings may not adhere to FBI thresholds above\n   due to agency discretion in setting FDRs.\n\nCopyright Commonwealth of Australia 2011, Bureau of Meteorology (ABN 92 637 533\n532).  Users of these web pages are deemed to have read and accepted the\nconditions described in the Copyright, Disclaimer, and Privacy statements\n(http://www.bom.gov.au/other/copyright.shtml).\n'
    }
  }
];

module.exports = [
  {
    id: 'warningDetail',
    url: '/warning/:id',
    method: 'GET',
    variants: [
      {
        id: 'IDN10016', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: warningsListByState[0].warnings // body to send
        }
      },
      {
        id: 'IDN10031', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: warningsListByState[1].warnings // body to send
        }
      },
      {
        id: 'IDN10032', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: warningsListByState[2].warnings // body to send
        }
      }
    ]
  }
];
