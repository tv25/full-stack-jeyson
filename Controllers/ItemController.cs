
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Matching;
using Server_Client.Models;
using System;
using System.Diagnostics.Metrics;
using System.Formats.Asn1;
using System.IO;

using System.Text.Json;

namespace Server_Client.Controllers
{

    [ApiController]
    public class ItemController : ControllerBase
    {

        private readonly List<Candidate> _candidates = new List<Candidate> {
        new Candidate {ID = 1,Name = "John Doe",YearStarted = new DateTime(2020, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "C#", "Python" }},
        new Candidate {ID = 2,Name = "Tehila Vaknin",YearStarted = new DateTime(2020, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "C#", "JS", "React" }},
        new Candidate {ID = 3,Name = "Moty Zer",YearStarted = new DateTime(2020,5, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "C#" }},
        new Candidate {ID = 4,Name = "Daniel c",YearStarted = new DateTime(2018, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "React" }},
        new Candidate {ID = 5,Name = "Sara Levi",YearStarted = new DateTime(2019, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> {  "Delphi", "JS" }},
        new Candidate {ID = 6,Name = "Michal Hrosh",YearStarted = new DateTime(2020, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> {  "Delphi" }},
        new Candidate {ID = 7,Name = "Lea Almasi",YearStarted = new DateTime(2011, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "C#","Python", "JS", "Java" }},
        new Candidate {ID = 8,Name = "Ran Levi",YearStarted = new DateTime(2021, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> {  "Java", "React" }},
        new Candidate {ID = 9,Name = "Avi Bar",YearStarted = new DateTime(2022, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "C#" }},
        new Candidate {ID = 10,Name = "Ayelet Ben",YearStarted = new DateTime(2023, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> {  "React" }},
        new Candidate {ID = 11,Name = "Yosef Ravivo",YearStarted = new DateTime(2018, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "Java" }},
        new Candidate {ID = 12,Name = "Sara Zer",YearStarted = new DateTime(2020, 1, 1),UpdatedAt = DateTime.Now,KnownLanguages = new List<string> { "JS", "React" }},

    };

        private readonly List<Language> _languages = new List<Language> {
        new Language { ID = 1, Name = "C#" },
        new Language { ID = 2, Name = "Python" },
        new Language { ID = 3, Name = "Delphi" },
        new Language { ID = 4, Name = "Java" },
        new Language { ID = 5, Name = "JS" },
        new Language { ID = 6, Name = "React" }
    };
        [HttpGet]
        [Route("/Alllanguages")]
        public ActionResult<List<Language>> GetLanguages()
        {
            return _languages;
        }
        [HttpGet]
        [Route("/AllCandidates")]
        public ActionResult<List<Candidate>> GetCandidate()
        {
            return _candidates;
        }

        [HttpGet]
        [Route("/candidates/{languageId}/{experience}")]
        public ActionResult<IEnumerable<Candidate>> GetCandidates(int languageId, string experience)
        {
            var language = _languages.FirstOrDefault(l => l.ID == languageId);
            if (language == null)
            {
                return BadRequest("Invalid language ID.");
            }

            var candidates = _candidates
                .Where(c => c.KnownLanguages.Contains(language.Name))
                .ToList();
            /*
            if (!string.IsNullOrEmpty(experience))
            {
                int years = experience == "senyor" ? 3 : 0;
                candidates = candidates.Where(c =>
                    c.YearStarted.HasValue &&
                    DateTime.Now.Year - c.YearStarted.Value.Year >= years)
                    .ToList();
            }*/

            return candidates;
        }
    }
}





