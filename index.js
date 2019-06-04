// Grandma can't hear you if you're quiet
// 

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout(string));
}
function logWhisper(string) {
  console.log(whisper(string));
}

// if lowercase, "I'cant hear you". If uppercase, "Yes Indeed", if string is "I love you, Grandma" she will say " I love you too."
function sayHiToGrandma(string) {
  if (string == whisper(string)) {
    return "I can\'t hear you!"
  } else if (string == shout(string)) {
    return "YES INDEED!"
  } else if (string == "I love you, Grandma.") {
    return "I love you, too."
  }
}