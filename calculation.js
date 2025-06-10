/* function calculateCategoryScores(answers) {
    const categories = {
      Spirituality: answers.slice(0, 3),
      Education: answers.slice(4, 6),
      Lifestyle: answers.slice(7, 10),
      Finances: answers.slice(11, 26),
      Career: answers.slice(17, 20),
      Avocation: answers.slice(21, 23),
      Relationships: answers.slice(24, 26),
      Entrepreneurship: answers.slice(27, 29)
    };
  
    const results = {};
    for (let cat in categories) {
      const values = categories[cat];
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      results[cat] = avg.toFixed(2);
    }
  
    console.log(results)
    return results;
  } */
///////////////////////////////////////////////////////////////

  function calculateCategoryScores(arr) {
    const Spirituality = parseInt(arr[0]) * 0.0495 + parseInt(arr[1]) * 0.0495 + parseInt(arr[2]) * 0.0495 + parseInt(arr[3]) * 0.0495
    + parseInt(arr[7]) * 0.0015 + parseInt(arr[8]) * 0.0015 + parseInt(arr[9]) * 0.0015 + parseInt(arr[10]) * 0.0015 + parseInt(arr[11]) * 0.0015
    + parseInt(arr[13]) * 0.0015 + parseInt(arr[14]) * 0.0015 + parseInt(arr[15]) * 0.0015 + parseInt(arr[16]) * 0.0015 + parseInt(arr[17]) * 0.0015 
    + parseInt(arr[21]) * 0.0015 + parseInt(arr[23]) * 0.0015 + parseInt(arr[24]) * 0.0015 + parseInt(arr[25]) * 0.0015 + parseInt(arr[26]) * 0.0015;
///
    const Education = parseInt(arr[4]) * 0.0540 + parseInt(arr[5]) * 0.0540 + parseInt(arr[6]) * 0.0540 
    + parseInt(arr[0]) * 0.0023 + parseInt(arr[1]) * 0.0023 + parseInt(arr[3]) * 0.0023
    + parseInt(arr[8]) * 0.0023 + parseInt(arr[11]) * 0.0023 + parseInt(arr[14]) * 0.0023
    + parseInt(arr[17]) * 0.0023 + parseInt(arr[21]) * 0.0023;
///
    const Lifestyle = parseInt(arr[7]) * 0.0338 + parseInt(arr[8]) * 0.0338 + parseInt(arr[9]) * 0.0338 + parseInt(arr[10]) * 0.0338 
    + parseInt(arr[0]) * 0.0014 + parseInt(arr[1]) * 0.0014 + parseInt(arr[2]) * 0.0014 + parseInt(arr[3]) * 0.0014 
    + parseInt(arr[6]) * 0.0014 + parseInt(arr[11]) * 0.0014 + parseInt(arr[14]) * 0.0014 + parseInt(arr[16]) * 0.0014 
    + parseInt(arr[17]) * 0.0014 + parseInt(arr[19]) * 0.0014 + parseInt(arr[21]);

///

    const Finances = parseInt(arr[11]) * 0.0180 + parseInt(arr[12]) * 0.0180 + parseInt(arr[13]) * 0.0180 + parseInt(arr[14]) * 0.0180 +
    parseInt(arr[15]) * 0.0180 + parseInt(arr[16]) +
    + parseInt(arr[0]) * 0.0012 + parseInt(arr[1]) * 0.0012 + parseInt(arr[2]) * 0.0012 + parseInt(arr[3]) * 0.0012
    + parseInt(arr[4]) * 0.0012 + parseInt(arr[5]) * 0.0012 + parseInt(arr[6]) * 0.0012 + parseInt(arr[7]) * 0.0012
    + parseInt(arr[8]) * 0.0012 + parseInt(arr[19]) 

///

    const Career = parseInt(arr[17]) * 0.0180 + parseInt(arr[18]) * 0.0180 + parseInt(arr[19]) * 0.0180 + parseInt(arr[20]) * 0.0180 
    + parseInt(arr[0]) * 0.0009 + parseInt(arr[1]) * 0.0009 + parseInt(arr[3]) * 0.0009 + parseInt(arr[4]) * 0.0009
    + parseInt(arr[5]) * 0.0009 + parseInt(arr[8]) * 0.0009 + parseInt(arr[9]) * 0.0009 + parseInt(arr[10]) * 0.0009
    + parseInt(arr[26]) * 0.0009


///

    const Avocation = parseInt(arr[21]) * 0.0150 + parseInt(arr[22]) * 0.0150 + parseInt(arr[23]) * 0.0150 +
    parseInt(arr[0]) * 0.0005 + parseInt(arr[1]) * 0.0005 + parseInt(arr[3]) * 0.0005 +
    parseInt(arr[6]) * 0.0005 + parseInt(arr[8]) * 0.0005 + parseInt(arr[10]) * 0.0005 +
    parseInt(arr[11]) * 0.0005 + parseInt(arr[14]) * 0.0005 + parseInt(arr[15]) * 0.0005 +
    parseInt(arr[17]) * 0.0005 + parseInt(arr[21]);

///

    const Relationships = parseInt(arr[24]) * 0.0600 + parseInt(arr[25]) * 0.0600 + parseInt(arr[26]) * 0.0600 +
    parseInt(arr[0]) * 0.0012 + parseInt(arr[1]) * 0.0012 + parseInt(arr[2]) * 0.0012 + parseInt(arr[3]) * 0.0012 +
    parseInt(arr[6]) * 0.0012 + parseInt(arr[7]) * 0.0012 + parseInt(arr[8]) * 0.0012 + parseInt(arr[9]) * 0.0012 +
    parseInt(arr[10]) * 0.0012 + parseInt(arr[11]) * 0.0012 + parseInt(arr[12]) * 0.0012 + parseInt(arr[13]) * 0.0012 +
    parseInt(arr[14]) * 0.0012 + parseInt(arr[15]) * 0.0012 + parseInt(arr[16]) * 0.0012 + parseInt(arr[17]) * 0.0012 +
    parseInt(arr[21]) * 0.0012 ;

///

    const Entrepreneurship = parseInt(arr[27]) * 0.0300 + parseInt(arr[28]) * 0.0300 + parseInt(arr[29]) * 0.0300 +
    parseInt(arr[0]) * 0.0004 + parseInt(arr[1]) * 0.0004 + parseInt(arr[2]) * 0.0004 + parseInt(arr[3]) * 0.0004 +
    parseInt(arr[4]) * 0.0004 + parseInt(arr[5]) * 0.0004 + parseInt(arr[7]) * 0.0004 + parseInt(arr[8]) * 0.0004 +
    parseInt(arr[9]) * 0.0004 + parseInt(arr[10]) * 0.0004 + parseInt(arr[11]) * 0.0004 + parseInt(arr[12]) * 0.0004 +
    parseInt(arr[13]) * 0.0004 + parseInt(arr[14]) * 0.0004 + parseInt(arr[15]) * 0.0004 + parseInt(arr[16]) * 0.0004 +
    parseInt(arr[17]) * 0.0004 + parseInt(arr[18]) * 0.0004 + parseInt(arr[19]) * 0.0004 + parseInt(arr[20]) * 0.0004 +
    parseInt(arr[23]) * 0.0004 + parseInt(arr[24]) * 0.0004 + parseInt(arr[25]) * 0.0004 + parseInt(arr[26]) * 0.0004;
    
    console.log(arr);
    console.log([Spirituality, Education, Lifestyle, Finances, Career, Avocation, Relationships, Entrepreneurship]);
    return[Spirituality, Education, Lifestyle, Finances, Career, Avocation, Relationships, Entrepreneurship] ;
  }