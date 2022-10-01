const infodono = (prefix, numerodn, author, NomeDoBot) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return `╭══════════════ ⪩
╰╮   き⃟👨🏻‍💻𝐈𝐍𝐅𝐎-𝐃𝐎𝐍𝐎👩🏻‍💻️⃟ き
╭┤⋟ Meu dono: *${author}*
┃│⋟ [ wa.me/${numerodn} ]
┃│⋟ ${NomeDoBot}
┃╰══ ⪨
╰══════════════ ⪨
`   
}

exports.infodono = infodono
