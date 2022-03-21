using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities;
using AutoMapper;
using API.Interfaces;
using API.DTOs;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherRepository _repo;
        private readonly IMapper _mapper;
        public WeatherController(IWeatherRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<List<WeatherDto>>> GetWeather()
        {

            var weatherDto = await _repo.GetWeatherAsync();

            return Ok(weatherDto);
        }

    }
}
