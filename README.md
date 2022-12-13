# Marvel-API

List of APIS :

1 /v1/public/characters
Fetches lists of comic characters with optional filters. See notes on individual parameters below.

2 /v1/public/characters/{characterId}
This method fetches a single character resource. It is the canonical URI for any character resource provided by the API.

3 /v1/public/characters/{characterId}/comics
Fetches lists of comics containing a specific character, with optional filters. See notes on individual parameters below.

4 /v1/public/characters/{characterId}/events
Fetches lists of events in which a specific character appears, with optional filters. See notes on individual parameters below.

5 /v1/public/characters/{characterId}/series
Fetches lists of comic series in which a specific character appears, with optional filters. See notes on individual parameters below.

6 /v1/public/characters/{characterId}/stories
Fetches lists of comic stories featuring a specific character with optional filters. See notes on individual parameters below.

7 /v1/public/comics
Fetches lists of comics with optional filters. See notes on individual parameters below.

8 /v1/public/comics/{comicId}
This method fetches a single comic resource. It is the canonical URI for any comic resource provided by the API.

9 /v1/public/comics/{comicId}/characters
Fetches lists of characters which appear in a specific comic with optional filters. See notes on individual parameters below.

10 /v1/public/comics/{comicId}/creators
Fetches lists of comic creators whose work appears in a specific comic, with optional filters. See notes on individual parameters below.

11 /v1/public/comics/{comicId}/events
Fetches lists of events in which a specific comic appears, with optional filters. See notes on individual parameters below.

12 /v1/public/comics/{comicId}/stories
Fetches lists of comic stories in a specific comic issue, with optional filters. See notes on individual parameters below.

13 /v1/public/creators
Fetches lists of comic creators with optional filters. See notes on individual parameters below.

14 /v1/public/creators/{creatorId}
This method fetches a single creator resource. It is the canonical URI for any creator resource provided by the API.

15 /v1/public/creators/{creatorId}/comics
Fetches lists of comics in which the work of a specific creator appears, with optional filters. See notes on individual parameters below.

16 /v1/public/creators/{creatorId}/events
Fetches lists of events featuring the work of a specific creator with optional filters. See notes on individual parameters below.

17 /v1/public/creators/{creatorId}/series
Fetches lists of comic series in which a specific creator's work appears, with optional filters. See notes on individual parameters below.

18 /v1/public/creators/{creatorId}/stories
Fetches lists of comic stories by a specific creator with optional filters. See notes on individual parameters below.

19 /v1/public/events
Fetches lists of events with optional filters. See notes on individual parameters below.

20 /v1/public/events/{eventId}
This method fetches a single event resource. It is the canonical URI for any event resource provided by the API.

21 /v1/public/events/{eventId}/characters
Fetches lists of characters which appear in a specific event, with optional filters. See notes on individual parameters below.

22 /v1/public/events/{eventId}/comics
Fetches lists of comics which take place during a specific event, with optional filters. See notes on individual parameters below.

23 /v1/public/events/{eventId}/creators
Fetches lists of comic creators whose work appears in a specific event, with optional filters. See notes on individual parameters below.

24 /v1/public/events/{eventId}/series
Fetches lists of comic series in which a specific event takes place, with optional filters. See notes on individual parameters below.

25 /v1/public/events/{eventId}/stories
Fetches lists of comic stories from a specific event, with optional filters. See notes on individual parameters below.

26 /v1/public/series
Fetches lists of comic series with optional filters. See notes on individual parameters below.

27 /v1/public/series/{seriesId}
This method fetches a single comic series resource. It is the canonical URI for any comic series resource provided by the API.

28 /v1/public/series/{seriesId}/characters
Fetches lists of characters which appear in specific series, with optional filters. See notes on individual parameters below.

29 /v1/public/series/{seriesId}/comics
Fetches lists of comics which are published as part of a specific series, with optional filters. See notes on individual parameters below.

30 /v1/public/series/{seriesId}/creators
Fetches lists of comic creators whose work appears in a specific series, with optional filters. See notes on individual parameters below.

31 /v1/public/series/{seriesId}/events
Fetches lists of events which occur in a specific series, with optional filters. See notes on individual parameters below.

32 /v1/public/series/{seriesId}/stories
Fetches lists of comic stories from a specific series with optional filters. See notes on individual parameters below.

33 /v1/public/stories
Fetches lists of comic stories with optional filters. See notes on individual parameters below.

34 /v1/public/stories/{storyId}
This method fetches a single comic story resource. It is the canonical URI for any comic story resource provided by the API.

35 /v1/public/stories/{storyId}/characters
Fetches lists of comic characters appearing in a single story, with optional filters. See notes on individual parameters below.

36 /v1/public/stories/{storyId}/comics
Fetches lists of comics in which a specific story appears, with optional filters. See notes on individual parameters below.

37 /v1/public/stories/{storyId}/creators
Fetches lists of comic creators whose work appears in a specific story, with optional filters. See notes on individual parameters below.

38 /v1/public/stories/{storyId}/events
Fetches lists of events in which a specific story appears, with optional filters. See notes on individual parameters below.

39 /v1/public/stories/{storyId}/series
Fetches lists of comic series in which the specified story takes place. See notes on individual parameters below.
