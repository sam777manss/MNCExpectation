using System.ComponentModel.DataAnnotations;

namespace AdminApi.Models
{
    public class RegisterData
    {
        public int? Id { get; set; }

        [Display(Name = "Full Name")]
        [Required(ErrorMessage = "Enter Full Name")]
        [StringLength(40, MinimumLength = 3, ErrorMessage = "First Name Should be min 3 and max 40 length")]
        public string Fname { get; set; }

        [Display(Name = "Last Name")]
        [Required(ErrorMessage = "Enter Last Name")]
        [StringLength(40, MinimumLength = 3, ErrorMessage = "Last Name Should be min 3 and max 40 length")]
        public string Lname { get; set; }

        [Display(Name = "Email Address")]
        [Required(ErrorMessage = "The Email Address Is Required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Enter Phone Number")]
        [Display(Name = "Phone Number")]
        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]
        public int? Phone { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Country { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        [CustomValidation(typeof(RegisterData), "ValidatePincode")]
        public int Pincode { get; set; }

        public static ValidationResult ValidatePincode(object value, ValidationContext context)
        {
            int pincode;

            if (!int.TryParse(value.ToString(), out pincode))
            {
                return new ValidationResult("Pincode must be a valid integer.");
            }
            if (pincode.ToString().Length < 3 || pincode.ToString().Length >= 20)
            {
                return new ValidationResult("Pincode length 3 and 20 is mandatory");
            }
            return ValidationResult.Success;
        }
    }
}
