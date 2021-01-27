using FirstASPNETWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstASPNETWebApp.Controllers
{
    public class BlahController : Controller
    {
        //views 
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GPACalculator")]
        public IActionResult GPACalculator()
        {
            return View();
        }

        [HttpPost("GPACalculator")]
        public IActionResult GPACalculator(GPACalculatorModel model)
        {
            return View();
        }
    }
}
