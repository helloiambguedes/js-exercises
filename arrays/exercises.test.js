// Import the functions to be tested
const {
	sortAlphabetically,
	filterEvenNumbers,
	sortObjectsByName,
	filterByCategory,
	reverseStrings,
	sortDescending,
	filterByPropertyValue,
	sortObjectsByNumericProperty,
	filterByMultipleCategories,
} = require("./exercises");

describe("sortAlphabetically", () => {
	test("should sort an array of strings in alphabetical order", () => {
		const input = ["banana", "apple", "orange", "grape"];
		const expectedOutput = ["apple", "banana", "grape", "orange"];

		const result = sortAlphabetically(input);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an empty array", () => {
		const input = [];
		const expectedOutput = [];

		const result = sortAlphabetically(input);

		expect(result).toEqual(expectedOutput);
	});

	test("should handle arrays with duplicate strings", () => {
		const input = ["apple", "orange", "apple", "banana"];
		const expectedOutput = ["apple", "apple", "banana", "orange"];

		const result = sortAlphabetically(input);

		expect(result).toEqual(expectedOutput);
	});
});

describe("filterEvenNumbers", () => {
	test("should filter out even numbers from an array of numbers", () => {
		const input = [1, 2, 3, 4, 5, 6];
		const expectedOutput = [2, 4, 6];

		const result = filterEvenNumbers(input);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an array with no even numbers", () => {
		const input = [1, 3, 5];
		const expectedOutput = [];

		const result = filterEvenNumbers(input);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an empty array", () => {
		const input = [];
		const expectedOutput = [];

		const result = filterEvenNumbers(input);

		expect(result).toEqual(expectedOutput);
	});
});

describe("sortObjectsByName", () => {
	test('should sort an array of objects by the "name" property in alphabetical order', () => {
		const input = [
			{ name: "Banana" },
			{ name: "Apple" },
			{ name: "Orange" },
			{ name: "Grape" },
		];
		const expectedOutput = [
			{ name: "Apple" },
			{ name: "Banana" },
			{ name: "Grape" },
			{ name: "Orange" },
		];

		const result = sortObjectsByName(input);

		expect(result).toEqual(expectedOutput);
	});

	test('should handle objects with the same "name" property', () => {
		const input = [
			{ name: "Banana" },
			{ name: "Apple" },
			{ name: "Banana" },
			{ name: "Grape" },
		];
		const expectedOutput = [
			{ name: "Apple" },
			{ name: "Banana" },
			{ name: "Banana" },
			{ name: "Grape" },
		];

		const result = sortObjectsByName(input);

		expect(result).toEqual(expectedOutput);
	});
});

describe("filterByCategory", () => {
	test("should filter objects by a specified category", () => {
		const input = [
			{
				category: "fruit",
				name: "Apple",
			},
			{
				category: "fruit",
				name: "Banana",
			},
			{
				category: "vegetable",
				name: "Carrot",
			},
			{
				category: "fruit",
				name: "Orange",
			},
		];
		const category = "fruit";
		const expectedOutput = [
			{
				category: "fruit",
				name: "Apple",
			},
			{
				category: "fruit",
				name: "Banana",
			},
			{
				category: "fruit",
				name: "Orange",
			},
		];

		const result = filterByCategory(input, category);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when no objects belong to the specified category", () => {
		const input = [
			{
				category: "fruit",
				name: "Apple",
			},
			{
				category: "fruit",
				name: "Banana",
			},
			{
				category: "vegetable",
				name: "Carrot",
			},
			{
				category: "fruit",
				name: "Orange",
			},
		];
		const category = "meat";
		const expectedOutput = [];

		const result = filterByCategory(input, category);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an empty array", () => {
		const input = [];
		const category = "fruit";
		const expectedOutput = [];

		const result = filterByCategory(input, category);

		expect(result).toEqual(expectedOutput);
	});
});

describe("reverseStrings", () => {
	test("should reverse an array of strings", () => {
		const input = ["apple", "orange", "banana"];
		const expectedOutput = ["elppa", "egnaro", "ananab"];

		const result = reverseStrings(input);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an empty array", () => {
		const input = [];
		const expectedOutput = [];

		const result = reverseStrings(input);

		expect(result).toEqual(expectedOutput);
	});
});

