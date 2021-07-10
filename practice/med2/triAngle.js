console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3].sort((a, b) => a - b);
  
  if (angles[0] === 0 || angles.reduce((accum, next) => accum + next) < 180) return "invalid";
  if (angles.includes(90)) return "right";
  if (angles[2] < 90) return "acute";
  if (angles[2] > 90) return "obtuse";
}