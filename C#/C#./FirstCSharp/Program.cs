using System;

namespace FirstCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("The value of pi is " + 3.14159);
            // // loop from 1 to 5 including 5
            //     for (int i = 1; i <= 5; i++)
            //     {
            //         Console.WriteLine(i);
            //     }

            //     // loop from 1 to 5 excluding 5
            //     for (int i = 1; i < 5; i++)
            //     {
            //         Console.WriteLine(i);
            //     }

            //     int start = 0;
            //     int end = 5;
            //     // loop from start to end including end
            //     for (int i = start; i <= end; i++)
            //     {
            //         Console.WriteLine(i);
            //     }
            //     // loop from start to end excluding end
            //     for (int i = start; i < end; i++)
            //     {
            //         Console.WriteLine(i);
            //     }

            //     //The execution section does not always have to use ++
            //     for (int i = 1; i < 6; i = i + 1)
            //     {
            //         Console.WriteLine(i);
            //     }
            //     int i = 1;
            //     while (i < 6)
            //     {
            //         Console.WriteLine(i);
            //         i = i + 1;
            //     }
             

            // Random rand = new Random();
            // for(int val = 0; val < 10; val++)
            // {
            //     //Prints the next random value between 2 and 8
            //     Console.WriteLine(rand.Next(2,8));



            // Declaring an array of length 5, initialized by default to all zeroes
            int[] numArray = new int[5];
            // Declaring an array with pre-populated values
            // For Arrays initialized this way, the length is determined by the size of the given data
            int[] numArray2 = {1,2,3,4,6};

            int[] array3;
            array3 = new int[] {1,3,5,7,9};


            int[] arr = {1, 2, 3, 4};
            Console.WriteLine($"The first number of the arr is {arr[0]}"); 
            arr[0] = 8;
            Console.WriteLine($"The first number of the arr is now {arr[0]}");
            // The array has now changed!

            string[] myCars = new string[] { "Mazda Miata", "Ford Model T", "Dodge Challenger", "Nissan 300zx"};
            // The 'Length' property tells us how many values are in the Array (4 in our example here). copy
            // We can use this to determine where the loop ends: Length-1 is the index of the last value. 
            for (int idx = 0; idx < myCars.Length; idx++)
            {
                Console.WriteLine($"I own a {myCars[idx]}");
            }


            string[] myCars = new string[] { "Mazda Miata", "Ford Model T", "Dodge Challenger", "Nissan 300zx"}; 
            foreach (string car in myCars)
            {
                // We no longer need the index, because variable 'car' already represents each indexed value
                Console.WriteLine($"I own a {car}");
            }


            
            }
        }
    }
}
