const fs = require("fs")
const chalk = require("chalk")


const menu = (prefix, pushname, numerodn, bioo, NomeDoBot,  wame) => {

return ` ╭══════════════ ⪩
╰╮き⃟❗𝐈𝐍𝐅𝐎 𝐃𝐎 𝐁𝐎𝐓❗⃟ き
╭┤⋟ Me: ${NomeDoBot}
┃│⋟ Nome: ${pushname}
┃│⋟ Biografia: ${bioo}
┃│⋟ Status: 『 On-line 』
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟👤𝐍𝐎𝐕𝐎𝐒 𝐌𝐄𝐍𝐔𝐒👤⃟ き
┃│⋟ ${prefix}Menulogos
┃│⋟ ${prefix}Brincadeiras
┃│⋟ ${prefix}Menuadms
┃│⋟ ${prefix}Menudono
┃│⋟ ${prefix}Listaapps
┃│⋟ ${prefix}Listajogos
┃│⋟ ${prefix}Menuhentai
┃│⋟ ${prefix}Menuanime
┃│⋟ ${prefix}Alteradores
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🪀𝐔𝐒𝐔𝐀́𝐑𝐈𝐎𝐒🪀⃟ き
┃│⋟ ${prefix}Convite [Link]
┃│⋟ ${prefix}Bug [Questione]
┃│⋟ ${prefix}Sugestao [Questione]
┃│⋟ ${prefix}Ping 
┃│⋟ ${prefix}Infodono
┃│⋟ ${prefix}Suporte
┃│⋟ ${prefix}Enquete [Texto]
┃│⋟ ${prefix}Perfil
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🔍𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒🔍⃟ き
┃│⋟ ${prefix}Pesquisar [Texto]
┃│⋟ ${prefix}Covidbr
┃│⋟ ${prefix}Covidmundo
┃│⋟ ${prefix}Covidst [Estado]
┃│⋟ ${prefix}Google [Texto]
┃│⋟ ${prefix}Mercadolivre [Texto]
┃│⋟ ${prefix}Celular [Nome] 
┃│⋟ ${prefix}Pinterest [Texto]
┃│⋟ ${prefix}Cep [Número]
┃│⋟ ${prefix}Placa [Número]
┃│⋟ ${prefix}Mediafire [Link] 
┃│⋟ ${prefix}Instadw [Link] 
┃│⋟ ${prefix}Wikipedia [Texto]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟🎰𝐉𝐎𝐆𝐎𝐒🎰⃟ き
┃│⋟ ${prefix}Akinator
┃│⋟ ${prefix}Perguntas
┃│⋟ ${prefix}Eununca
┃│⋟ ${prefix}Jogodaforca
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟📷𝐄𝐅𝐄𝐈𝐓𝐎𝐒 𝐏/𝐈𝐌𝐆📷⃟ き
┃│⋟ ${prefix}Morto [Marcar-img]
┃│⋟ ${prefix}Lgbt [Marcar-img]
┃│⋟ ${prefix}Lixo [Marcar-img]
┃│⋟ ${prefix}Preso [Marcar-img]
┃│⋟ ${prefix}Borrar [Marcar-img]
┃│⋟ ${prefix}Hitler [Marcar-img]
┃│⋟ ${prefix}Deletef [Marcar-img]
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟📱𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒📱⃟ き
┃│⋟ ${prefix}Ytmp3 [Link]
┃│⋟ ${prefix}Ytmp4 [Link]
┃│⋟ ${prefix}Play [Nome] 
┃│⋟ ${prefix}Play2 [Nome] 
┃│⋟ ${prefix}Play3 [Nome]
┃│⋟ ${prefix}Play4 [Nome]
┃│⋟ ${prefix}Play5 [Nome]
┃│⋟ ${prefix}Play6 [Nome]
┃│⋟ ${prefix}Play7 [Nome]
┃│⋟ ${prefix}Playaud [Nome]
┃│⋟ ${prefix}Playvid [Nome]
┃│⋟ ${prefix}Playvid2 [Nome]
┃│⋟ ${prefix}Playvid3 [Nome]
┃│⋟ ${prefix}Playvid4 [Nome]
┃│⋟ ${prefix}Playdoc [Nome]
┃│⋟ ${prefix}Tiktok [Link]
┃│⋟ ${prefix}Tiktok2 [Link]
┃│⋟ ${prefix}Facebook [Link]
┃│⋟ ${prefix}Twitter [Link]
┃│⋟ ${prefix}Instagram [Link]
┃│⋟ ${prefix}Lyrics [Nome] 
┃│⋟ ${prefix}SoundCloud [Link] 
┃│⋟ ${prefix}SoundCloud2 [Link]
┃╰══ ⪨ 
╰╦═════════════ ⪨
╭┤き⃟🔖𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒🔖⃟ き
┃│⋟ ${prefix}Attp [Seu-Texto] 
┃│⋟ ${prefix}Attp2 [Seu-Texto] 
┃│⋟ ${prefix}Ttp [Seu-Texto] 
┃│⋟ ${prefix}Figaleatoria
┃│⋟ ${prefix}Carrinhofig
┃│⋟ ${prefix}Toimg [Marcar-Fig] 
┃│⋟ ${prefix}Togif [Marcar-Fig] 
┃│⋟ ${prefix}Sticker [Marcar-Foto] 
┃│⋟ ${prefix}Roubar [Marcar-Fig] 
┃│⋟ ${prefix}Rename [Marcar-Fig]  
┃│⋟ ${prefix}Legenda [Texto] 
┃│⋟ ${prefix}Legenda2 [Txt|Txt]
┃│⋟ ${prefix}Cstiker [Marcar-Foto] 
┃│⋟ ${prefix}Sfundo [Marcar-Foto] 
┃╰══ ⪨
╰╦═════════════ ⪨
╭┤き⃟📂𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒📂⃟ き
┃│⋟ ${prefix}Encurtalink
┃│⋟ ${prefix}Listabr
┃│⋟ ${prefix}Listafake
┃│⋟ ${prefix}Listaddd
┃│⋟ ${prefix}Lista-online
┃│⋟ ${prefix}Gtts pt [Texto] 
┃│⋟ ${prefix}Metadinha
┃│⋟ ${prefix}Metadinha2
┃│⋟ ${prefix}Metadinha3
┃│⋟ ${prefix}Metadinha4
┃│⋟ ${prefix}Duelo
┃│⋟ ${prefix}Encurtalink [Link]
┃│⋟ ${prefix}Conselhobiblico
┃│⋟ ${prefix}Videopralink
┃│⋟ ${prefix}Imgpralink
┃│⋟ ${prefix}Tomp3
┃│⋟ ${prefix}Gerarlink 
┃│⋟ ${prefix}Level
┃│⋟ ${prefix}Ranklevel
┃│⋟ ${prefix}Correio
┃│⋟ ${prefix}Ping
┃│⋟ ${prefix}Wame [Mensagem]
┃╰══ ⪨
╰══════════════ ⪨`
}

exports.menu = menu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`ATUALIZANDO O MENU `))
	delete require.cache[file]
	require(file)
})


