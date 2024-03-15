//🦄Dream Guy Deepak

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "IG: zasxcata" //ur yt chanel name
global.socialm = "GitHub: QwesHX" //ur github or insta name
global.location = "Indonesia, Jakarta" //ur location

//new
global.botname = 'ZasX Bot' //ur bot name
global.ownernumber = '6283807449268' //ur owner number
global.ownername = 'QwesHK' //ur owner name
global.websitex = "https://allkom.my.id"
global.wagc = "https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835"
global.themeemoji = '🦄'
global.wm = "ZasX Bot Inc."
global.botscript = 'Kamu Nanya???' //script link
global.packname = "Sticker By"
global.author = "�QwesHK"
global.creator = "6283807449268@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283807449268"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
        limit: 'Your limit is up!',
        nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./DeepakMedia/theme/Zenitsu.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
