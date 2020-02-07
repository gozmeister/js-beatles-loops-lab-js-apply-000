// add solution here
function theBeatlesPlay(musician, instrument) {
  var result = []
  var i;
  var str;
  for (i=0; i < musician.length; i++) {
    str = `${musician[i]} plays ${instrument[i]}`
    result.push(str)
  }
  return result
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var love = []
  var i = 0;
  do {
    love.push("I love the Beatles!")
    i++
  }
  while (i < (15 - number)) {
  }
  return love
}