function shout(string) {}

function shout(string) {
    return string;
  }

  "Hello!".toUpperCase(); // 'HELLO!'

  function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }
  console.log(whisper("HELLO")); // Output: "hello"
console.log(whisper("JavaScript")); // Output: "javascript"

function logShout(string) {
    console.log(string.toUpperCase());
  }
  logShout("hello"); // Output: "HELLO"
logShout("JavaScript"); // Output: "JAVASCRIPT"

function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  logWhisper("HELLO"); // Output: "hello"
logWhisper("JavaScript"); // Output: "javascript"

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return `Hi ${string.charAt(0).toUpperCase()}${string.slice(1)}!`;
    }
  }
  console.log(sayHiToHeadphonedRoommate("hello")); // Output: "I can't hear you!"
console.log(sayHiToHeadphonedRoommate("JavaScript")); // Output: "Hi JavaScript!"

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return `Hi ${string.charAt(0).toUpperCase()}${string.slice(1)}!`;
    }
  }
  console.log(sayHiToHeadphonedRoommate("HELLO")); // Output: "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("JavaScript")); // Output: "Hi JavaScript!"

function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return `Hi ${string.charAt(0).toUpperCase()}${string.slice(1)}!`;
    }
  }
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // Output: "I would love to!"
console.log(sayHiToHeadphonedRoommate("HELLO")); // Output: "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("JavaScript")); // Output: "Hi JavaScript!"
