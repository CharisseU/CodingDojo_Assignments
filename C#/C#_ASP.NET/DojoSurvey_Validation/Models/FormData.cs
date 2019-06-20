using System.ComponentModel.DataAnnotations;

namespace DojoSurvey_Validation.Models
{
    public class FormData
    {
        [Required]
        [RegularExpression("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]
        [MinLength(2)]
        [MaxLength(25)]
        // [Display(Name = "Your Name:")]
        public string Name { get; set; }

        [Required] 
        [MinLength(2)]
        [MaxLength(15)]               
        public string Location { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(15)]
        public string Language { get; set; }
        
        [MinLength(8)]
        [MaxLength(255)]
        public string Comment { get; set; }
    }
}