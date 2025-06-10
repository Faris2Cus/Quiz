

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
    + parseInt(arr[17]) * 0.0014 + parseInt(arr[19]) * 0.0014 + parseInt(arr[21]) * 0.0014;

  ///

  const Finances = parseInt(arr[11]) * 0.0180 + parseInt(arr[12]) * 0.0180 + parseInt(arr[13]) * 0.0180 + parseInt(arr[14]) * 0.0180 +
    parseInt(arr[15]) * 0.0180 + parseInt(arr[16]) * 0.0180 +
    + parseInt(arr[0]) * 0.0012 + parseInt(arr[1]) * 0.0012 + parseInt(arr[2]) * 0.0012 + parseInt(arr[3]) * 0.0012
    + parseInt(arr[4]) * 0.0012 + parseInt(arr[5]) * 0.0012 + parseInt(arr[6]) * 0.0012 + parseInt(arr[7]) * 0.0012
    + parseInt(arr[8]) * 0.0012 + parseInt(arr[19]) * 0.0012;

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
    parseInt(arr[17]) * 0.0005 + parseInt(arr[21]) * 0.0005;

  ///

  const Relationships = parseInt(arr[24]) * 0.0600 + parseInt(arr[25]) * 0.0600 + parseInt(arr[26]) * 0.0600 +
    parseInt(arr[0]) * 0.0012 + parseInt(arr[1]) * 0.0012 + parseInt(arr[2]) * 0.0012 + parseInt(arr[3]) * 0.0012 +
    parseInt(arr[6]) * 0.0012 + parseInt(arr[7]) * 0.0012 + parseInt(arr[8]) * 0.0012 + parseInt(arr[9]) * 0.0012 +
    parseInt(arr[10]) * 0.0012 + parseInt(arr[11]) * 0.0012 + parseInt(arr[12]) * 0.0012 + parseInt(arr[13]) * 0.0012 +
    parseInt(arr[14]) * 0.0012 + parseInt(arr[15]) * 0.0012 + parseInt(arr[16]) * 0.0012 + parseInt(arr[17]) * 0.0012 +
    parseInt(arr[21]) * 0.0012;

  ///

  const Entrepreneurship = parseInt(arr[27]) * 0.0300 + parseInt(arr[28]) * 0.0300 + parseInt(arr[29]) * 0.0300 +
    parseInt(arr[0]) * 0.0004 + parseInt(arr[1]) * 0.0004 + parseInt(arr[2]) * 0.0004 + parseInt(arr[3]) * 0.0004 +
    parseInt(arr[4]) * 0.0004 + parseInt(arr[5]) * 0.0004 + parseInt(arr[7]) * 0.0004 + parseInt(arr[8]) * 0.0004 +
    parseInt(arr[9]) * 0.0004 + parseInt(arr[10]) * 0.0004 + parseInt(arr[11]) * 0.0004 + parseInt(arr[12]) * 0.0004 +
    parseInt(arr[13]) * 0.0004 + parseInt(arr[14]) * 0.0004 + parseInt(arr[15]) * 0.0004 + parseInt(arr[16]) * 0.0004 +
    parseInt(arr[17]) * 0.0004 + parseInt(arr[18]) * 0.0004 + parseInt(arr[19]) * 0.0004 + parseInt(arr[20]) * 0.0004 +
    parseInt(arr[23]) * 0.0004 + parseInt(arr[24]) * 0.0004 + parseInt(arr[25]) * 0.0004 + parseInt(arr[26]) * 0.0004;

  ///Calculating the percentages of the axis values, (points gotten / maximum points for the theme, then times 100)
  let SpiritualityN = Math.round(Spirituality * 100) / 100;
  SpiritualityN = (SpiritualityN / 0.66) * 100

  let CareerN = Math.round(Career * 100) / 100;
  CareerN = (CareerN / 0.24) * 100;

  let EducationN = Math.round(Education * 100) / 100;
  EducationN = (EducationN / 0.54) * 100;

  let AvocationN = Math.round(Avocation * 100) / 100;
  AvocationN = (AvocationN / 0.15) * 100;

  let LifestyleN = Math.round(Lifestyle * 100) / 100;
  LifestyleN = (LifestyleN / 0.45) * 100;

  let RelationshipsN = Math.round(Relationships * 100) / 100;
  RelationshipsN = (RelationshipsN / 0.60) * 100;

  let FinancesN = Math.round(Finances * 100) / 100;
  FinancesN = (FinancesN / 0.36) * 100;

  let EntrepreneurshipN = Math.round(Entrepreneurship * 100) / 100;
  EntrepreneurshipN = (EntrepreneurshipN / 0.30) * 100;

  console.log("Inside the function ", [SpiritualityN, EducationN, LifestyleN, FinancesN, CareerN, AvocationN, RelationshipsN, EntrepreneurshipN]);
  return [SpiritualityN, CareerN, EducationN, AvocationN, LifestyleN, RelationshipsN, FinancesN, EntrepreneurshipN];
}