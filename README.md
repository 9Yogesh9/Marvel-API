# Marvel-API

Marvel-API explorer with features:

  <ol>
    <li>Fetch characters from marvel.</li>
    <li>Fetch details of a single character.</li>
    <li>Search characters with keywords.</li>
    <li>Add and remove favourite characters.</li>
  </ol>

Highlights:
<ul>
  <li>Local storage is used to store the favourite characters.</li>
  <li>Calling api is skipped while displaying the favourite characters list by storing the key data (need to display cards) in local storage - <strong>Reduces</strong> the api calling overhead and loads page <strong>faster</strong>.</li>
</ul>

List of APIs Used :

  <ol>
    <li> /v1/public/characters </li>
    <small> Fetches lists of comic characters with optional filters. See notes on individual parameters below. </small>
    <li> /v1/public/characters/{characterId} </li>
    <small> This method fetches a single character resource. It is the canonical URI for any character resource provided by the API. </small>
  </ol>

Marvel api is copyright of © 2022 MARVEL.<br>
<a href="http://marvel.com">Data provided by Marvel. © 2022 MARVEL</a>
