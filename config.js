import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

// owner
global.owner = [
['573007557854'],
['5352222227'],
['5356666669'],
['5359999995'],
['5359999999'],
['593968585383'],
['5355555755'],
['447597651789']
]

// Información 
globalThis.info = {
wm: "𝙈𝙐𝙇𝙏𝙄𝙅𝙐𝙀𝙂𝙊𝙎 - 𝘼𝘽𝘿𝙄𝘼𝙎",
vs: "2.0.5",
packname: "𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦❤️‍🔥 - MULTIJUEGOS - ABDIAS\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
author: "Owner: @Abdias\n• Bot: MULTIJUEGOS - ABDIAS",
apis: "https://api.delirius.store",
img2: "https://telegra.ph/file/39fb047cdf23c790e0146.jpg",
img4: fs.readFileSync('./media/Menu2.jpg'),
yt: "https://www.youtube.com/@elrebelde.21",
tiktok: "https://www.tiktok.com/@elrebelde.21",
md: "https://github.com/elrebelde21/LoliBot-MD",
fb: "https://www.facebook.com/elrebelde21",
ig: "https://www.instagram.com/chn1ttta",

// 🔴 Solo un canal (eliminado el resto)
nna: "https://whatsapp.com/channel/0029VagJ2FF4CrfrS8BoLW2b",
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})