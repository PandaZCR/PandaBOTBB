exports.wait = () => {
	return`*「❗」WAITING...*`
}

exports.succes = () => {
	return`*「 SUCSESS 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」YOUR LEVELS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*「❗」THE GRUB LEVELS HAVE NOT BEEN ACTIVATED*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW NOT ACTIVATED*`
}

exports.noregis = () => {
	return`*「❗」NOT VERIFICATION (PANDA)「❗」*\n\ntype : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY BRO, BUT YOU'VE BEEN BANNED YAHAHAHA HAYUUU :V*`
}

exports.premium = (prefix) => {
	return`Who? This feature is only for premium users!
Upgrade to premium first my boss
If interested contact my owner
Type : ${prefix}owner`
}

exports.rediregis = () => {
	return`*You have verified*`
}

exports.stikga = () => {
	return`*「 FAILED 」 Try replying / re-tag sis*`
}

exports.linkga = () => {
	return`*「❗」sorry the link is not valid*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOTS MUST BE ADMIN*`
}

exports.bug = () => {
	return`*The problem has been reported to the BOT owner, fake reports will not be responded to*`
}

exports.wrongf = () => {
	return`*「🗿」Where's your text?*`
}

exports.clears = () => {
	return`*Success boss
*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ Name : ${pushname}\`\`\`
\`\`\`➸ Number : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*Sorry ${pushname} Today's limit is over*
*Limit is reset every 24:00 hours*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 20K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
remaining your limit : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade premium my boss, let's be free to use bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ NUMBER : ${sender.split("@")[0]}
┃│➸ PANDA : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONATE*
Pulsa : 0812-1444-1027
Gopay : 0855-5924-0360
Dana : 0855-5924-0360
Saweria : https://saweria.co/ramlangans

Donate to keep the bot updated & Active`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *ADVERTISEMENT ${botName}* 」 ]----- 🔰
──────────────────────────────
We Are D2SX Team [Panda]
──────────────────────────────
* BENEFITS OF RENTING BOTS :*
*1. CAN ADD BOTS TO GROUP*
*2. CAN USE PREMIUM FEATURES*
* ADVANTAGES FOR BOTS :*
*1. CAN BECOME YOUR OWN BOTT OWNER*
*2. CAN CHANGE YOUR OWN BOTT NAME*
*3. CAN BRING BOT TO GROUP*
*4. CAN USE THE COMMAND OWNER*
*5. CAN RENT BOTS BACK*
──────────────────────────────
◯ *IF INTERESTED IN THE ABOVE*
◯ *PLEASE CALL THE NUMBER BELOW:*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}
