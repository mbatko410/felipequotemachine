const tweets = [
  "https://twitter.com/FelipeQuote/status/1656767539635007492",
  "https://twitter.com/FelipeQuote/status/1619213651558404096",
  "https://twitter.com/FelipeQuote/status/1601010980292816897",
  "https://twitter.com/FelipeQuote/status/1541428742253293568",
  "https://twitter.com/FelipeQuote/status/1540360762006245378",
  "https://twitter.com/FelipeQuote/status/1539274341807861761",
  "https://twitter.com/FelipeQuote/status/1537102715083431943",
  "https://twitter.com/FelipeQuote/status/1530382413762797568",
  "https://twitter.com/FelipeQuote/status/1525657773291208707",
  "https://twitter.com/FelipeQuote/status/1524215051955183617",
  "https://twitter.com/FelipeQuote/status/1512223166122405890",
  "https://twitter.com/FelipeQuote/status/1504972225958629377",
  "https://twitter.com/FelipeQuote/status/1500288197833670662",
  "https://twitter.com/FelipeQuote/status/1476311547622400005",
  "https://twitter.com/FelipeQuote/status/1464797832188153874",
  "https://twitter.com/FelipeQuote/status/1457189286265212935",
  "https://twitter.com/FelipeQuote/status/1427068360488071170",
  "https://twitter.com/FelipeQuote/status/1416806673239400451",
  "https://twitter.com/FelipeQuote/status/1404285859667615747",
  "https://twitter.com/FelipeQuote/status/1403901500410191874",
  "https://twitter.com/FelipeQuote/status/1397733133475274758",
  "https://twitter.com/FelipeQuote/status/1397731985569861633",
  "https://twitter.com/FelipeQuote/status/1369132766986637315",
  "https://twitter.com/FelipeQuote/status/1344880705726246912",
  "https://twitter.com/FelipeQuote/status/1342250595433013255",
  "https://twitter.com/FelipeQuote/status/1335716841772244995",
  "https://twitter.com/FelipeQuote/status/1324153427572776960",
  "https://twitter.com/FelipeQuote/status/1324153094586961922",
  "https://twitter.com/FelipeQuote/status/1309621814038089728",
  "https://twitter.com/FelipeQuote/status/1301724158108278784",
  "https://twitter.com/FelipeQuote/status/1297372172705554433",
  "https://twitter.com/FelipeQuote/status/1297372043978117120",
  "https://twitter.com/FelipeQuote/status/1187937749933772801",
  "https://twitter.com/FelipeQuote/status/1178436060633862144",
  "https://twitter.com/FelipeQuote/status/1178435104739381248",
  "https://twitter.com/FelipeQuote/status/1177788447987294208",
  "https://twitter.com/FelipeQuote/status/1174729779825827844",
  "https://twitter.com/FelipeQuote/status/1159964533206728705",
  "https://twitter.com/FelipeQuote/status/1152756940633714689",
  "https://twitter.com/FelipeQuote/status/1139009456040292352",
  "https://twitter.com/FelipeQuote/status/1137542195349786625",
  "https://twitter.com/FelipeQuote/status/1137773673526583297",
  "https://twitter.com/FelipeQuote/status/1135323965700923392",
  "https://twitter.com/FelipeQuote/status/1132867828397289472",
  "https://twitter.com/FelipeQuote/status/1132866212197806085",
  "https://twitter.com/FelipeQuote/status/1132353861845491712",
  "https://twitter.com/FelipeQuote/status/1132342908072411136"
];

let shownTweets = new Set();

function getRandomTweet() {
  if (shownTweets.size === tweets.length) {
      // Reset when all tweets have been shown
      shownTweets.clear();
  }

  let tweet;
  do {
      tweet = tweets[Math.floor(Math.random() * tweets.length)];
  } while (shownTweets.has(tweet));

  shownTweets.add(tweet);
  return tweet;
}

document.getElementById("show-tweet-button").addEventListener("click", () => {
  const tweetUrl = getRandomTweet();
  const tweetEmbedCode = `
      <blockquote class="twitter-tweet">
          <a href="${tweetUrl}"></a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  `;

  const tweetDisplayDiv = document.getElementById("tweet-display");
  tweetDisplayDiv.innerHTML = tweetEmbedCode;
});
