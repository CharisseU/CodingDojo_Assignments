using System;
using System.Collections.Generic;

namespace HungryNinja
{
    class Food
    {
        public string Name;
        public int Calories;
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy; 
        public bool IsSweet; 
        // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
        public Food(string name, int calories, bool spicy, bool sweet)
        {
            Name = name;
            Calories = calories;
            IsSpicy = spicy;
            IsSweet = sweet;
        }
    }

    class Buffet
    {
        public List<Food> Menu;
        
        //constructor
        public Buffet()
        {
            Menu = new List<Food>();
            {               
                Menu.Add(new Food("Sushi", 800, true, true));
                Menu.Add(new Food("Taco Salad", 1000, false, false));
                Menu.Add(new Food("Prime Rib", 1500, false, false));
                Menu.Add(new Food("Stir Fry", 1200, true, true));
                Menu.Add(new Food("Hamburger", 1200, false, false));
                Menu.Add(new Food("Choclate Cake", 500, false, true));            
            };
        }
        
        public Food Serve()
        {
            Random rand = new Random();
            return Menu[rand.Next(0,Menu.Count)];
        }
    }

    class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;
        
        // add a constructor
        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>();
        }
        // add a public "getter" property called "IsFull"
        public bool IsFull
        {
            get 
            {       
                if (calorieIntake > 2000)
                {
                    System.Console.WriteLine("I'm way to full, Please no more!");
                    return true;
                }
                else
                {
                    return false;
                }
            }   
        }
        // build out the Eat method
        public void Eat(Food item)
        {
            calorieIntake += item.Calories;
            FoodHistory.Add(item);
            string entry = $"Ate {item.Name}";
            if (item.IsSpicy && item.IsSweet) {entry += "; it is sweet and spicy!";}
            else if (item.IsSpicy) {entry+= "; it is Spicy!";}
            else if (item.IsSweet) {entry+= "; it is Sweet!";}
            else {entry += ".";}

        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Buffet royalFork = new Buffet();
            Ninja sotomu = new Ninja();
            while (!sotomu.IsFull)
            {
                sotomu.Eat(royalFork.Serve());
            }

        }
    }
}



