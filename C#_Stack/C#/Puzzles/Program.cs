using System;
using System.Collections.Generic;


namespace Puzzles
{
    class Program
    {
        Random Array
// Create a function called RandomArray() that returns an integer array

// Place 10 random integer values between 5-25 into the array
// Print the min and max values of the array
// Print the sum of all the values        
static public int[] RandomArray()
        {
            List<int> randList = new List<int>();
            Random rand = new Random();
            for ( int i = 0; i < 10; i++ ) { randList.Add(rand.Next()); }
            int[] randArray = randList.ToArray();
            int max = randArray[0];
            int min = randArray[0];
            int sum = 0;
            foreach (int j in randArray)
            {
                if ( j > max ) { max = j; }
                else if ( j < min ) { min = j; }
                sum += j;
                System.Console.WriteLine(j);
            }
            double avg = sum/randArray.Length;
            System.Console.WriteLine($"Max: {max}, Min: {min}");
            return randArray;
        }
// Coin Flip
// Create a function called TossCoin() that returns a string

// Have the function print "Tossing a Coin!"
// Randomize a coin toss with a result signaling either side of the coin 
// Have the function print either "Heads" or "Tails"
// Finally, return the result
// Create another function called TossMultipleCoins(int num) that returns a Double

// Have the function call the tossCoin function multiple times based on num value
// Have the function return a Double that reflects the ratio of head toss to total toss
        static public string CoinFlip()
        {
            System.Console.WriteLine("Tossing a Coin");
            Random rand = new Random();
            String result;
            if (rand.Next(0,9) < 5) { result = "Heads"; }
            else { result = "Tails"; }
            System.Console.WriteLine(result);
            return result;
        }

        static public double MultipleCoinsFlip(int num)
        {
            int headsCount = 0;
            for (int i = 0; i <= num; i++)
            {
                if (CoinFlip() == "Heads") { headsCount++; }
            }
            double ratio = headsCount / num;
            return ratio;
        }
// Names
// Build a function Names that returns a list of strings.  In this function:

// Create an list with the values: Todd, Tiffany, Charlie, Geneva, Sydney
// Shuffle the list and print the values in the new order
// Return an list that only includes names longer than 5 characters
        public static List<string> Names()
        {
            List<string> nameList = new List<string>();
            nameList.Add("Todd");
            nameList.Add("Tiffany");
            nameList.Add("Charlie");
            nameList.Add("Geneva");
            nameList.Add("Sydney");
            Random rand = new Random();
            for (int i = 0; i <= rand.Next(5,25); i++)
            {
                int from = rand.Next(0,4);
                int to = rand.Next(0,4);
                string temp = nameList[to];
                nameList[to] = nameList[from];
                nameList[from] = temp;
            }
            System.Console.WriteLine(nameList);
            foreach (string name in nameList)
            {
                if (name.Length <= 5) { nameList.Remove(name); }
            }
            return nameList;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}