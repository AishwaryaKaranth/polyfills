const isNaN = (NaN) =>{
  return typeof(NaN) == "number" && NaN!=NaN;
}

console.log(isNaN(Number.NaN))
