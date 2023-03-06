import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'
let url = packmen[Math.floor(Math.random() * packmen.length)]
conn.sendButton(m.chat, `_🥵 USH 🥵_`, author, url, [['🔄 altro video 🔄', `cpack3`]], m)
}
handler.help = ['pack3']
handler.tags = ['internet']
handler.command = /^(pack3)$/i
export default handler

global.packmen = [
  "https://i.imgur.com/koGL7Iw.mp4",
  "https://i.imgur.com/oeNffIS.mp4",
  "https://i.imgur.com/fe6CEp8.mp4",
  "https://i.imgur.com/SGf52J2.mp4",
  "https://i.imgur.com/lBONALB.mp4",
  "https://i.imgur.com/BVbGnfY.mp4",
  "https://i.imgur.com/3qbTk8u.mp4",
  "https://i.imgur.com/e2FFR88.mp4",
  "https://i.imgur.com/LopAKn3.mp4",
  "https://i.imgur.com/iGYszRc.mp4"
]
