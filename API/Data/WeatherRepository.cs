using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace API.Data
{
    public class WeatherRepository : IWeatherRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public WeatherRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

     
        public async Task<List<WeatherDto>> GetWeatherAsync()
        {
            var weather  = await _context.WeatherTb.ToListAsync();
            var weatherDto = _mapper.Map<List<WeatherDto>>(weather);
            return weatherDto;
        }
     
    }
}