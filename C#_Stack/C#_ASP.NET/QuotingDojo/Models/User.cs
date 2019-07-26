using System;
using System.ComponentModel.DataAnnotations;

namespace QuotingDojo.Models
{
	public class User
	{
		[Required]
		[MinLength(2)]
		[Display(Name = "Your Name")]
		public string Name {get;set;}

		[Required]
		[MinLength(5)]
		[Display(Name = "Your Quote")]
		[DataType(DataType.MultilineText)]
		public string Quote {get;set;}
	}
}