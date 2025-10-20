/*
    logs
    logs are used to track your sketchpads and crayon numbers, so please make sure inputs are correct!
    each log item must be on its own seperate line with one of the following formats.
    NOTES: 
        - inputs in brackets can be formatted however you want, as long as it comes after the proper command and before the colon (:)
        - CRAYONS MUST BE WRITTEN OUT WITH A NUMBERED AMOUNT! ex: 1 blue crayon or 2 blue crayons NOT blue crayon, 1 crayon rainbow, etc.
    
    TRADING WITH A PLAYER
    traded to [playername]: yourcard01, yourcard02 for theircard04, theircard05
    ex: traded to gloomlee: anklets01, anklets03 for obnoxious01, obnoxious02
    
    GIFTING TO A PLAYER
    gifted to [playername]: card01, card02
    ex: gifted to gloomlee: obnoxious01, obnoxious02
    
    RECEIVING GIFTS FROM A PLAYER
    gifted by [playername]: card01, card02
    ex: gifted by gloomlee: anklets01, anklets03
    
    RECEIVING CARDS FROM GAMES/ SERVICES/ ETC.
    received from [game name/ service name]: card01, card02, 1 blue crayon
    ex: received from silly blanks 126: obnoxious01, obnoxious02, 2 blue crayona, 1 orange crayon
    
    USING CARDS/CRAYONS/SKETCHPADS AT GAMES/SERVICES
    lost to [game name/ service name]: card02, 1 blue crayon, 1 sketchpad etc.
    ex: lost to silly blanks 126: evil02, menace06
    ex: lost to art shop: 3 sketchpads, 1 blue crayon
    
    everything else doesnt matter; you can change the beginning of each line and reformat the dates if you want!
    ex: `
             ---traded to player: card01, 1 blue crayon for card03
        nov 2nd, 2022
            --received from game: card01, card02, 1 blue crayon
            --started playing
        nov 1st, 2022
        `
    ex: `
        traded to player: card01, 1 blue crayon for card03
        nov-2-2022
        received from game: card01, card02, 1 blue crayon
        started playing
        nov-1-2022
        `
    ex: `
         - traded to player: card01, 1 blue crayon for card03
        11/2/2022
         - received from game: card01, card02, 1 blue crayon
         - started playing
        11/1/2022
        `
*/
/* 
  unformatted logs
  if you already have logs when beginning to use this tool, or would like to archive your logs, insert the logs in the unformattedlogs variable.
  Then set what your number of crayons, current sketchpad, and completed number of sketchpads were based on those logs in UPDATEplayerinfo at the ADDING CRAYONS, CURRENT SKETCHPAD TRADES, COMPLETED SKETCHPADS section.
  
  Once you've done that, begin putting your new correctly formatted logs in the logs variable.
*/
var logs = 
`
`;

