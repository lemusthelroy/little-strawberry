import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  // Get the numbers from the query string
  const nums =
    event.queryStringParameters?.numbers?.split(",").map(Number) || [];

  // If length of numbers equals zero or is greater than 50, return 400
  if (nums.length === 0 || nums.length > 50) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Invalid number of numbers",
      }),
    };
  }

  const sums = generateSums(nums);

  return {
    statusCode: 200,
    body: JSON.stringify(sums),
  };
};

// A function that, using a ceiling of 12, takes a list of numbers and works out all of the possible timestable combinations for each number
const generateSums = (numbers: number[]) => {
  const ceiling = 12;
  const sumMap: { [key: string]: { x: number; y: number } } = {};

  numbers.forEach((num) => {
    // Start a for loop at 1 and go up to the ceiling
    for (let i = 1; i <= ceiling; i++) {
      const key1 = `${i}|${num}`;
      const key2 = `${num}|${i}`;

      // If the key doesn't exist in the sumMap, add it
      if (!sumMap[key1] && !sumMap[key2]) {
        // Generate a random number between 1 and 2
        const randInt = Math.floor(Math.random() * 2) + 1;
        if (randInt === 1) {
          sumMap[key1] = {
            x: i,
            y: num,
          };
        }
        if (randInt === 2) {
          sumMap[key1] = {
            x: num,
            y: i,
          };
        }
      }
    }
  });

  return Object.values(sumMap);
};
