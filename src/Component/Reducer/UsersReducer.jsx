const initialState = {
  movies: [
    {
      display_title: "Materna",
      byline: "Beatrice Loayza",
      headline: "‘Materna’ Review: Mommy Issues",
      summary_short:
        "Four unrelated women with serious emotional baggage are connected by an incident on the subway in this indie drama directed by David Gutnik.",
      publication_date: "2021-08-12",
      src: "https://static01.nyt.com/images/2021/08/13/arts/12materna/12materna-mediumThreeByTwo440.jpg",
      id: "1",
    },
    {
      display_title: "Homeroom",
      byline: "Teo Bugbee",
      headline: "‘Homeroom’ Review: Salutations for the Class of 2020",
      summary_short:
        "This documentary from Peter Nicks follows Oakland High School seniors as they fight for social justice and face Covid-19 on their way to graduation.",
      publication_date: "2021-08-12",
      src: "https://static01.nyt.com/images/2021/08/12/arts/12homeroom-art/12homeroom-art-mediumThreeByTwo440.jpg",
      id: "2",
    },
    {
      display_title: "Free Guy",

      byline: "Maya Phillips",
      headline: "‘Free Guy’ Review: Don’t Hate the Player",
      summary_short:
        "Ryan Reynolds brings his nice-guy charisma to the role of a video game character who doesn’t want to stay on the sidelines.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/12/arts/12free-guy1/12free-guy1-mediumThreeByTwo440.jpg",
      id: "3",
    },
    {
      display_title: "Usedom: Der freie Blick aufs Meer",

      byline: "Jeannette Catsoulis",
      headline:
        "‘Usedom: A Clear View of the Sea’ Review: Come In, the Water’s Fine",
      summary_short:
        "Heinz Brinkmann’s idiosyncratic documentary gives us a guided tour of a Baltic island with a fractured history.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/12/arts/12usedom-art/12usedom-art-mediumThreeByTwo440.jpg",
      id: "4",
    },
    {
      display_title: "Ema",

      byline: "Jeannette Catsoulis",
      headline: "‘Ema’ Review: Maternal Flame",
      summary_short:
        "Pablo Larraín’s wild melodrama circles a grieving mother with an unhealthy obsession.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/13/arts/12ema/12ema-mediumThreeByTwo440.jpg",
      id: "5",
    },
    {
      display_title: "Beckett",

      byline: "Manohla Dargis",
      headline: "‘Beckett’ Review: He Must Go On",
      summary_short:
        "In this unthrilling thriller, John David Washington plays an Everyman who racks up a lot of miles while running on empty.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/12/arts/12beckett-1/merlin_192795603_c2f6fda0-9a59-4c9d-a03c-402bdbd9d412-mediumThreeByTwo440.jpg",
      id: "6",
    },
    {
      display_title: "Misha and the Wolves",

      byline: "Ben Kenigsberg",
      headline: "‘Misha and the Wolves’ Review: Fuzzy Memories",
      summary_short:
        "Did an ostensible Holocaust memoirist really spend her childhood running with wolves? This documentary has answers.",
      publication_date: "2021-08-11",

      src: "https://static01.nyt.com/images/2021/08/11/arts/11misha1/11misha1-mediumThreeByTwo440.jpg",
      id: "7",
    },
    {
      display_title: "The Kissing Booth 3",

      byline: "Natalia Winkelman",
      headline: "‘The Kissing Booth 3’ Review: Last in the Pecking Order",
      summary_short:
        "In this Netflix trilogy’s bland finale, teenagers tick off elaborate bucket-list items during their summer before college.",
      publication_date: "2021-08-10",
      id: "8",

      src: "https://static01.nyt.com/images/2021/08/14/arts/11kissingbooth3-art/merlin_192795345_b6e51478-b3a8-412d-8bb1-9133f3d7b46a-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "Bring Your Own Brigade",

      byline: "Manohla Dargis",
      headline:
        "‘Bring Your Own Brigade’ Review: Some Say the World Will End in Fire",
      summary_short:
        "In her new documentary, Lucy Walker looks at California’s apocalyptic fires and finds more than the usual smoke and politics.",
      publication_date: "2021-08-05",
      id: "9",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05bring-your-own/merlin_191967048_f92ed49e-6f10-4918-acb2-35dedd7aee6a-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "The Macaluso Sisters",

      byline: "Beatrice Loayza",
      headline: "‘The Macaluso Sisters’ Review: Tragedy Across Time",
      summary_short:
        "This moving drama by the filmmaker Emma Dante imagines the ripple effects of a sister’s death across generations in Sicily.",
      publication_date: "2021-08-05",
      id: "10",

      src: "https://static01.nyt.com/images/2021/08/06/arts/macaluso1/merlin_192104085_7518ea49-0385-42d7-ba1d-3a26724416cf-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "Annette",
      byline: "A.O. Scott",
      headline: "‘Annette’ Review: Love Hurts",
      summary_short:
        "Adam Driver and Marion Cotillard are star-crossed lovers in this hallucinatory musical, written by Sparks and directed by Leos Carax.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/06/arts/06annette-review2/06annette-review2-mediumThreeByTwo440-v2.jpg",
      id: "11",
    },
    {
      display_title: "The Last Matinee",
      byline: "Jeannette Catsoulis",
      headline: "‘The Last Matinee’ Review: Killer Attractions",
      summary_short:
        "Set in a movie theater, this droll splatterfest is aimed straight at the jugular.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/06/arts/lastmatinee1/lastmatinee1-mediumThreeByTwo440.jpg",
      id: "12",
    },
    {
      display_title: "Bix: 'Ain't None of Them Play Like Him Yet'",
      byline: "Glenn Kenny",
      headline: "‘Bix’ Review: A Jazz Legend Fondly Remembered",
      summary_short:
        "The composer and cornet player Bix Beiderbecke changed music forever in a very short life. A restored documentary from the ’80s goes into the details.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/06/arts/05bix-review-2/05bix-review-2-mediumThreeByTwo440.jpg",
      id: "13",
    },
    {
      display_title: "The Suicide Squad",

      byline: "Manohla Dargis",
      headline:
        "‘The Suicide Squad’ Review: Train Them! Excite Them! Arm Them!",
      summary_short:
        "The director James Gunn (“Guardians of the Galaxy”) shifts from Marvel to DC Comics with some familiar faces and the usual moves.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/06/arts/05suicide-squad1/05suicide-squad1-mediumThreeByTwo440-v2.jpg",
      id: "14",
    },
    {
      display_title: "The Viewing Booth",

      byline: "Beatrice Loayza",
      headline: "‘The Viewing Booth’ Review: Do You See What I See?",
      summary_short:
        "One woman’s reactions to videos of the Israeli-Palestinian conflict are interrogated in this documentary by the filmmaker Ra’anan Alexandrowicz.",
      publication_date: "2021-08-05",
      id: "15",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05viewing-booth/merlin_191979255_3cf1df88-0717-45cc-b02a-70ff1b857f56-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "What We Left Unfinished",

      byline: "Devika Girish",
      headline: "‘What We Left Unfinished’ Review: Spectres of History",
      summary_short:
        "For her first feature documentary, Mariam Ghani dug up five unfinished movies from the Communist era in Afghanistan.",
      publication_date: "2021-08-05",
      id: "16",

      src: "https://static01.nyt.com/images/2021/08/06/arts/05whatweleft-art/merlin_192102423_80d77251-7666-4944-85fd-71403dbfb541-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "Whirlybird",

      byline: "Ben Kenigsberg",
      headline: "‘Whirlybird’ Review: Chasing a Story, From the Air",
      summary_short:
        "This documentary remembers the daring helicopter reporting of a couple in Los Angeles.",
      publication_date: "2021-08-05",
      id: "17",

      src: "https://static01.nyt.com/images/2021/08/03/arts/whirlybird1/whirlybird1-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "John and the Hole",

      byline: "Jeannette Catsoulis",
      headline: "‘John and the Hole’ Review: Growing Pains",
      summary_short:
        "A young boy becomes obsessed with experiencing adult freedoms in this icy first feature.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/04/arts/john1/john1-mediumThreeByTwo440.jpg",
      id: "18",
    },
    {
      display_title: "Vivo",

      byline: "Maya Phillips",
      headline: "‘Vivo’ Review: A Musical Tale That Goes Offbeat",
      summary_short:
        "The animated musical, about a kinkajou who goes on a journey to deliver a song, may have an uneven story, but the movie’s stellar songs, by Lin-Manuel Miranda, reflect the artist at his best.",
      publication_date: "2021-08-05",
      id: "19",

      src: "https://static01.nyt.com/images/2021/08/06/arts/vivo1/vivo1-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "Swan Song",

      byline: "Glenn Kenny",
      headline: "‘Swan Song’ Review: Udo Kier, on His Own and Fabulous",
      summary_short:
        "In this drama from Todd Stephens, Kier plays an Ohio hairdresser who takes a long walk to do one last job — on a corpse.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05swan-song-art/05swan-song-art-mediumThreeByTwo440.jpg",
      id: "20",
    },
  ],
  favorite: [
    {
      display_title: "Swan Song",

      byline: "Glenn Kenny",
      headline: "‘Swan Song’ Review: Udo Kier, on His Own and Fabulous",
      summary_short:
        "In this drama from Todd Stephens, Kier plays an Ohio hairdresser who takes a long walk to do one last job — on a corpse.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05swan-song-art/05swan-song-art-mediumThreeByTwo440.jpg",
      id: "21",
    },
    {
      display_title: "The Viewing Booth",

      byline: "Beatrice Loayza",
      headline: "‘The Viewing Booth’ Review: Do You See What I See?",
      summary_short:
        "One woman’s reactions to videos of the Israeli-Palestinian conflict are interrogated in this documentary by the filmmaker Ra’anan Alexandrowicz.",
      publication_date: "2021-08-05",
      id: "22",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05viewing-booth/merlin_191979255_3cf1df88-0717-45cc-b02a-70ff1b857f56-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "Bring Your Own Brigade",

      byline: "Manohla Dargis",
      headline:
        "‘Bring Your Own Brigade’ Review: Some Say the World Will End in Fire",
      summary_short:
        "In her new documentary, Lucy Walker looks at California’s apocalyptic fires and finds more than the usual smoke and politics.",
      publication_date: "2021-08-05",
      id: "23",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05bring-your-own/merlin_191967048_f92ed49e-6f10-4918-acb2-35dedd7aee6a-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "The Suicide Squad",

      byline: "Manohla Dargis",
      headline:
        "‘The Suicide Squad’ Review: Train Them! Excite Them! Arm Them!",
      summary_short:
        "The director James Gunn (“Guardians of the Galaxy”) shifts from Marvel to DC Comics with some familiar faces and the usual moves.",
      publication_date: "2021-08-05",

      src: "https://static01.nyt.com/images/2021/08/06/arts/05suicide-squad1/05suicide-squad1-mediumThreeByTwo440-v2.jpg",
      id: "24",
    },
    {
      display_title: "The Viewing Booth",

      byline: "Beatrice Loayza",
      headline: "‘The Viewing Booth’ Review: Do You See What I See?",
      summary_short:
        "One woman’s reactions to videos of the Israeli-Palestinian conflict are interrogated in this documentary by the filmmaker Ra’anan Alexandrowicz.",
      publication_date: "2021-08-05",
      id: "25",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05viewing-booth/merlin_191979255_3cf1df88-0717-45cc-b02a-70ff1b857f56-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "What We Left Unfinished",

      byline: "Devika Girish",
      headline: "‘What We Left Unfinished’ Review: Spectres of History",
      summary_short:
        "For her first feature documentary, Mariam Ghani dug up five unfinished movies from the Communist era in Afghanistan.",
      publication_date: "2021-08-05",
      id: "26",

      src: "https://static01.nyt.com/images/2021/08/06/arts/05whatweleft-art/merlin_192102423_80d77251-7666-4944-85fd-71403dbfb541-mediumThreeByTwo440.jpg",
    },
  ],
  top: [
    {
      display_title: "Materna",
      byline: "Beatrice Loayza",
      headline: "‘Materna’ Review: Mommy Issues",
      summary_short:
        "Four unrelated women with serious emotional baggage are connected by an incident on the subway in this indie drama directed by David Gutnik.",
      publication_date: "2021-08-12",
      src: "https://static01.nyt.com/images/2021/08/13/arts/12materna/12materna-mediumThreeByTwo440.jpg",
      id: "27",
    },
    {
      display_title: "Homeroom",
      byline: "Teo Bugbee",
      headline: "‘Homeroom’ Review: Salutations for the Class of 2020",
      summary_short:
        "This documentary from Peter Nicks follows Oakland High School seniors as they fight for social justice and face Covid-19 on their way to graduation.",
      publication_date: "2021-08-12",
      src: "https://static01.nyt.com/images/2021/08/12/arts/12homeroom-art/12homeroom-art-mediumThreeByTwo440.jpg",
      id: "28",
    },
    {
      display_title: "Free Guy",

      byline: "Maya Phillips",
      headline: "‘Free Guy’ Review: Don’t Hate the Player",
      summary_short:
        "Ryan Reynolds brings his nice-guy charisma to the role of a video game character who doesn’t want to stay on the sidelines.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/12/arts/12free-guy1/12free-guy1-mediumThreeByTwo440.jpg",
      id: "29",
    },
    {
      display_title: "Usedom: Der freie Blick aufs Meer",

      byline: "Jeannette Catsoulis",
      headline:
        "‘Usedom: A Clear View of the Sea’ Review: Come In, the Water’s Fine",
      summary_short:
        "Heinz Brinkmann’s idiosyncratic documentary gives us a guided tour of a Baltic island with a fractured history.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/12/arts/12usedom-art/12usedom-art-mediumThreeByTwo440.jpg",
      id: "30",
    },
    {
      display_title: "Ema",

      byline: "Jeannette Catsoulis",
      headline: "‘Ema’ Review: Maternal Flame",
      summary_short:
        "Pablo Larraín’s wild melodrama circles a grieving mother with an unhealthy obsession.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/13/arts/12ema/12ema-mediumThreeByTwo440.jpg",
      id: "31",
    },
    {
      display_title: "Beckett",

      byline: "Manohla Dargis",
      headline: "‘Beckett’ Review: He Must Go On",
      summary_short:
        "In this unthrilling thriller, John David Washington plays an Everyman who racks up a lot of miles while running on empty.",
      publication_date: "2021-08-12",

      src: "https://static01.nyt.com/images/2021/08/12/arts/12beckett-1/merlin_192795603_c2f6fda0-9a59-4c9d-a03c-402bdbd9d412-mediumThreeByTwo440.jpg",
      id: "32",
    },
    {
      display_title: "Misha and the Wolves",

      byline: "Ben Kenigsberg",
      headline: "‘Misha and the Wolves’ Review: Fuzzy Memories",
      summary_short:
        "Did an ostensible Holocaust memoirist really spend her childhood running with wolves? This documentary has answers.",
      publication_date: "2021-08-11",

      src: "https://static01.nyt.com/images/2021/08/11/arts/11misha1/11misha1-mediumThreeByTwo440.jpg",
      id: "33",
    },
    {
      display_title: "The Kissing Booth 3",

      byline: "Natalia Winkelman",
      headline: "‘The Kissing Booth 3’ Review: Last in the Pecking Order",
      summary_short:
        "In this Netflix trilogy’s bland finale, teenagers tick off elaborate bucket-list items during their summer before college.",
      publication_date: "2021-08-10",
      id: "34",

      src: "https://static01.nyt.com/images/2021/08/14/arts/11kissingbooth3-art/merlin_192795345_b6e51478-b3a8-412d-8bb1-9133f3d7b46a-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "Bring Your Own Brigade",

      byline: "Manohla Dargis",
      headline:
        "‘Bring Your Own Brigade’ Review: Some Say the World Will End in Fire",
      summary_short:
        "In her new documentary, Lucy Walker looks at California’s apocalyptic fires and finds more than the usual smoke and politics.",
      publication_date: "2021-08-05",
      id: "35",

      src: "https://static01.nyt.com/images/2021/08/05/arts/05bring-your-own/merlin_191967048_f92ed49e-6f10-4918-acb2-35dedd7aee6a-mediumThreeByTwo440.jpg",
    },
    {
      display_title: "The Macaluso Sisters",

      byline: "Beatrice Loayza",
      headline: "‘The Macaluso Sisters’ Review: Tragedy Across Time",
      summary_short:
        "This moving drama by the filmmaker Emma Dante imagines the ripple effects of a sister’s death across generations in Sicily.",
      publication_date: "2021-08-05",
      id: "36",

      src: "https://static01.nyt.com/images/2021/08/06/arts/macaluso1/merlin_192104085_7518ea49-0385-42d7-ba1d-3a26724416cf-mediumThreeByTwo440.jpg",
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return { ...state.movies, movies: [...state.movies, action.paylod] };
    case "ADD_FAVORITE":
      return {
        ...state.favorite,
        favorite: [...state.favorite, action.paylod],
      };
    case "ADD_TOP":
      return {
        ...state.top,
        top: [...state.top, action.paylod],
      };

    default:
      return state;
  }
};