var unformattedlogs =
`
<strong>☾ 23/03/23 ;</strong><br>
			- Received evilmonk07, oneandtwo03, evilmonk08, postoffice01, shoujomanga01, ignihyde07, mcmb02, oneandtwo04, ignihyde08, evilmonk11, ignihyde09, ignihyde10, , ignihyde13 from Little Spell Academia 154.<br>
			<strong>☾ 23/03/23 ;</strong><br>
			- Received konpeitojar13, laurentina15, heartshaped01, konpeitojar01 from Release 154.<br>
			<strong>☾ 21/03/23 ;</strong><br>
			- Received oneandtwo01 from <a href="https://argoxi.dreamwidth.org/1776.html?thread=6896#cmt6896">@lingon</a> as a Gift.<br>
			<strong>☾ 15/03/23 ;</strong><br>
			- Received goths from <a href="https://argoxi.dreamwidth.org/1776.html?thread=6384#cmt6384">@sinew</a> as a Gift.<br>
			<strong>☾ 04/03/23 ;</strong><br>
			- Received ignihyde06 from <a href="https://argoxi.dreamwidth.org/1776.html?thread=5616#cmt5616">@moes</a> as a Gift.<br>
			- Received goths14 from <a href="https://argoxi.dreamwidth.org/1776.html?thread=5360#cmt5360">@goiioo4</a> as a Gift.<br>
			<strong>☾ 25/02/23 ;</strong><br>
			- Received fractureray11, tempestissimo11, everything04, holes03, waka-sama18, masquerades08, waka-sama02, waka-sama05, waka-sama13 from Release 153.<br>
			<strong>☾ 29/01/23 ;</strong><br>
			- Received moongold02, eclipsezwei19, unemotional06, sinbad05, darktowers07, automail16 from Player Report 231.<br>
			- Received *1 red crayon, *1 green crayon, *1 grey crayon from Advent 20.<br>
			<strong>☾ 26/01/23 ;</strong><br>
			- Received healthcare14, projectiles20, magichair20, chameleon20, wags20, chemballs20, baymax20, defy20, threeeyes20, shadowball05, starry11, snowynight15, kangel14, ewiwa16, ignihyde05, sanbaka10, goths13, sol05, halfmight11, coarse20, dotdotdot04, mito-mito13, snowflakes08 from Release 152.<br>
			- <a href="https://argoxi.dreamwidth.org/1776.html?thread=4592#cmt4592">Traded</a> drumset06 to @crabg1rl for peer19.<br>
			<strong>☾ 22/01/23 ;</strong><br>
			- Received peddler10, outlandish19, witchelny09, goodday12, despair13 from Advent Calendar 19.<br>
			- Received dirt12, rashly12, heiseiidol10, tenderthief07, droopy16 from Advent Calendar 19.<br>
			<strong>☾ 07/01/23 ;</strong><br>
			- <a href="https://argoxi.dreamwidth.org/1776.html?thread=3568#cmt3568">Traded</a> agrabah16, droids04 to @sinew for april17, neofantasy01.<br>
			<strong>☾ 06/01/23 ;</strong><br>
			- Received *crayon rainbow from @crabg1rl as a Gift.<br>
			<strong>☾ 05/01/23 ;</strong><br>
			- Received flea07, baymax13, retak03, ulaula12, teni15, jolly13, ulaula10, chemballs11, archivist06, minarukamui12, netrunner14, jolly01, alternative07, dirt18, luxuria18, subjugation18, wanderingsea11, archivist13, icicle20, snowflakes03 from Advent Calendar 04.<br>
			<strong>☾ 01/01/23 ;</strong><br>
			- Received emptylot12, firststar15, ehrgeiz13, homeworld05, ironwolf06, ishgard01, gemdust16, lou18, web09, longing13 from Advent Calendar 12.<br>
			- Received colossi10, slumberland09, konghou12, galland05, smokescreen01, hassaikai11, pit16, zaibatsu08, nemesis09, icicle06, kishow12, manhattan07, megamart19, *1 red crayon, *1 yellow crayon, *1 purple crayon from Advent Calendar 02.<br>
			- Received *3 blue crayons, *1 gray crayon from Advent Calendar 16.<br>
			- Received evilmonk17, evilmonk16, peer01, peer02, silentboy01, mcmb01, goths08, peer03, evilmonk15, goths09, goths11, evilmonk14, oneandtwo02, goths12 from Advent Calendar 25.<br>
			<strong>☾ 31/12/22 ;</strong><br>
			- Received  woe04, woe05, woe06 from Advent calendar 23.<br>
			- Received evilmonk12, evilmonk20, ozeki02, ozeki03 from Advent Calendar 21.<br>
			- Mastered Underdome!! Received evilmonk06, unselfish02, overexerting17, *1 green crayon.<br>
			- Received underdome12, underdome13, woe03 from Advent Calendar 15.<br>
			- Received ignihyde19, underdome08, underdome11, goths04, goths05, goths06 from Advent Calendar 14.<br>
			- Received underdome05, underdome06, underdome07 from Advent Calendar 13.<br>
			<strong>☾ 30/12/22 ;</strong><br>
			- Mastered better!!! Received underdome05, curia03, milkcan08, *1 blue crayon<br>
			<strong>☾ 29/12/22 ;</strong><br>
			- Received underdome09, underdome10, ignihyde11, evilmonk09, evilmonk10, *3 red crayons, *3 orange crayons, *2 yellow crayons, *2 green crayons, *2 blue crayons, *2 purple crayons, *1 brown crayon, *4 gray crayons from @admiral as a gift.<br>
			<strong>☾ 26/12/22 ;</strong><br>
			- Received reservoir16, 12hours06, renais06, wolfspirit03, familiaran15 from No Context Theatre 295.<br>
			- Received better18, better19, better20 from Advent Calendar 11.<br>
			- Received goths10, voice10, pink10 from Advent Calendar 10.<br>
			<strong>☾ 24/12/22 ;</strong><br>
			- Received goths17 from beezebeora as a gift.<br>
			<strong>☾ 21/12/22 ;</strong><br>
			- Received diamonddust04, teamyell03, assassin03, fates04, film18, enigmatic15, grin14, fflove20 from Booster Bundle 169<br>
			- Received reservoir16, archwizard15, valetudo11, bumblepig01, cupidsbow09, niu07, hexadecimal02, pit11, archwizard20, enjoysummer12, bumblepig07, translation16, biggsnwedge09, simile04, memorycard09, nobu04, mito-mito06, thehag05, arrester03, tekkenball16 Pick a Color 235<br>
			- Received agrabah16, flowerbed08, gottfried12, codfish08, kelkale20, memorycard11, mito-mito06, blanchefil19, icewitch05, archwizard13, braingum07, shirasagi06, icewitch13, evillaugh17, kishin06, maella11, kelkale06, namidai16, pixiedust08, arrester08 from Pick a Color 234<br>
			<strong>☾ 17/12/22 ;</strong><br>
			- Received sparkball17, godstongue13, dixneuf10, grayscale05, koyaku18, roadless05, lips01 from Host Club Giveaway 227<br>
			<strong>☾ 15/12/22 ;</strong><br>
			- Received better16 from @gloomlee as a gift<br>
			- Received blurry06, vow14, mikishin13, better11, peyang18 from Most Wanted 43<br>
			<strong>☾ 12/12/22 ;</strong><br>
			- Received leap09, lapisdei09, voltaic14, journal09, sunset02, medusa08, athlum20, darkhunter19 from Reading Between the Lines 320<br>
			- Received darkloid14, chrysalis03, hellguide14, deathdrive09, pawn17, goldchain08, paranormal19, chuu03, nag08, raburabu15, untalented09, ssrb06, ohana03, taozi03, cigarette09, lapithai12, syndicate15, gift17, urn09, seeking13, droids04, badboy19, rattata07, positives12, naughty11, aloupeeps04, whiteknight19, whitemouse05, goddess16, drumset06, *1 green crayon from Puzzle chains 237<br>
			<strong>☾ 09/12/22 ;</strong><br>
			- Received bluecorp06, bookseller04, courtesan19, napgus06, napgus16, oneandtwo15, postoffice08 from @crabg1rl as a gift.<br>
			- Traded elmeth12 to @citoyenne for underdome14.<br>
			- Received evilmonk04, evilmonk05, mononoke01, mononoke02 from Advent Calendar 7.<br>
			- Received woe01, ignihyde03, underdome20, better17, better14, better15, ignihyde04 from Advent Calendar 7.<br>
			- Received goths01, goths02, goths03 from Advent Calendar 6.<br>
			<strong>☾ 07/12/22 ;</strong><br>
			- Traded rev10 to @vaini for Underdome19<br>
			<strong>☾ 06/12/22 ;</strong><br>
			- Mastered 14thmoon!!!! <3 Received better13, sparrow01, foryou13, *1 purple crayon.<br>
			- Received better08, better09, 14thmoon15, better10, ignihyde01, better11, underdome18, 14thmoon16, ignihyde02, 14thmoon18, 14thmoon19 from Little Spell Academia 238.<br>
			- Received underdome16, underdome17 from Release 151.<br>
			- Received evilmonk01, evilmonk02, evilmonk03 from Advent Calendar 5.<br>
			- Received 14thmoon12, 14thmoon13, 14thmoon14 from Advent Calendar 3.<br>
			- Received better03, better06, better07 from Advent Calendar 1.<br>
			<strong>☾ 01/12/22 ;</strong><br>
			- Received ozeki19 from @citoyenne as a gift.<br>
			- Traded enkephalin06 to @needles for underdome03.<br>
			<strong>☾ 30/11/22 ;</strong><br>
			- Levelled up to Orange, Received 14thmoon11, otomeroad12, heartbuns01, *1 green crayon.<br>
			- Received memorized11, henshin02, ozeki18, zanarkand19, mattsun12 from Most Wanted 41.<br>
			- Traded enjoysummer13 to @byakkun for underdome02.<br>
			- Received enjoysummer13 from Release 151.<br>
			- Traded tabarzin15 to @larecrow for underdome04.<br>
			- Traded controller08 to @koinuko_colors for ozeki08.<br>
			- Received feminist15, agna13, musclefight15, 14thmoon02, 14thmoon03, 14thmoon04, passion15, permafrost20, doubts16, 14thmoon06, easyr14 from Little Spell Academia 237.<br>
			- Received controller08, enkephalin06, tabarzin15 from Release 151.<br>
			- Received rpgmaker08, gaming10, stera17, papermoon04, plasma12, worm10, meatbun11, erhu06, homeec17, serious11, insect03, fangs05 from Music Station 293.<br>
			<strong>☾ 29/11/22 ;</strong><br>
			- Traded pit12, clings02 to @hyoga for underdome01, better05.<br>
			- Received pit12 from Release 151.<br>
			- Received curaga19, pixiedust06, underdome15 from Release 151.<br>
			- Traded spinea08 to @byakkun for evilmonk18. Received better04, better16, oneandtwo05 as a gift from @byakkun.<br>
			<strong>☾ 27/11/22 ;</strong><br>
			- Traded selfiestick16 to @sangonomiyas for 14thmoon17. Gifted alatus10 to @sangonomiyas.<br>
			<strong>☾ 26/11/22 ;</strong><br>
			- Traded baboo03, skullbrooch06 to @phibby for 14thmoon07, 14thmoon09<br>
			<strong>☾ 25/11/22 ;</strong><br>
			- Received woe02, 14thmoon01, better01, evilmonk13, ignihyde20, mcmb05, shoujomanga08, peer08 from Little Spell Academia 236 <br>
			- Traded burnish06 to @tophatcats for better02. Received woe08 from @tophatcats as a gift.<br>
			<strong>☾ 24/11/22 ; </strong><br>
			- Received peer11, bowties17, napgus19, baboo03, postoffice17, clings02, secretrooms05, rev10, pochette14, thesea20, artists03, glassgame08, selfiestick16, courtesan19, softspoken17, bloodyfesta06, teehee03, sakusaku02, ancients01, auction01, eikons08, shoujomanga17, iceheart05, yaiba07, loneliest09, suinosato01, munnypouch02, zombies01, burnish06, minions02, skullbrooch06, horizons06, board01, gingerbread16, bookseller04, veteran01, cauldrons10, mcmb11, 14thmoon05, kanda20, alatus10, bedsheet17, spinea08, silentboy03, bluecorp04, shimonnu04, writers16, beards07, constellation07, ofthesea17, earthelmt11, snowynight06, otakus07, harus14, ignihyde14, witches20, goths07, natsus20, onceupon06, coarse02, dotdotdot01 from Release 150<br>
			- Traded waterpistol20 to @koinuko_colors for anti-hero04. Received mononoke17 from @koinuko_colors as a gift.<br>
			- Received 14thmoon08, better12, evilmonk19, mcmb03, ozeki01 from @aratakis as a gift<br>
			- Received achoo14, masquerade09 from Starter Pack<br>
			- Received 14thmoon20, 14thmoon10, seth04, bk-20110, clergy19, numberone11, waterpistol20, elmeth12 from Starter Pack
`;
