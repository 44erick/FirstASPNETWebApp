using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
//GPA calculator model 
namespace FirstASPNETWebApp.Models
{
    public class GPACalculatorModel
    {
        //makes sure people can't enter another value
        [Range(0, 100)]
        public int assignments { get; set; }
        //makes sure people can't enter another value
        [Range(0,100)]
        public int group_projects { get; set; }
        //makes sure people can't enter another value
        [Range(0, 100)]
        public int quizzes { get; set; }
        //makes sure people can't enter another value
        [Range(0, 100)]
        public int exams { get; set; }
        //makes sure people can't enter another value
        [Range(0, 100)]
        public int intex { get; set; }


    }
}
