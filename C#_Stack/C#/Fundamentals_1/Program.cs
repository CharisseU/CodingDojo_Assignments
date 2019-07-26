using System;

namespace fundamentalsI
{
    class Program
    {
        static void Main(string[] args)
        {
            
            for (int i = 1; i <= 5; i++)
            {
               Console.WriteLine(i);
            }

            int j = 1;
            while (j <= 255) {
                Console.WriteLine(j);
                j++;
            }

            int k = 1;
            while (k <= 100) {
                if ( k % 5 == 0 && k % 3 == 0 ) {
                    Console.WriteLine("FizzBuzz");
                } else if (k % 3 == 0) {
                    Console.WriteLine("Fizz");
                } else if (k % 5 == 0) {
                    Console.WriteLine("Buzz");
                }
                k++;
        }


        }
    }
}