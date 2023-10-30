const axios = require('axios');
const apiGetInaraMilitarySettlements = require('../src/utils/apiGetInaraMilitarySettlements');

jest.mock('axios');
const axiosGet = axios.get;
axiosGet.mockResolvedValue({ data: `<!DOCTYPE html>
<html style="background-color: #1f1e1e;" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Nearest stations | Elite:Dangerous | INARA</title>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=5">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=5">
<link rel="manifest" href="/site.webmanifest?v=3">
<link rel="mask-icon" href="/safari-pinned-tab.svg?v=3" color="#ff7800">
<link rel="shortcut icon" href="/favicon.ico?v=5">
<meta name="msapplication-TileColor" content="#1b1a19">
<meta name="theme-color" content="#1b1a19">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QYDEPDNS6M"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('consent', 'default', {'ad_storage': 'denied','analytics_storage': 'denied','region': ['AT', 'BE', 'BG', 'BR', 'HR', 'CH', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'XX'],'wait_for_update': 500});if (window.nitroAds && window.nitroAds.loaded) {if (typeof window['__tcfapi'] == 'function') {__tcfapi('hasCustomConsent', 2, (res) => {if (res) {  gtag('consent', 'update', {     'ad_storage': 'granted',     'analytics_storage': 'granted'  });} else {}}, '1');}} else {document.addEventListener('nitroAds.loaded', event => {if (typeof window['__tcfapi'] == 'function') {__tcfapi('hasCustomConsent', 2, (res) => {if (res) {  gtag('consent', 'update', {     'ad_storage': 'granted',     'analytics_storage': 'granted'  });} else {}}, '1');}});}gtag('js', new Date());gtag('config', 'G-QYDEPDNS6M', { 'anonymize_ip': true  });</script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap" rel="stylesheet"><link rel="stylesheet" href="/sites/elite/styles.css?v=83" type="text/css"><script data-cfasync="false">window.nitroAds=window.nitroAds||{createAd:function(){return new Promise(e=>{window.nitroAds.queue.push(["createAd",arguments,e])})},addUserToken:function(){window.nitroAds.queue.push(["addUserToken",arguments])},queue:[]};</script><script data-cfasync="false" async src="https://s.nitropay.com/ads-446.js" crossorigin></script><meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
<meta name="color-scheme" content="light only">

<meta property="og:url" content="https://inara.cz">
<meta property="og:type" content="website">
<meta property="og:title" content="Nearest stations | Elite:Dangerous | INARA">
<meta property="og:description" content="The companion site for Elite:Dangerous. The game database, market data, trade routes, outfitting, engineers, blueprints, crafting, Thargoid war, squadrons, logbooks, galleries, galaxy information and much more...">
<meta property="og:image" content="https://inara.cz/images/weblogo4.png" />


</head><body><div class="sitemenu"><nav><a href="/" class="menulogo"><img src="/images/inaramenulogo.png"></a><a href="/elite" class=" selected " style=" color: #ff7c22 "><span class="full">Elite:Dangerous</span><span class="short">Elite</span></a><a href="/starfield" class="" style=" color: #b9bfbc "><span class="full">Starfield</span><span class="short">Starfield</span></a><a href="/morps" class="" style=" color: #f54040 "><span class="full">MMO.RPG.SPACE</span><span class="short">M.R.S</span></a></nav></div><div class="mainmenu"><nav class="stellarnav" data-closelabel="Close"><a href="/" class="menulogo "><img src="/images/inaramenulogo.png" alt="Site logo"></a><ul><li class=" alignright  bordered " ><a href="/elite/login/" class="bordered">Sign in</a></li><li class=" alignright  menusearch " ><form action="/elite/search/" class="searchbox" method="GET"><input type="search" name="search" class="searchbox-input globalsearch" data-ismainmenu="true" placeholder="" required><input type="submit" class="searchbox-submit pictofont" value="︎"><span class="searchbox-icon pictofont">︎</span></form><a href="/elite/search/" class="mobileonly">Search</a></li><li class=" mega "  data-columns="4" ><a href="/elite/news/">News</a><ul><li class="menutitle desktoponly " ><a>News and articles</a></li><li class="" ><a href="/elite/news/">Overview</a></li><li class="" ><a href="/elite/galnet/">Galnet</a></li><li class="" ><a href="/elite/logbooks/">Logbooks</a></li><li class="" ><a>Misc</a><ul><li class="" ><a href="/rplayer.php" onclick="window.open(this.href, 'radiowindow','left=0,top=0,width=300,height=290,menubar=0,toolbar=0,scrollbars=0,location=0,personalbar=0,resizable=0'); return false;">Inara radio player</a></li><li class="" ><a href="/elite/inara-api/">Inara API</a></li></ul></li></ul></li><li class=" mega "  data-columns="4" ><a href="/elite/galaxy/">Galaxy</a><ul><li class="menutitle desktoponly " ><a>Galaxy</a></li><li class="" ><a href="/elite/galaxy/">Overview</a></li><li class="" ><a href="/elite/communitygoals/">Community goals</a></li><li class="" ><a href="/elite/bulletinboard/">Bulletin board</a></li><li class="" ><a href="/elite/reports-security/">Reports</a></li><li class="" ><a>Thargoid war</a><ul><li class="" ><a href="/elite/thargoidwar/">Overview</a></li><li class="" ><a href="/elite/thargoidwar-conflicts/">Conflicts</a></li><li class="" ><a href="/elite/thargoidwar-locations/">Damaged stations</a></li></ul></li><li class="" ><a>Rankings</a><ul><li class="" ><a href="/elite/rankings/">Overall rankings</a></li><li class="" ><a href="/elite/rankings-cqc/">CQC Rankings</a></li><li class="" ><a href="/elite/rankings-tops/">Top tens</a></li><li class="" ><a href="/elite/galaxy-statistics/">Statistics</a></li></ul></li></ul></li><li class=" mega  selected "  data-columns="4" ><a href="/elite/database/">Data</a><ul><li class=" selected  selecteditem  islarge " ><a href="/elite/nearest/"><span class="menuicon">︎</span>Search nearest<span class="description">Find nearest stations, star systems, minor factions, bodies and more</span></a></li><li class=" islarge " ><a href="/elite/market-traderoutes/"><span class="menuicon">︎</span>Trade routes<span class="description">Get the most profitable trade routes</span></a></li><li class=" islarge " ><a href="/elite/commodities/"><span class="menuicon">︎</span>Commodities<span class="description">Get best commodity prices</span></a></li><li class=" islarge " ><a href="/elite/market-materials/"><span class="menuicon">︎</span>Components trading<span class="description">Find where to buy or sell engineering components</span></a></li><li class=" islarge " ><a href="/elite/nearest-outfitting/"><span class="menuicon">︎</span>Outfitting search<span class="description">Find nearest ships, modules and personal equipment vendors</span></a></li><li class="" ><a>Engineering</a><ul><li class="" ><a href="/elite/engineers/">Engineers</a></li><li class="" ><a href="/elite/blueprints/">Blueprints & upgrades</a></li><li class="" ><a href="/elite/components/">Components</a></li><li class="" ><a href="/elite/experimentaleffects/">Experimental effects</a></li><li class="" ><a href="/elite/synthesis/">Synthesis</a></li><li class="" ><a href="/elite/nearest-stations/?pi17=1&pi18=3&pi19=5000&pa1[]=25&formbrief=1">Material traders</a></li></ul></li><li class="" ><a>Shipyard and outfitting</a><ul><li class="" ><a href="/elite/shipyard/">Ships</a></li><li class="" ><a href="/elite/outfitting/">Modules & equipment</a></li><li class="" ><a href="/elite/techbroker/">Technology broker</a></li></ul></li><li class="" ><a>Systems, stations and factions</a><ul><li class="" ><a href="/elite/starsystems/">Star systems</a></li><li class="" ><a href="/elite/stations/">Stations</a></li><li class="" ><a href="/elite/powers/">Powers</a></li><li class="" ><a href="/elite/minorfactions/">Minor factions</a></li></ul></li></ul></li><li class="" ><a href="/elite/cmdrs/">Commanders</a></li><li class="" ><a href="/elite/squadrons/">Squadrons</a></li><li class="" ><a href="/elite/board/">Discuss</a><ul><li class="" ><a href="/elite/board/">Overview</a></li><li class="" ><a href="/elite/board-latest/">Latest posts</a></li><li class="" ><a href="/elite/board-search/">Search</a></li></ul></li><li class="" ><a href="/elite/gallery/">Gallery</a><ul><li class="" ><a href="/elite/gallery/">Trending</a></li><li class="" ><a href="/elite/gallery-latest/">Latest</a></li><li class="" ><a href="/elite/gallery-popular/">Popular</a></li><li class="" ><a href="/elite/gallery-featured/">Featured</a></li></ul></li></ul></nav></div><div class="maincontainer"><div class="mainheader0 "><nav class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList"><span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="crumb"><a itemtype="http://schema.org/Thing" itemprop="item" href="/elite" href="/elite"><span itemprop="name">Elite</span></a><meta itemprop="position" content="1" /></span><span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="crumb"><a itemtype="http://schema.org/Thing" itemprop="item" href="/elite/database/"><span itemprop="name">Data</span></a><meta itemprop="position" content="2" /></span><span itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="crumb"><span itemprop="name">Search nearest</span><meta itemprop="position" content="3" /></span></nav></div><div class="maincontent0 " ><h1 class="header">Search nearest</h1><nav><ol class="quickmenu "><li class=" selected "><a href="/elite/nearest/" class="quickmenu  selected ">Stations</a></li><li class=""><a href="/elite/nearest-outfitting/" class="quickmenu ">Outfitting</a></li><li class=""><a href="/elite/nearest-minorfactions/" class="quickmenu ">Minor factions</a></li><li class=""><a href="/elite/nearest-starsystems/" class="quickmenu ">Star systems</a></li><li class=""><a href="/elite/nearest-bodies/" class="quickmenu ">Bodies</a></li><li class=""><a href="/elite/nearest-misc/" class="quickmenu ">Misc</a></li></ol></nav><div class="mainblockaction"><div class="incontent"><div class="formbrief">Displaying results for:<br>Near star system: <b>HIP 20616</b>, Economy: <b>Military</b>, Station type: <b>Surface Settlement (Odyssey)</b><br><br><b class="uppercase">Star system properties</b><br>State: <b>Thargoid controlled</b><div class="formseparatorspace"></div></div><button type="button" class="formbriefbutton">Change search</button><div class="formbody " style="display: none;"><form action="/elite/nearest-stations/" method="get"   autocomplete="off" ><input type="hidden" name="formbrief" value="1"><div class="formcolumn " style="width: 50%;"><div class="formelement infield "><label class="formlabelside">Near star system</label><input type="text" name="ps1" value="HIP 20616" placeholder="Type star system name..."  class=" extended "  data-haselitestarsearch="true"  data-cancreateitems="true" ></div><div class="formseparatorspace" ></div><div class="formelement formselect infield "><label class="formlabelside">Allegiance</label><select name="pi13"  class="" ><option value=""   >Any</option><option value="0"   >Independent</option><option value="1"   >Alliance</option><option value="2"   >Empire</option><option value="3"   >Federation</option><option value="9"   >Pirate</option><option value="10"   >Pilots Federation</option><option value="20"   >Thargoids</option><option value="30"   >Guardians</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Government</label><select name="pi14"  class="" ><option value="0"   >Any</option><option value="1"   >Anarchy</option><option value="2"   >Colony</option><option value="3"   >Communism</option><option value="4"   >Confederacy</option><option value="11"   >Cooperative</option><option value="5"   >Corporate</option><option value="6"   >Democracy</option><option value="7"   >Dictatorship</option><option value="8"   >Feudal</option><option value="9"   >Patronage</option><option value="14"   >Prison</option><option value="12"   >Prison Colony</option><option value="10"   >Theocracy</option><option value="13"   >Engineer</option><option value="15"   >Private Ownership</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Economy</label><select name="pi15"  class="" ><option value="0"   >Any</option><option value="1"   >Agriculture</option><option value="11"   >Colony</option><option value="12"   >Damaged</option><option value="17"   >Engineer</option><option value="3"   >Extraction</option><option value="4"   >Industrial</option><option value="5"   >High Tech</option><option value="10" selected  >Military</option><option value="15"   >Prison</option><option value="16"   >Private Enterprise</option><option value="6"   >Refinery</option><option value="13"   >Repair</option><option value="14"   >Rescue</option><option value="7"   >Service</option><option value="9"   >Terraforming</option><option value="8"   >Tourism</option><option value="18"   >Under attack</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Station type</label><select name="pi16"  class="" ><option value=""   >Any</option><option value="99"   >Starport</option><option value="1"   > &nbsp; Starport (Coriolis)</option><option value="12"   > &nbsp; Starport (Orbis)</option><option value="13"   > &nbsp; Starport (Ocellus)</option><option value="19"   > &nbsp; Starport (Asteroid Base)</option><option value="2"   >Outpost</option><option value="3"   > &nbsp; Outpost (Civilian)</option><option value="4"   > &nbsp; Outpost (Commercial)</option><option value="5"   > &nbsp; Outpost (Industrial)</option><option value="9"   > &nbsp; Outpost (Military)</option><option value="10"   > &nbsp; Outpost (Mining)</option><option value="6"   > &nbsp; Outpost (Refinery)</option><option value="7"   > &nbsp; Outpost (Research)</option><option value="11"   > &nbsp; Outpost (Scientific)</option><option value="8"   > &nbsp; Outpost (Unsanctioned)</option><option value="14"   >Surface Port</option><option value="15"   >Surface Station</option><option value="60" selected  >Surface Settlement (Odyssey)</option><option value="17"   >Surface Settlement (Installation)</option><option value="16"   >Surface Engineer Base</option><option value="18"   >Orbital Engineer Base</option><option value="39"   >Fleet Carrier</option><option value="20"   >Megaship</option><option value="21"   >Generation Ship</option><option value="32"   >Flight Operations Carrier</option><option value="33"   > &nbsp; Flight Operations Carrier (Detention Centre)</option><option value="34"   > &nbsp; Flight Operations Carrier (Rescue Vessel)</option><option value="35"   > &nbsp; Flight Operations Carrier (Wells-class Carrier)</option><option value="36"   > &nbsp; Flight Operations Carrier (Incursion Response)</option><option value="22"   >Bulk Cruiser</option><option value="23"   > &nbsp; Bulk Cruiser (Asteroid Miner)</option><option value="24"   > &nbsp; Bulk Cruiser (Agricultural Vessel)</option><option value="25"   > &nbsp; Bulk Cruiser (Bulk Cargo Ship)</option><option value="26"   > &nbsp; Bulk Cruiser (Dredger)</option><option value="27"   > &nbsp; Bulk Cruiser (Prison Ship)</option><option value="28"   > &nbsp; Bulk Cruiser (Science Vessel)</option><option value="29"   > &nbsp; Bulk Cruiser (Survey Vessel)</option><option value="30"   > &nbsp; Bulk Cruiser (Tanker)</option><option value="31"   > &nbsp; Bulk Cruiser (Tourist Ship)</option><option value="53"   >Abandoned Settlement</option><option value="52"   >Capital Ship Dock</option><option value="40"   >Installation</option><option value="41"   > &nbsp; Installation (Agricultural)</option><option value="42"   > &nbsp; Installation (Civilian)</option><option value="43"   > &nbsp; Installation (Comms)</option><option value="44"   > &nbsp; Installation (Government)</option><option value="45"   > &nbsp; Installation (Industrial)</option><option value="46"   > &nbsp; Installation (Medical)</option><option value="47"   > &nbsp; Installation (Military)</option><option value="48"   > &nbsp; Installation (Scientific)</option><option value="49"   > &nbsp; Installation (Security)</option><option value="50"   > &nbsp; Installation (Tourist)</option><option value="51"   > &nbsp; Installation (Unauthorised)</option><option value="70"   >Thargoid base</option></select></div></div><div class="formcolumn " style="width: 50%;"><div class="formelement formselect infield "><label class="formlabelside">or</label><select name="pi1"  class="" ><option value="0"   >Select galactic region</option><option value="1"   >Galactic Centre region centre</option><option value="2"   >Empyrean Straits region centre</option><option value="3"   >Ryker's Hope region centre</option><option value="4"   >Odin's Hold region centre</option><option value="5"   >Norma Arm region centre</option><option value="6"   >Arcadian Stream region centre</option><option value="7"   >Izanami region centre</option><option value="8"   >Inner Orion-Perseus Conflux region centre</option><option value="9"   >Inner Scutum-Centaurus Arm region centre</option><option value="10"   >Norma Expanse region centre</option><option value="11"   >Trojan Belt region centre</option><option value="12"   >The Veils region centre</option><option value="13"   >Newton's Vault region centre</option><option value="14"   >The Conduit region centre</option><option value="15"   >Outer Orion-Perseus Conflux region centre</option><option value="16"   >Orion-Cygnus Arm region centre</option><option value="17"   >Temple region centre</option><option value="18"   >Inner Orion Spur region centre</option><option value="19"   >Hawking's Gap region centre</option><option value="20"   >Dryman's Point region centre</option><option value="21"   >Sagittarius-Carina Arm region centre</option><option value="22"   >Mare Somnia region centre</option><option value="23"   >Acheron region centre</option><option value="24"   >Formorian Frontier region centre</option><option value="25"   >Hieronymus Delta region centre</option><option value="26"   >Outer Scutum-Centaurus Arm region centre</option><option value="27"   >Outer Arm region centre</option><option value="28"   >Aquila's Halo region centre</option><option value="29"   >Errant Marches region centre</option><option value="30"   >Perseus Arm region centre</option><option value="31"   >Formidine Rift region centre</option><option value="32"   >Vulcan Gate region centre</option><option value="33"   >Elysian Shore region centre</option><option value="34"   >Sanguineous Rim region centre</option><option value="35"   >Outer Orion Spur region centre</option><option value="36"   >Achilles's Altar region centre</option><option value="37"   >Xibalba region centre</option><option value="38"   >Lyra's Song region centre</option><option value="39"   >Tenebrae region centre</option><option value="40"   >The Abyss region centre</option><option value="41"   >Kepler's Crest region centre</option><option value="42"   >The Void region centre</option></select></div><div class="formseparatorspace" ></div><div class="formelement formselect infield "><label class="formlabelside">Min. landing pad</label><select name="pi18"  class="" ><option value="0" selected  >Any</option><option value="1"   >Small</option><option value="2"   >Medium</option><option value="3"   >Large</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Max. station distance</label><select name="pi19"  class="" ><option value="0" selected  >Any</option><option value="100"   >100 Ls</option><option value="500"   >500 Ls</option><option value="1000"   >1000 Ls</option><option value="2000"   >2000 Ls</option><option value="5000"   >5000 Ls</option><option value="10000"   >10000 Ls</option><option value="15000"   >15000 Ls</option><option value="20000"   >20000 Ls</option><option value="25000"   >25000 Ls</option><option value="50000"   >50000 Ls</option><option value="100000"   >100000 Ls</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Use surface stations</label><select name="pi17"  class="" ><option value="0" selected  >Yes (with Odyssey stations)</option><option value="2"   >Yes (exclude Odyssey stations)</option><option value="1"   >No</option></select></div><div class="formelement  infield"><div class="checkbox" ><input type="checkbox" name="pi2" value="1"  id="pi2" ><label for="pi2" >Ignore fleet carriers</label></div></div></div><div class="formseparatorspace" ></div><div class="formelement formmultiselect infield "><label class="formlabelside">Station services</label><select name="pa1[]" multiple="multiple" autocomplete="off" class=" extendedtokens "  data-maxtokens="8" ><option value="37"   >Bartender</option><option value="3"   >Black market</option><option value="4"   >Commodity market</option><option value="35"   >Concourse</option><option value="5"   >Contacts</option><option value="10"   >Crew lounge</option><option value="32"   >Fleet carrier administration</option><option value="29"   >Fleet carrier services</option><option value="28"   >Fleet carrier vendor</option><option value="41"   >Frontline Solutions</option><option value="18"   >Interstellar factors</option><option value="25"   >Material trader</option><option value="8"   >Missions</option><option value="9"   >Outfitting</option><option value="39"   >Pioneer Supplies</option><option value="11"   >Rearm</option><option value="33"   >Redemption office</option><option value="12"   >Refuel</option><option value="13"   >Repair</option><option value="24"   >Search and rescue</option><option value="14"   >Shipyard</option><option value="26"   >Technology broker</option><option value="15"   >Tuning</option><option value="6"   >Universal Cartographics</option><option value="34"   >Vendors</option><option value="38"   >Vista Genomics</option><option value="16"   >Workshop</option></select></div><div class="formseparatorspace" ></div><div class="blocktogglecontainer"><div class="blocktoggletrigger">View additional options&nbsp; <span class="pictofont icon">︎</span></div><div class="formelementgroup  blocktogglecontent"><div class="formelementgrouptitle">Station owner properties</div><div class="formelementgroup "><div><div class="formcolumn breakable" style="width: 70%;"><div class="formelement infield "><label class="formlabelside">Faction name</label><input type="text" name="ps2" value="" placeholder="Type minor faction name..."  class=" extended "  data-haselitefactionsearch="true" ></div></div><div class="formcolumn breakable" style="width: 30%;"><div class="formelement  infield emptylabel"><div class="radioswitch" ><input type="radio" name="pi25" value="0" class=""  id="pi25_0"  checked ><label for="pi25_0">Is owner</label><input type="radio" name="pi25" value="1" class=""  id="pi25_1" ><label for="pi25_1">Not owner</label></div></div></div><div class="formseparatorspace"  style="height: 0px; margin: 0px;" ></div><div class="formcolumn " style="width: 50%;"><div class="formelement formselect infield "><label class="formlabelside">Allegiance</label><select name="pi8"  class="" ><option value=""   >Any</option><option value="0"   >Independent</option><option value="1"   >Alliance</option><option value="2"   >Empire</option><option value="3"   >Federation</option><option value="9"   >Pirate</option><option value="10"   >Pilots Federation</option><option value="20"   >Thargoids</option><option value="30"   >Guardians</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Government</label><select name="pi9"  class="" ><option value="0"   >Any</option><option value="1"   >Anarchy</option><option value="2"   >Colony</option><option value="3"   >Communism</option><option value="4"   >Confederacy</option><option value="11"   >Cooperative</option><option value="5"   >Corporate</option><option value="6"   >Democracy</option><option value="7"   >Dictatorship</option><option value="8"   >Feudal</option><option value="9"   >Patronage</option><option value="14"   >Prison</option><option value="12"   >Prison Colony</option><option value="10"   >Theocracy</option><option value="13"   >Engineer</option><option value="15"   >Private Ownership</option></select></div></div><div class="formcolumn " style="width: 50%;"><div class="formelement  infield"><div class="checkbox" ><input type="checkbox" name="pi10" value="1"  id="pi10station" ><label for="pi10station" >Just player factions</label></div></div><div class="formelement  infield"><div class="checkbox" ><input type="checkbox" name="pi11" value="1"  id="pi11station" ><label for="pi11station" >Just controlling factions</label></div></div></div><div class="formseparatorspace" ></div><div class="formcolumn breakable" style="width: 70%;"><div class="formelement formmultiselect infield "><label class="formlabelside">Minor faction state</label><select name="pa2[]" multiple="multiple" autocomplete="off" class=" extendedtokens "  data-maxtokens="8" ><option value="0"   >None</option><option value="17"   >Blight</option><option value="5"   >Boom</option><option value="6"   >Bust</option><option value="13"   >Civil liberty</option><option value="7"   >Civil unrest</option><option value="3"   >Civil war</option><option value="21"   >Cold war</option><option value="18"   >Colonisation</option><option value="19"   >Drought</option><option value="4"   >Elections</option><option value="1"   >Expansion</option><option value="8"   >Famine</option><option value="25"   >Historic event</option><option value="14"   >Incursion</option><option value="16"   >Infested</option><option value="26"   >Infrastructure failure</option><option value="11"   >Investment</option><option value="10"   >Lockdown</option><option value="28"   >Natural disaster</option><option value="9"   >Outbreak</option><option value="15"   >Pirate attack</option><option value="27"   >Public holiday</option><option value="12"   >Retreat</option><option value="20"   >Revolution</option><option value="22"   >Technological leap</option><option value="24"   >Terrorist attack</option><option value="23"   >Trade war</option><option value="2"   >War</option></select></div></div><div class="formcolumn breakable" style="width: 30%;"><div class="formelement  infield emptylabel"><div class="radioswitch" ><input type="radio" name="pi26" value="0" class=""  id="pi26_0"  checked ><label for="pi26_0">All</label><input type="radio" name="pi26" value="1" class=""  id="pi26_1" ><label for="pi26_1">Any</label></div></div></div></div></div><div class="formelementgrouptitle">Star system properties</div><div class="formelementgroup "><div><div class="formcolumn " style="width: 50%;"><div class="formelement formselect infield "><label class="formlabelside">Allegiance</label><select name="pi3"  class="" ><option value=""   >Any</option><option value="0"   >Independent</option><option value="1"   >Alliance</option><option value="2"   >Empire</option><option value="3"   >Federation</option><option value="9"   >Pirate</option><option value="10"   >Pilots Federation</option><option value="20"   >Thargoids</option><option value="30"   >Guardians</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Government</label><select name="pi4"  class="" ><option value="0"   >Any</option><option value="1"   >Anarchy</option><option value="2"   >Colony</option><option value="3"   >Communism</option><option value="4"   >Confederacy</option><option value="11"   >Cooperative</option><option value="5"   >Corporate</option><option value="6"   >Democracy</option><option value="7"   >Dictatorship</option><option value="8"   >Feudal</option><option value="9"   >Patronage</option><option value="14"   >Prison</option><option value="12"   >Prison Colony</option><option value="10"   >Theocracy</option><option value="13"   >Engineer</option><option value="15"   >Private Ownership</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Economy</label><select name="pi5"  class="" ><option value="0"   >Any</option><option value="1"   >Agriculture</option><option value="11"   >Colony</option><option value="12"   >Damaged</option><option value="17"   >Engineer</option><option value="3"   >Extraction</option><option value="4"   >Industrial</option><option value="5"   >High Tech</option><option value="10"   >Military</option><option value="15"   >Prison</option><option value="16"   >Private Enterprise</option><option value="6"   >Refinery</option><option value="13"   >Repair</option><option value="14"   >Rescue</option><option value="7"   >Service</option><option value="9"   >Terraforming</option><option value="8"   >Tourism</option><option value="18"   >Under attack</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Power</label><select name="pi7"  class="" ><option value="0"   >Any</option><option value="-1"   >None</option><option value="2"   >Aisling Duval</option><option value="102"   >Aisling Duval (Controlled)</option><option value="1002"   >Aisling Duval (Exploited)</option><option value="10"   >Archon Delaine</option><option value="110"   >Archon Delaine (Controlled)</option><option value="1010"   >Archon Delaine (Exploited)</option><option value="4"   >Arissa Lavigny-Duval</option><option value="104"   >Arissa Lavigny-Duval (Controlled)</option><option value="1004"   >Arissa Lavigny-Duval (Exploited)</option><option value="1"   >Denton Patreus</option><option value="101"   >Denton Patreus (Controlled)</option><option value="1001"   >Denton Patreus (Exploited)</option><option value="3"   >Edmund Mahon</option><option value="103"   >Edmund Mahon (Controlled)</option><option value="1003"   >Edmund Mahon (Exploited)</option><option value="5"   >Felicia Winters</option><option value="105"   >Felicia Winters (Controlled)</option><option value="1005"   >Felicia Winters (Exploited)</option><option value="7"   >Li Yong-Rui</option><option value="107"   >Li Yong-Rui (Controlled)</option><option value="1007"   >Li Yong-Rui (Exploited)</option><option value="9"   >Pranav Antal</option><option value="109"   >Pranav Antal (Controlled)</option><option value="1009"   >Pranav Antal (Exploited)</option><option value="11"   >Yuri Grom</option><option value="111"   >Yuri Grom (Controlled)</option><option value="1011"   >Yuri Grom (Exploited)</option><option value="6"   >Zachary Hudson</option><option value="106"   >Zachary Hudson (Controlled)</option><option value="1006"   >Zachary Hudson (Exploited)</option><option value="8"   >Zemina Torval</option><option value="108"   >Zemina Torval (Controlled)</option><option value="1008"   >Zemina Torval (Exploited)</option></select></div></div><div class="formcolumn " style="width: 50%;"><div class="formelement formselect infield "><label class="formlabelside">Population</label><select name="pi23"  class="" ><option value="0"   >Any</option><option value="-1"   >None</option><option value="1"   >Above 1</option><option value="10000"   >Above 10,000</option><option value="100000"   >Above 100,000</option><option value="1000000"   >Above 1,000,000</option><option value="1000000000"   >Above 1,000,000,000</option><option value="-10000"   >Below 10,000</option><option value="-100000"   >Below 100,000</option><option value="-1000000"   >Below 1,000,000</option><option value="-1000000000"   >Below 1,000,000,000</option></select></div><div class="formelement formselect infield "><label class="formlabelside">Security level</label><select name="pi6"  class="" ><option value="0"   >Any</option><option value="1"   >None</option><option value="2"   >Low</option><option value="3"   >Medium</option><option value="4"   >High</option><option value="5"   >Anarchy</option></select></div><div class="formelement formselect formmultiselect infield "><label class="formlabelside">Thargoid war state</label><select name="pa3[]" multiple="multiple" autocomplete="off" class=" extendedmulti "  placeholder="Any" ><option value="0"   >Normal</option><option value="1"   >Thargoid alert</option><option value="2"   >Thargoid invasion</option><option value="3" selected  >Thargoid controlled</option><option value="4"   >Thargoid maelstrom</option><option value="5"   >Post-Thargoid recovery</option></select></div></div><div class="formseparatorspace" ></div><div class="formcolumn breakable" style="width: 70%;"><div class="formelement infield "><label class="formlabelside">Minor faction present</label><input type="text" name="ps3" value="" placeholder="Type minor faction name..."  class=" extended "  data-haselitefactionsearch="true" ></div></div><div class="formcolumn breakable" style="width: 30%;"><div class="formelement  infield emptylabel"><div class="radioswitch" ><input type="radio" name="pi24" value="0" class=""  id="pi24_0"  checked ><label for="pi24_0">Is present</label><input type="radio" name="pi24" value="1" class=""  id="pi24_1" ><label for="pi24_1">Not present</label></div></div></div></div></div></div></div><div class="formseparatorspace" ></div><div class="formelement infield"><input type="submit" value="Search"  class="" ></div></form></div></div></div><div class="advertleaderboardcontainer advertplatform2 "><div class="advertleaderboard"><div id="EliteNearest2_M"></div><script type="text/javascript">window['nitroAds'].createAd('EliteNearest2_M', {"refreshLimit": 20, "refreshTime": 35, "renderVisibleOnly": true, "refreshVisibleOnly": true, "sizes": [ ['320','100'], ['300','50'], ['320','50'] ],"report": { "enabled": true, "wording": "Report Ad", "position": "bottom-right" }, "mediaQuery": "(max-width: 1099px)", }); </script><br></div></div></div><div class="sidecontent2 spacerheader" ><div class="advertmedreccontainer advertplatform1 "><div class="advertvideo"><div id="EliteNearest2video_D"></div><script type="text/javascript">window['nitroAds'].createAd('EliteNearest2video_D', {"format": "video-nc","video": { "hidePlaylist": true }, "report": { "enabled": true, "wording": "Report Ad", "position": "bottom-right" }, "mediaQuery": "(min-width: 1099px)", }); </script><br></div></div><div class="adverthalfpagecontainer advertplatform1 "><div class="adverthalfpage"><div id="EliteNearest1_D"></div><script type="text/javascript">window['nitroAds'].createAd('EliteNearest1_D', {"refreshLimit": 20, "refreshTime": 35, "renderVisibleOnly": true, "refreshVisibleOnly": true, "sizes": [ ['300','250'], ['300','600'], ['300','1050'], ['300','50'], ['160','600'] ],"report": { "enabled": true, "wording": "Report Ad", "position": "bottom-right" }, "mediaQuery": "(min-width: 1099px)", }); </script><br></div></div></div><div class="maincontent1 " ><h2 class="header">Station search results</h2><div class="mainblock"><table class="tablesortercollapsed" data-order="[[ 6, &quot;asc&quot; ]]"><thead><tr><th class="lineright" data-priority="1">Station</th><th class="lineright" data-priority="2">Star system</th><th class="lineright" data-priority="3">Economy</th><th class="lineright" data-priority="3">Government</th><th class="lineright" data-priority="3">Allegiance</th><th class="alignright lineright" data-priority="2" width="1%"><span class="tooltip " data-tooltiptext="Station distance in light seconds.">St dist</span></th><th class="alignright" data-priority="1" width="1%"><span class="tooltip " data-tooltiptext="Distance in light years from your current location or location set (or Sol). If present, the arrow indicates the direction from the location set to the target star system (blue/red color hints up/down direction).">Dist</span></th></tr></thead><tbody><tr><td class="lineright wrap"><a href="/elite/station/554351/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Wilkins's Obligation</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14689/">HIP 21112</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 21112" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="14.618503001456">14.62 Ly<span class="distancedirection " style="transform: rotate(93deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/457873/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Burke Defence Hub</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/527612/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Ortega Military Bastion</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/528048/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Mckenzie's Control</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/528049/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Vadamootoo Command Site</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/554495/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Benton's Armament</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/554640/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Teklehaimanot Munitions Enterprise</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/555274/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Shao Arms Installation</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/555753/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Stein's Jurisdiction</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/555947/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Powter Munitions Stockade</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/556996/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Wen Munitions Stockade</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/558751/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Suzuki Military Complex</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/14809/">HIP 20679</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 20679" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="16.665407935277">16.67 Ly<span class="distancedirection dirdown" style="transform: rotate(165deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/497678/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Malakar Defence Barracks</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9351/">Warnones</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Warnones" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="151.76406889381">151.76 Ly<span class="distancedirection dirdown" style="transform: rotate(-151deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/360878/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Kang Munitions Complex</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9351/">Warnones</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Warnones" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="275">275 Ls</td><td class="alignright minor" data-order="151.76406889381">151.76 Ly<span class="distancedirection dirdown" style="transform: rotate(-151deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/253835/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Vasylyshin Munitions Hub</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9340/">HIP 13179</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 13179" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Cooperative</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="1499">1,499 Ls</td><td class="alignright minor" data-order="153.64988152024">153.65 Ly<span class="distancedirection dirdown" style="transform: rotate(-148deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/316813/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Owusu Arms Hub</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9340/">HIP 13179</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 13179" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Cooperative</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="1040">1,040 Ls</td><td class="alignright minor" data-order="153.64988152024">153.65 Ly<span class="distancedirection dirdown" style="transform: rotate(-148deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/374841/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Coulstock-Cockeram Defence Complex</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9340/">HIP 13179</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 13179" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Cooperative</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="1052">1,052 Ls</td><td class="alignright minor" data-order="153.64988152024">153.65 Ly<span class="distancedirection dirdown" style="transform: rotate(-148deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/528546/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Morledge Arms Garrison</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/18824/">HIP 19091</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 19091" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Democracy</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="228">228 Ls</td><td class="alignright minor" data-order="153.96946029241">153.97 Ly<span class="distancedirection dirup" style="transform: rotate(-24deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/528547/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Saliba Command Outpost</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/18824/">HIP 19091</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 19091" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Patronage</td><td class="lineright wrap">Empire</td><td class="alignright minor lineright" data-order="228">228 Ls</td><td class="alignright minor" data-order="153.96946029241">153.97 Ly<span class="distancedirection dirup" style="transform: rotate(-24deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/528641/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Ndam Defence Barracks</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/18824/">HIP 19091</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 19091" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Patronage</td><td class="lineright wrap">Empire</td><td class="alignright minor lineright" data-order="3964">3,964 Ls</td><td class="alignright minor" data-order="153.96946029241">153.97 Ly<span class="distancedirection dirup" style="transform: rotate(-24deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/528636/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Lal Defence Base</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/18824/">HIP 19091</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 19091" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Patronage</td><td class="lineright wrap">Empire</td><td class="alignright minor lineright" data-order="3955">3,955 Ls</td><td class="alignright minor" data-order="153.96946029241">153.97 Ly<span class="distancedirection dirup" style="transform: rotate(-24deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/253834/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Bastien's Service</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9333/">Inara</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Inara" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="1430">1,430 Ls</td><td class="alignright minor" data-order="157.72144148697">157.72 Ly<span class="distancedirection dirdown" style="transform: rotate(-151deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/521722/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Chukwunyelu Command Complex</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9333/">Inara</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Inara" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="1439">1,439 Ls</td><td class="alignright minor" data-order="157.72144148697">157.72 Ly<span class="distancedirection dirdown" style="transform: rotate(-151deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/456545/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Quandt Military Barracks</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9338/">Lhou Mans</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Lhou Mans" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Democracy</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="485">485 Ls</td><td class="alignright minor" data-order="157.94231646027">157.94 Ly<span class="distancedirection dirdown" style="transform: rotate(-151deg) scaleY(0.7);"><span class="pictofont"></span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/353108/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Tutunnyk Arms Site</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4390">4,390 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/447742/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Vasylyshin Arms Site</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4385">4,385 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/457780/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Owor Command Outpost</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4392">4,392 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/465981/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Levada Military Barracks</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="2896">2,896 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/478185/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Makubuya Military Camp</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Feudal</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="2893">2,893 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/478200/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Ramirez Military Site</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4390">4,390 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/478203/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Ibaka Military Barracks</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4394">4,394 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/478205/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Saunders Arms Facility</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4388">4,388 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/478207/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Khatri Stockade</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4388">4,388 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/319693/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Murphy's Armament</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="2891">2,891 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/334307/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Iglesias Defence Enterprise</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="2823">2,823 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/447743/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Lavoie Defence Hub</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4394">4,394 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/478187/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Sugiyama Arms Garrison</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="2901">2,901 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/478209/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Dzuba's Jurisdiction</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9153/">HIP 8525</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 8525" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="4385">4,385 Ls</td><td class="alignright minor" data-order="160.27294102376">160.27 Ly<span class="distancedirection dirdown" style="transform: rotate(-146deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/260301/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Gustard's Barracks</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9156/">HIP 21165</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 21165" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="1372">1,372 Ls</td><td class="alignright minor" data-order="161.82747924575">161.83 Ly<span class="distancedirection dirdown" style="transform: rotate(-153deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/291103/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Dyachenko Munitions Enterprise</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9361/">Liu Huang</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Liu Huang" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Cooperative</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="999">999 Ls</td><td class="alignright minor" data-order="168.85235672487">168.85 Ly<span class="distancedirection dirdown" style="transform: rotate(-144deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/532112/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Buhle's Watch</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9361/">Liu Huang</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Liu Huang" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Cooperative</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="729">729 Ls</td><td class="alignright minor" data-order="168.85235672487">168.85 Ly<span class="distancedirection dirdown" style="transform: rotate(-144deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/502474/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Maslo Military Installation</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9361/">Liu Huang</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Liu Huang" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Cooperative</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="1000">1,000 Ls</td><td class="alignright minor" data-order="168.85235672487">168.85 Ly<span class="distancedirection dirdown" style="transform: rotate(-144deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/290288/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Brandt's Arsenal</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/3015/">Mapon</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Mapon" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Democracy</td><td class="lineright wrap">Federation</td><td class="alignright minor lineright" data-order="1675">1,675 Ls</td><td class="alignright minor" data-order="169.18867801205">169.19 Ly<span class="distancedirection dirdown" style="transform: rotate(-22deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/315536/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Azevedo Defence Site</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/3015/">Mapon</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Mapon" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Democracy</td><td class="lineright wrap">Federation</td><td class="alignright minor lineright" data-order="1665">1,665 Ls</td><td class="alignright minor" data-order="169.18867801205">169.19 Ly<span class="distancedirection dirdown" style="transform: rotate(-22deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/315591/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Conteh's Honour</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/3015/">Mapon</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Mapon" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Democracy</td><td class="lineright wrap">Federation</td><td class="alignright minor lineright" data-order="1666">1,666 Ls</td><td class="alignright minor" data-order="169.18867801205">169.19 Ly<span class="distancedirection dirdown" style="transform: rotate(-22deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/458463/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Briscoe Military Site</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/3015/">Mapon</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Mapon" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Democracy</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="1671">1,671 Ls</td><td class="alignright minor" data-order="169.18867801205">169.19 Ly<span class="distancedirection dirdown" style="transform: rotate(-22deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/520990/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Panchenko Military Installation</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/3015/">Mapon</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Mapon" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Democracy</td><td class="lineright wrap">Federation</td><td class="alignright minor lineright" data-order="1658">1,658 Ls</td><td class="alignright minor" data-order="169.18867801205">169.19 Ly<span class="distancedirection dirdown" style="transform: rotate(-22deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/448642/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Mckenzie Military Encampment</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/9362/">Akbakara</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Akbakara" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="169.72263358724">169.72 Ly<span class="distancedirection dirdown" style="transform: rotate(-144deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/530316/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Pereira Command Garrison</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/13709/">Kaurukat</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Kaurukat" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="184.91106203943">184.91 Ly<span class="distancedirection " style="transform: rotate(-140deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/536879/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Oyinlola Munitions Installation</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/13709/">Kaurukat</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Kaurukat" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="184.91106203943">184.91 Ly<span class="distancedirection " style="transform: rotate(-140deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/554527/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Emeagwali Obligation</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/13709/">Kaurukat</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Kaurukat" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="184.91106203943">184.91 Ly<span class="distancedirection " style="transform: rotate(-140deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/554938/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Temitope's Control</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/13709/">Kaurukat</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="Kaurukat" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Dictatorship</td><td class="lineright wrap">Thargoids</td><td class="alignright minor lineright" data-order="0">-</td><td class="alignright minor" data-order="184.91106203943">184.91 Ly<span class="distancedirection " style="transform: rotate(-140deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/291895/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Burn Landing</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/2654/">HIP 38235</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 38235" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Corporate</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="265">265 Ls</td><td class="alignright minor" data-order="186.31818486039">186.32 Ly<span class="distancedirection dirdown" style="transform: rotate(-16deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr><tr><td class="lineright wrap"><a href="/elite/station/480388/"><div class="stationicon" style="background-image: url(/images/stations/sprites3.png); background-position: -780px 0px;"></div>Sasaki Military Expedition</a> <span class="tag taginline minor">Abandoned</span></td><td class="lineright wrap"><a href="/elite/starsystem/2654/">HIP 38235</a><span class="clipboardbuttonsmall toclipboard" data-clipboard-text="HIP 38235" title="Copy to clipboard"><span class="pictofont">︎</span></span><div class="starsystemstateicon starsystemstate3" title="Thargoid controlled"><span class="pictofont">︎</span></div></td><td class="lineright">Military</td><td class="lineright wrap">Corporate</td><td class="lineright wrap">Independent</td><td class="alignright minor lineright" data-order="266">266 Ls</td><td class="alignright minor" data-order="186.31818486039">186.32 Ly<span class="distancedirection dirdown" style="transform: rotate(-16deg) scaleY(0.7);"><span class="pictofont">︎</span></span></td></tr></tbody></table></div></div><div class="sidecontent3 " ><div class="advertmedreccontainer advertplatform2 "><div class="advertmedrec"><div id="EliteNearest1_M"></div><script type="text/javascript">window['nitroAds'].createAd('EliteNearest1_M', {"refreshLimit": 20, "refreshTime": 35, "renderVisibleOnly": true, "refreshVisibleOnly": true, "sizes": [ ['300','250'], ['300','50'] ],"report": { "enabled": true, "wording": "Report Ad", "position": "bottom-right" }, "mediaQuery": "(max-width: 1099px)", }); </script><br></div></div></div></div><footer><div class="footer"><div class="languageselector">Site language: <a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=1" class="positive" rel="nofollow">English</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=2" class="" rel="nofollow">Deutsch</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=3" class="" rel="nofollow">Français</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=4" class="" rel="nofollow">Español</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=6" class="" rel="nofollow">Português</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=8" class="" rel="nofollow">Italiano</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=12" class="" rel="nofollow">Türkçe</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=5" class="" rel="nofollow">Русский</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=14" class="" rel="nofollow">Українська</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=11" class="" rel="nofollow">中文</a><a href="/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B0%5D=3&ps3=&pi24=0&setlanguage=13" class="" rel="nofollow">한국어</a></div>This website is not an official tool for the game <a href="http://www.elitedangerous.com" rel="noopener" target="_blank" class="minor">Elite: Dangerous</a> and is not affiliated with <a href="http://frontier.co.uk/" rel="noopener" target="_blank" class="minor">Frontier Developments</a>.<br>All information provided is based on publicly available information and may not be entirely accurate.<br><br>Elite &copy; 1984 David Braben & Ian Bell. Frontier &copy; 1993 David Braben, Frontier: First Encounters &copy; 1995 David Braben and Elite: Dangerous &copy; 2012, 2013 Frontier Developments plc. All rights reserved. 'Elite', the Elite logo, the Elite: Dangerous logo, 'Frontier' and the Frontier logo are registered trademarks of Frontier Developments plc. All rights reserved. All other trademarks and copyrights are acknowledged as the property of their respective owners.<br><p class="footeritems"><a href="/elite/policies/" class="footeritem">Policies</a><span data-ccpa-link="1" class="footeritem"></span><span id="adconsent-link" style="display:none"><a onclick="window.__cmp('showModal');" class="footeritem aslink" style="cursor:pointer">Update cookie preferences</a></span><a href="/elite/policies/#contact" class="footeritem">Contact</a><a href="/elite/donate/" class="footeritem">Support Inara / Hide ads</a></p><br></div></footer><div id="formdialog-confirm"></div><div id="ajaxdialog-confirm"></div><div id="dialog-confirm"></div><div id="customdialog1"></div><div id="customdialog2"></div><div id="customdialog3"></div><div id="customdialog4"></div><div id="customdialog5"></div><div id="dummytempcontent" style="height: 1px; overflow:hidden;"></div><script type="text/javascript">if (window['nitroAds'] && window['nitroAds'].loaded) {   document.getElementById('adconsent-link').style.display = typeof __cmp !== undefined ? '' : 'none';} else {   document.addEventListener(      'nitroAds.loaded',      () => (document.getElementById('adconsent-link').style.display = typeof __cmp !== undefined ? '' : 'none')   );}</script><script type="text/javascript">
   var rootUrl = "/sites/general/";
   var rootUrlAjax = "/sites/elite/";
</script>
<script src="/sites/general/js/jquery-3.6.0.min.js"></script><script src="/sites/general/js/jquery-ui.min.js"></script><script src="/sites/general/js/misc.min.js?v=40"></script></body>
</html>` });