describe("sortDescending", () => {
	test("should sort an array of numbers in descending order", () => {
		const input = [5, 2, 9, 1, 3];
		const expectedOutput = [9, 5, 3, 2, 1];

		const result = sortDescending(input);

		expect(result).toEqual(expectedOutput);
	});

	test("should handle arrays with negative numbers", () => {
		const input = [5, -2, 9, -1, 3];
		const expectedOutput = [9, 5, 3, -1, -2];

		const result = sortDescending(input);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an empty array", () => {
		const input = [];
		const expectedOutput = [];

		const result = sortDescending(input);

		expect(result).toEqual(expectedOutput);
	});
});

describe("filterByPropertyValue", () => {
	test("should filter objects by a specified property value", () => {
		const input = [
			{ type: "fruit", name: "Apple" },
			{ type: "fruit", name: "Banana" },
			{
				type: "vegetable",
				name: "Carrot",
			},
			{ type: "fruit", name: "Orange" },
		];
		const property = "type";
		const value = "fruit";
		const expectedOutput = [
			{ type: "fruit", name: "Apple" },
			{ type: "fruit", name: "Banana" },
			{ type: "fruit", name: "Orange" },
		];

		const result = filterByPropertyValue(input, property, value);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when no objects have the specified property value", () => {
		const input = [
			{ type: "fruit", name: "Apple" },
			{ type: "fruit", name: "Banana" },
			{
				type: "vegetable",
				name: "Carrot",
			},
			{ type: "fruit", name: "Orange" },
		];
		const property = "type";
		const value = "meat";
		const expectedOutput = [];

		const result = filterByPropertyValue(input, property, value);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an empty array", () => {
		const input = [];
		const property = "type";
		const value = "fruit";
		const expectedOutput = [];

		const result = filterByPropertyValue(input, property, value);

		expect(result).toEqual(expectedOutput);
	});
});

describe("sortObjectsByNumericProperty", () => {
	test("should sort an array of objects by a numeric property in ascending order", () => {
		const input = [
			{ id: 3, name: "Apple" },
			{ id: 1, name: "Banana" },
			{ id: 2, name: "Orange" },
		];
		const property = "id";
		const expectedOutput = [
			{ id: 1, name: "Banana" },
			{ id: 2, name: "Orange" },
			{ id: 3, name: "Apple" },
		];

		const result = sortObjectsByNumericProperty(input, property);

		expect(result).toEqual(expectedOutput);
	});

	test("should handle objects with the same numeric property value", () => {
		const input = [
			{ id: 3, name: "Apple" },
			{ id: 1, name: "Banana" },
			{ id: 3, name: "Orange" },
		];
		const property = "id";
		const expectedOutput = [
			{ id: 1, name: "Banana" },
			{ id: 3, name: "Apple" },
			{ id: 3, name: "Orange" },
		];

		const result = sortObjectsByNumericProperty(input, property);

		expect(result).toEqual(expectedOutput);
	});
});

describe("filterByMultipleCategories", () => {
	test("should filter objects by multiple category names", () => {
		const input = [
			{
				category: "fruit",
				name: "Apple",
			},
			{
				category: "fruit",
				name: "Banana",
			},
			{
				category: "vegetable",
				name: "Carrot",
			},
			{
				category: "fruit",
				name: "Orange",
			},
		];
		const categories = ["fruit", "vegetable"];
		const expectedOutput = [
			{
				category: "fruit",
				name: "Apple",
			},
			{
				category: "fruit",
				name: "Banana",
			},
			{
				category: "vegetable",
				name: "Carrot",
			},
			{
				category: "fruit",
				name: "Orange",
			},
		];

		const result = filterByMultipleCategories(input, categories);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when no objects belong to any of the specified categories", () => {
		const input = [
			{
				category: "fruit",
				name: "Apple",
			},
			{
				category: "fruit",
				name: "Banana",
			},
			{
				category: "vegetable",
				name: "Carrot",
			},
			{
				category: "fruit",
				name: "Orange",
			},
		];
		const categories = ["meat", "dairy"];
		const expectedOutput = [];

		const result = filterByMultipleCategories(input, categories);

		expect(result).toEqual(expectedOutput);
	});

	test("should return an empty array when given an empty array", () => {
		const input = [];
		const categories = ["fruit", "vegetable"];
		const expectedOutput = [];

		const result = filterByMultipleCategories(input, categories);

		expect(result).toEqual(expectedOutput);
	});
});
