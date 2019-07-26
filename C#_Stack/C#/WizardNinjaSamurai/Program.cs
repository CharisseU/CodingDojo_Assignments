using System;
using System.Collections.Generic;

namespace WizardNinjaSamurai
{
    class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        protected int health;
         
        public int Health
        {
            get { return health; }
        }
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }
         
        public Human(string name, int str, int intel, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = intel;
            Dexterity = dex;
            health = hp;
        }
         
        // Build Attack method
        public virtual int Attack(Human target)
        {
            int damage = Strength * 3;
            target.health -= damage;
            Console.WriteLine($"{Name} attacked {target.Name} for {damage} damage!");
            return target.health;
        }

        public int TakeDamage(int damage)
        {
            this.health -= damage;
            return this.health;
        }

        public int GainHealth(int hp)
        {
            this.health += hp;
            return this.health;
        }
    }
    
    class Wizard : Human
    {
        public Wizard(string name) : base(name)
        {
            Intelligence = 25;
            health = 50;
        }

        public override int Attack(Human target)
        {
            int damage = 5 * Intelligence;
            this.health += damage;
            Console.WriteLine($"{Name} attacked {target.Name} for {damage} damage!");
            return target.TakeDamage(damage);
        }

        public int Heal(Human target)
        {
            int hp = 10 * Intelligence;
            System.Console.WriteLine($"{Name} healed {target.Name} for {hp}hp!");
            return target.GainHealth(hp);
        }
    }
    

    class Ninja : Human
    {
        public Ninja(string name) : base(name)
        {
            Dexterity = 175;
        }

        public override int Attack(Human target)
        {
            int damage = 5 * Dexterity;
            Random rand = new Random();
            if (rand.Next(0,5) < 1) { damage += 10; }
            Console.WriteLine($"{Name} attacked {target.Name} for {damage} damage!");
            return target.TakeDamage(damage);
        }

        public int Steal(Human target)
        {
            int damage = 5;
            this.health += damage;
            Console.WriteLine($"{Name} stole {damage} hp from {target.Name}!");
            return target.TakeDamage(damage);
        }
    }

    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            health = 200;
        }

        public override int Attack(Human target)
        {
            base.Attack(target);
            if (target.Health < 50) { target.TakeDamage(target.Health); }
            Console.WriteLine($"{Name} attacked {target.Name}! {target.Name} has {target.Health}hp remaining!");
            return target.Health;
        }

        public int Meditate()
        {
            this.health = 200;
            System.Console.WriteLine($"{Name} is meditating.");
            return this.health;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Human jack = new Human("Jack Sprat");
            Ninja jill = new Ninja("Jill Sprat");
            Wizard tom = new Wizard("Tom Jones");
            Samurai hei = new Samurai("Hei Chi");
            hei.Attack(jack);
            System.Console.WriteLine(jack.Health);
            tom.Heal(jack);
            tom.Heal(jack);
            jill.Steal(jack);
            tom.Attack(jack);
            System.Console.WriteLine($"How is {jack.Name} doing? HP: {jack.Health}");
        }
    }
}