let apiCallResponse;

beforeAll(async() => {

  // Act (Global)
  apiCallResponse = await apiGetInaraMilitarySettlements('HIP 20616');
});

describe('apiGetInaraMilitarySettlements.js tests', () => {

  it('apiGetInaraMilitarySettlements api call Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(axiosGet).toHaveBeenCalledTimes(1);
    expect(axiosGet.mock.calls).toEqual([
      ['https://inara.cz/elite/nearest-stations/?formbrief=1&ps1=HIP+20616&pi13=&pi14=0&pi15=10&pi16=60&pi1=0&pi18=0&pi19=0&pi17=0&ps2=&pi25=0&pi8=&pi9=0&pi26=0&pi3=&pi4=0&pi5=0&pi7=0&pi23=0&pi6=0&pa3%5B%5D=3&ps3=&pi24=0']
    ]);
  });

  it('apiGetInaraMilitarySettlements api response Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(apiCallResponse).toEqual([
      {
        Station: "Wilkins's Obligation Abandoned",
        StarSystem: 'HIP 21112',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '14.62'
      },
      {
        Station: 'Burke Defence Hub Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Ortega Military Bastion Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: "Mckenzie's Control Abandoned",
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Vadamootoo Command Site Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: "Benton's Armament Abandoned",
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Teklehaimanot Munitions Enterprise Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Shao Arms Installation Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: "Stein's Jurisdiction Abandoned",
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Powter Munitions Stockade Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Wen Munitions Stockade Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Suzuki Military Complex Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Malakar Defence Barracks Abandoned',
        StarSystem: 'Warnones',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '151.76'
      },
      {
        Station: 'Kang Munitions Complex Abandoned',
        StarSystem: 'Warnones',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '275 Ls',
        Dist: '151.76'
      },
      {
        Station: 'Vasylyshin Munitions Hub Abandoned',
        StarSystem: 'HIP 13179',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,499 Ls',
        Dist: '153.65'
      },
      {
        Station: 'Owusu Arms Hub Abandoned',
        StarSystem: 'HIP 13179',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,040 Ls',
        Dist: '153.65'
      },
      {
        Station: 'Coulstock-Cockeram Defence Complex Abandoned',
        StarSystem: 'HIP 13179',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,052 Ls',
        Dist: '153.65'
      },
      {
        Station: 'Morledge Arms Garrison Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Independent',
        StationDistance: '228 Ls',
        Dist: '153.97'
      },
      {
        Station: 'Saliba Command Outpost Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Patronage',
        Allegiance: 'Empire',
        StationDistance: '228 Ls',
        Dist: '153.97'
      },
      {
        Station: 'Ndam Defence Barracks Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Patronage',
        Allegiance: 'Empire',
        StationDistance: '3,964 Ls',
        Dist: '153.97'
      },
      {
        Station: 'Lal Defence Base Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Patronage',
        Allegiance: 'Empire',
        StationDistance: '3,955 Ls',
        Dist: '153.97'
      },
      {
        Station: "Bastien's Service Abandoned",
        StarSystem: 'Inara',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '1,430 Ls',
        Dist: '157.72'
      },
      {
        Station: 'Chukwunyelu Command Complex Abandoned',
        StarSystem: 'Inara',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '1,439 Ls',
        Dist: '157.72'
      },
      {
        Station: 'Quandt Military Barracks Abandoned',
        StarSystem: 'Lhou Mans',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Independent',
        StationDistance: '485 Ls',
        Dist: '157.94',
      },
      {
        Station: 'Tutunnyk Arms Site Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,390 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Vasylyshin Arms Site Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,385 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Owor Command Outpost Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,392 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Levada Military Barracks Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,896 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Makubuya Military Camp Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Feudal',
        Allegiance: 'Independent',
        StationDistance: '2,893 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Ramirez Military Site Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,390 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Ibaka Military Barracks Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,394 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Saunders Arms Facility Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,388 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Khatri Stockade Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,388 Ls',
        Dist: '160.27'
      },
      {
        Station: "Murphy's Armament Abandoned",
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,891 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Iglesias Defence Enterprise Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,823 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Lavoie Defence Hub Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,394 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Sugiyama Arms Garrison Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,901 Ls',
        Dist: '160.27'
      },
      {
        Station: "Dzuba's Jurisdiction Abandoned",
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,385 Ls',
        Dist: '160.27'
      },
      {
        Station: "Gustard's Barracks Abandoned",
        StarSystem: 'HIP 21165',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '1,372 Ls',
        Dist: '161.83'
      },
      {
        Station: 'Dyachenko Munitions Enterprise Abandoned',
        StarSystem: 'Liu Huang',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '999 Ls',
        Dist: '168.85'
      },
      {
        Station: "Buhle's Watch Abandoned",
        StarSystem: 'Liu Huang',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '729 Ls',
        Dist: '168.85'
      },
      {
        Station: 'Maslo Military Installation Abandoned',
        StarSystem: 'Liu Huang',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,000 Ls',
        Dist: '168.85'
      },
      {
        Station: "Brandt's Arsenal Abandoned",
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,675 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Azevedo Defence Site Abandoned',
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,665 Ls',
        Dist: '169.19'
      },
      {
        Station: "Conteh's Honour Abandoned",
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,666 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Briscoe Military Site Abandoned',
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Independent',
        StationDistance: '1,671 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Panchenko Military Installation Abandoned',
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,658 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Mckenzie Military Encampment Abandoned',
        StarSystem: 'Akbakara',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '169.72'
      },
      {
        Station: 'Pereira Command Garrison Abandoned',
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: 'Oyinlola Munitions Installation Abandoned',
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: 'Emeagwali Obligation Abandoned',
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: "Temitope's Control Abandoned",
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: 'Burn Landing Abandoned',
        StarSystem: 'HIP 38235',
        Economy: 'Military',
        Government: 'Corporate',
        Allegiance: 'Independent',
        StationDistance: '265 Ls',
        Dist: '186.32'
      },
      {
        Station: 'Sasaki Military Expedition Abandoned',
        StarSystem: 'HIP 38235',
        Economy: 'Military',
        Government: 'Corporate',
        Allegiance: 'Independent',
        StationDistance: '266 Ls',
        Dist: '186.32'
      }
    ]);
  });

});
